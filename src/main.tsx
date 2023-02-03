import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <div className="app">
          <header className="appHeader">
              <nav className="appHeaderLayout">
                  <ul className="listDefaults directories">
                      <li>
                          <h2 tabIndex={1} className="directory currentDirectory">
                              Library
                          </h2>
                      </li>
                      <li>
                          <h2 tabIndex={1} className="directory">Classic Rock</h2>
                      </li>
                      <li>
                          <h2 tabIndex={1} className="directory">...</h2>
                      </li>
                  </ul>
              </nav>
          </header>
      </div>
  </React.StrictMode>,
)