import React from 'react';
import './News.css';
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function News() {

    const [newsApi, setNewsApi] = useState([])

    function getAPI() {
       
        
        fetch('https://newsapi.org/v2/everything?q=movies&from=2022-08-14&sortBy=publishedAt&apiKey=e82c2c1eac7546388b50b3be09fb488f')
            .then(response => response.json())
            .then(response => {
                let data = []
                
                response.articles.forEach(elem => {
                    
                    let prod = {
                        title: elem.title,
                        description: elem.description,
                        link: elem.url,
                        img: elem.urlToImage,
                    }
                    if (data.length <= 25) data.push(prod)
                    
                    
                    if (data.length === 25) setNewsApi(data)
                    
                });
                
            })
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
      };

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",  }}
            onClick={onClick}
          />
        );}

    useEffect(()=> {
        getAPI()
    }, [])


  return (
    <>
        <div className='news__wrapper'>
            <h2 className='news__wrapper_name'>World News</h2>
            <Slider {...settings}>
            
                {newsApi.map((item, ind) => {
                    return (
                        <div className="news__container" key={ind}>
                            <h3 className='news__title'>{item.title}</h3>
                            <div className="news__img"><img src={item.img} alt={item.title} /></div>
                            <div className="news__about">
                                <p className='news__description'>{item.description}</p>
                                <a href = {item.link} className='news__link'>Want to learn more?</a>
                            </div>
                        </div>

                    )
                })}
            
            </Slider>
        </div>
        
    </>
  );
}

export default News;