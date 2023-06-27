import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

function TopShowCarousel() {

    return (
    
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="from.png" className="d-block w-100 testImg" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="from.png" className="d-block w-100 testImg" alt="cookies"/>
            </div>
            <div className="carousel-item">
            <img src="kyle.jpg" className="d-block w-100 testImg" alt="a nice pic"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default TopShowCarousel
