import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PdfWatcher } from './PdfWatcher';
import { ReactPdfWatcher } from './ReactPdfWatcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/*<PdfWatcher url={require('./a-sample-pdf.pdf')} />*/}
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <ReactPdfWatcher fileUrl={'http://media.pragprog.com/titles/ktuk/excerpts.pdf'} />
      </header>
    </div>
  );
}

export default App;
