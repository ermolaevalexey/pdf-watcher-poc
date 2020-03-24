import * as React from 'react';
import * as pdfJs from 'pdfjs-dist';
import { useEffect, useRef } from 'react';

pdfJs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfJs.version}/pdf.worker.js`;
export interface PdfWatcherProps {
    url: string;
}

export function PdfWatcher(props: PdfWatcherProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        try {
            const loadingTask = pdfJs.getDocument(props.url);
            const pdf = await loadingTask.promise;

            const page = await pdf.getPage(1);

            const viewport = page.getViewport({ scale: 1 });

            const canvas = canvasRef.current;
            let context;
            if (canvas) {
                context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
            }

            const renderContext = {
                canvasContext: context,
                viewport
            };
            await page.render(renderContext as any);

            console.log("Page rendered!");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

