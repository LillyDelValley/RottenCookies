import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from 'image-js';

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
        
        let objImageUrl = tvMazeListData[0].show.image.original;
        let image = await Image.load(objImageUrl);
        let reSizedImg = image.resize({height:700, width:1300}).toDataURL();
    
        const tvMazeShow = {
            name: tvMazeListData[0].show.name,
            img: reSizedImg
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
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
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
            {/* autoPlay={props.deviceType !== "mobile" ? true : false}  */}
            <Carousel swipeable={false} draggable={false}  showDots={true} responsive={responsive} ssr={true} infinite={true}  autoPlaySpeed={2500} keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container" sliderClass="height-adj" removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={props.deviceType} itemClass="item-width-adj h-100" imgClass="h-100">
                {carouselItems.map((series, index) => ( 
                    <img key={index} className="h-100 carousel-img-adj" src={series.img} alt={series.name} /> 
                    )
                )}
            </Carousel>
        </>
    );
}

export default TopShowCarousel;

