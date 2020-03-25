import React from 'react';
import logo from './logo.svg';
import './App.css';
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
        <ReactPdfWatcher fileUrl={'https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/resume/output.pdf'} />
      </header>
    </div>
  );
}

export default App;
