import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import TopShowCarousel from './components/TopShowCarousel.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <TopShowCarousel />
  </React.StrictMode>,
)
