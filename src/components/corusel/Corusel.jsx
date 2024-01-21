import React from 'react';
import './corusel.css';
import SlideImg from "../../assets/images/about1.jpg"

const Corusel = () => {
  return (
    <div className="carousel">
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={SlideImg} alt="Slide 1" />
      </div>
    </div>
  );
}

export default Corusel;
