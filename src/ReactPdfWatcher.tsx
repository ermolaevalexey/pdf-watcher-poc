import React, { useCallback, useEffect, useRef, useState } from 'react';
import { range } from 'lodash';
import { Document, Page, pdfjs as pdfJs } from 'react-pdf';
import './ReactPdfWatcher.css';

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
  const [pagesCount, setPagesCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateBinary = useCallback(async () => {
    const file = await getFile(props.fileUrl);
    setBinaryFile(file);
  }, [props.fileUrl]);

  const updatePagesCount = useCallback(({ numPages }: pdfJs.PDFDocumentProxy) => {
    setPagesCount(numPages);
  }, [setPagesCount]);

  useEffect(() => {
    (async () => {
      await updateBinary();
    })();
  }, [updateBinary]);

  return (binaryFile &&
    <div ref={containerRef}>
      <Document
        className="document"
        file={binaryFile}
        onLoadSuccess={updatePagesCount}
        renderMode="svg"
      >
        {!!pagesCount && range(1, pagesCount + 1).map((pageNumber) =>
          <Page
            className="page"
            key={pageNumber}
            pageNumber={pageNumber}
            width={(containerRef.current && containerRef.current!.clientWidth) || 0}
          />
        )}
      </Document>
    </div>
  );
}
