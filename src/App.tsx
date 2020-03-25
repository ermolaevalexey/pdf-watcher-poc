import React from 'react';
import './App.css';
import { ReactPdfWatcher } from './ReactPdfWatcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF watcher POC</h1>
      </header>
      <div className="App-Content">
        <div className="Watcher-container">
          <ReactPdfWatcher
            fileUrl={'https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/resume/output.pdf'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
