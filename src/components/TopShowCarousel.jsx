import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopShowCarousel(props) {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
    const fetchCarouselItems = async () => {
        const tvListResponse = await fetch("https://www.episodate.com/api/most-popular?page=1");
        const tvListData = await tvListResponse.json();
        const tvShowNames = tvListData.tv_shows.slice(0, 10).map(show => show.name);

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

    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

    return (
        <>
            <div className="container-fluid">
                <h2 className=""> Popular Shows </h2>
            </div>
            <Carousel swipeable={false} draggable={false}  showDots={true} autoPlay={props.deviceType !== "mobile" ? true : false} responsive={responsive} ssr={true} infinite={true}  autoPlaySpeed={2500} keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container" sliderClass="height-adj" removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={props.deviceType} itemClass="item-width-adj h-100 carousel-item-padding-40-px" imgClass="h-100">
                {carouselItems.map((series, index) => ( 
                    <div className="size-adj">
                        <img key={index} className="h-100 carousel-img-adj" src={series.img} alt={series.name} /> 
                    </div>

                    )
                )}
            </Carousel>
        </>
    );
}

export default TopShowCarousel;

