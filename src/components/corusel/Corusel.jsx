import React from 'react';
import './corusel.css';
import SlideImg from "../../assets/images/about1.jpg"
import { Slide } from 'react-slideshow-image';
import { Icon } from '@iconify/react/dist/iconify';

const Corusel = () => {
  return (
    <div className="first-slider">
             <Slide
                slidesToScroll={1}
                slidesToShow={1}
                indicators={false}
                arrows={false}
                autoplay={true}
                duration={10}
                transitionDuration={3000}
              >
                <div className="add">
                  <img
                  src={SlideImg}
                  alt='hahahha'
                  />
                </div>
                <div className="add">
                  <img 
                  src={SlideImg }   
                                 />
                </div>
                <div className="add">
                  <img 
                  src={SlideImg } 
                  />
                </div>
                <div className="add">
                  <img 
                  src={SlideImg } 
                  />
                </div>
                <div className="add">
                  <img 
                  src={SlideImg } 
                  />
                </div>
                <div className="add">
                  <img 
                  src={SlideImg } 
                  />
                </div>
              </Slide>
              <button
                className="fnb"
              >
                <Icon
                  icon="ic:round-navigate-next"
                  className="fa-solid fa-heart"
                />
              </button>
              <button
                className="fbb"
              >
                <Icon
                  icon="ic:round-navigate-before"
                  className="fa-solid fa-x"
                />
              </button>
            </div>
  );
}

export default Corusel;
