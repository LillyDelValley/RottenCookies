import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CrimeCarousel(props) {

    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {

    const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODBhNDFmYjI0YTE0N2VjMDAyMzRiNDBiN2I1MzU1OSIsInN1YiI6IjY0OTUxODhmZDVmZmNiMDExYzVhZDU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LJ1GeGwx8BaLzjiamCrHLMKwtte_yDQwN8mG4K8N1tU'
            }
        };

    const fetchCarouselItems = async () => {
        const tvListResponse = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80&with_original_language=en', options);
        const tvListData = await tvListResponse.json();

        console.log(tvListData);
        const tvShowNames = tvListData.results.slice(0, 10).map(show => show.name);
        console.log(tvShowNames);
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
                <h2 className="mb-0"> Crime Shows </h2>
                <Carousel swipeable={false} draggable={false}  showDots={true} autoPlay={props.deviceType !== "mobile" ? true : false} responsive={responsive} ssr={true} infinite={true}  autoPlaySpeed={2500} keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container" sliderClass="height-adj" removeArrowOnDeviceType={["tablet", "mobile"]} deviceType={props.deviceType} itemClass="item-width-adj h-100 carousel-item-padding-40-px" imgClass="h-100">
                    {carouselItems.map((series, index) => ( 
                        <div className="size-adj">
                            <img key={index} className="h-100 carousel-img-adj" src={series.img} alt={series.name} /> 
                        </div>

                        )
                    )}
                </Carousel>
            </div>
        </>
    );

}

export default CrimeCarousel;