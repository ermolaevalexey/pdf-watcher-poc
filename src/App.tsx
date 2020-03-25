import React, { useCallback, useState } from 'react';
import './App.css';
import { ReactPdfWatcher } from './ReactPdfWatcher';

function App() {
  const [url, setUrl] = useState('');

  const updateUrl = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  }, [url, setUrl]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF watcher POC</h1>
      </header>
      <div className="App-Content">
        <h2>Enter a URL with PDF file of choice*</h2>
        <h3>Examples:</h3>
        <ul className="links">
          <li><code>https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/resume/output.pdf</code></li>
          <li><code>https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/pageWrap/output.pdf</code></li>
          <li><code>https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/knobs/output.pdf</code></li>
          <li><code>https://ermolaevalexey.github.io/pdf-watcher-poc/a-sample-pdf.pdf</code></li>
          <li><code>https://ermolaevalexey.github.io/pdf-watcher-poc/gre_research_validity_data.pdf`</code></li>
        </ul>
        <div className="App-Form">
          <input type="text" value={url} onChange={updateUrl} />
          <span className="disclaimer">*External urls will work only with allowed cross-domain access</span>
        </div>
        <div className="Watcher-container">
          {url &&
            <ReactPdfWatcher
              fileUrl={url}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
