import * as React from 'react';
import { range } from 'lodash';
import { Document, Page, pdfjs as pdfJs } from 'react-pdf';
import { useCallback, useEffect, useState } from 'react';

pdfJs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfJs.version}/pdf.worker.js`;
export interface ReactPdfWatcherProps {
    fileUrl: string;
}

function getFile(url: string) {
    return fetch(url, {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/pdf'
        }
    }).then(response => response.blob());
}

export function ReactPdfWatcher(props: ReactPdfWatcherProps) {

    const [pdf, setPdf] = useState<pdfJs.PDFDocumentProxy | null>(null);
    const [pages, setPages] = useState<pdfJs.PDFPageProxy[]>([]);

    const updatePdf = useCallback((pdfDocument: pdfJs.PDFDocumentProxy) => {
        setPdf(pdfDocument);
    }, [pdf, setPdf]);

    const getPages = useCallback(async (numPages: number) => {
        const data: pdfJs.PDFPageProxy[] = [];
        for (const pageId of range(1, numPages + 1)) {
            data.push(await pdf?.getPage(pageId)!);
        }

        setPages(data);
    }, [pdf, pages, setPages]);


    useEffect(() => {
        let blob;
        getFile(props.fileUrl).then(f => {
            blob = f;
            console.log(blob);
        });

        if (pdf) {
            getPages(pdf.numPages);
        }
    }, [pdf]);

    return null;
    // return (
    //     <Document
    //         file={props.fileUrl}
    //         onLoadSuccess={updatePdf}
    //         onLoadError={console.error}
    //     >
    //         {pages.map((page) => (
    //             <Page pageNumber={page.pageNumber} width={600} />
    //         ))}
    //     </Document>
    // );
}
