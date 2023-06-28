import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createElement, useEffect, useState } from 'react';

function TopShowCarousel() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      const tvListResponse = await fetch("https://www.episodate.com/api/most-popular?page=1");
      const tvListData = await tvListResponse.json();
      const tvShowNames = tvListData.tv_shows.slice(0, 4).map(show => show.name);

      const tvMazeShows = [];
      for (const showName of tvShowNames) {
        const tvMazeListResponse = await fetch(`http://api.tvmaze.com/search/shows?q=${showName}`);
        const tvMazeListData = await tvMazeListResponse.json();
        const tvMazeShow = {
          name: tvMazeListData[0].show.name,
          img: tvMazeListData[0].show.image.original
        };
        tvMazeShows.push(tvMazeShow);
      }

      setCarouselItems(tvMazeShows);
    };

    fetchCarouselItems();
  }, []);

  return (
    <div id="top-carousel" className="carousel slide">
      <div className="carousel-inner">
        {carouselItems.map((series, index) => (
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
