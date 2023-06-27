import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Header from './components/Header'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
