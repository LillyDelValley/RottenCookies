import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react'

function TopShowCarousel() {

    const tvShowList = []
    useEffect(() => {
    const getTvList = ((async () => {
        const tvList = await fetch("https://www.episodate.com/api/most-popular?page=1")
        const tvObj = await tvList.json()
        // console.log(tvObj.tv_shows[0])
        for(let i = 0; i < 4; i++) {
            // console.log(tvObj.tv_shows[i])
            tvShowList.push(tvObj.tv_shows[i].name)
        }
        console.log(tvShowList)
    }
    ))()
//  getTvList()
    }  //use effect close
    ,
    []
    )   //use effect close
   
//EX
// function TopShowCarousel() {   
//     const [carouselItems, setCarouselItems] = useState([]);   
//     useEffect(() => {     
//         fetch('https://www.episodate.com/api/most-popular?page=1')       
//         .then((response) => response.json())       
//         .then((data) => setCarouselItems(data.tv_shows))       
//         .catch((error) => console.log(error));   
//     }, 
//     []);
//ENDEX


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
