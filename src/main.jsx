import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import TopShowCarousel from './components/TopShowCarousel.jsx'
import './css/topShowCarousel.css'
import Carousels from './components/Carousels'
import './css/carousels.css'
import Footer from './components/Footer'
import './css/footer.css'
import './css/index.css'
import CookiePopUp from './components/CookiePopUp'

ReactDOM.createRoot(document.getElementById('root')).render(
<div>
    <Header />
    <TopShowCarousel />
    <Carousels></Carousels>
    <Footer></Footer>
    <CookiePopUp></CookiePopUp>
  </div>
)
