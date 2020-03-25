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
        headers: {
            'Accept': 'application/pdf'
        }
    }).then(response => response.blob());
}

export function ReactPdfWatcher(props: ReactPdfWatcherProps) {
    const [binaryFile, setBinaryFile] = useState<Blob | null>(null);
    const [pages, setPages] = useState<pdfJs.PDFPageProxy[]>([]);

    const updateBinary = useCallback(async () => {
        const file = await getFile(props.fileUrl);
        setBinaryFile(file);
    }, [binaryFile, setBinaryFile]);

    useEffect(() => {
        (async () => {
            await updateBinary();
        })();
    }, []);

    return (binaryFile &&
        <Document
            file={binaryFile}
        >
            <Page pageNumber={1} width={600} />
        </Document>
    );
}
