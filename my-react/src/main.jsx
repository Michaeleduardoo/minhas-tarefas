import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalSty from "./GlobStyle"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalSty/>
    <App/>
  </React.StrictMode>
)
