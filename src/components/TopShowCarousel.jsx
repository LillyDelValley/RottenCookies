import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createElement, useEffect, useState} from 'react'

function TopShowCarousel() {
  const [tvMazeShowsArray, setTvMazeShowsArray] = useState([]);

//   const tvMazeShowsArray = []

    const tvShowList = []
    useEffect(() => {
    const getTvList = ((async () => {
        const tvList = await fetch("https://www.episodate.com/api/most-popular?page=1")
        const tvObj = await tvList.json()
        for(let i = 0; i < 4; i++) {
            tvShowList.push(tvObj.tv_shows[i].name)
        }
        console.log(tvShowList)

        for (let i = 0; i < tvShowList.length; i++) {
            let popShow = tvShowList[i]
            const tvMazeList = await fetch(`http://api.tvmaze.com/search/shows?q=${popShow}`)
            const tvMazeObj = await tvMazeList.json()
            let tvMazeShowObject = {
                name: tvMazeObj[0].show.name,
                img: tvMazeObj[0].show.image.original
            }
                tvMazeShowsArray.push(tvMazeShowObject)
                setTvMazeShowsArray(tvMazeShowsArray)
        }  //END: 2nd for loop L19
                console.log(tvMazeShowsArray)
    }))()  //END: getTvList L11
},[])      //END: useEffect L10
    return (
    <div id="top-carousel" className="carousel slide">
      <div className="carousel-inner">
        {tvMazeShowsArray.map((series, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={series.img} className="d-block w-100 testImg" alt={series.name} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#top-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#top-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TopShowCarousel;
