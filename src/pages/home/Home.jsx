import React, { useState } from 'react';import "./home.css";
import HomeImg1 from "../../assets/images/home1.jpg";
import HomeImg2 from "../../assets/images/home2.jpg";
import HomeImg3 from "../../assets/images/home3.jpg";

import Navbar from "../../components/navbar/Navbar";
import { Link } from 'react-router-dom';
const Home = () => {
    const [counter, setCounter] = useState(0);
    const slideWidth = 100; 

    const handleNext = () => {
        setCounter(counter + 1);
    };

    const handlePrev = () => {
        setCounter(counter - 1);
    };
    const [searchType, setSearchType] = useState('For Sale');

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
    };
    return (
        <div className="home">
            <div className="home_header">
                <Navbar/>
            </div>
            {/* body part */}
            <section className="main_part">
                {/* left card */}
                <div className="leftCard">
                    <div className="texts">
                        <h3 className="little_title">REAL ESTATE</h3>
                        <h1 className="big_title">Find a perfect home you love..!</h1>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, explicabo assumenda repellendus nulla ab in deserunt voluptates atque molestiae numquam.</p>
                    
                    </div>
                    <div class="carousel-slider" style={{ transform: `translateX(${-slideWidth * counter}%)` }}>
                        <div class="slide" >
                            <img src={HomeImg1} alt="Home 1"/>
                        </div>
                        <div class="slide">
                            <img src={HomeImg2} alt="Home 2"/>
                        </div>
                        <div class="slide">
                            <img src={HomeImg3} alt="Home 3"/>
                        </div>
                    </div>
                <button class="carousel-btn prev" onClick={handlePrev}>◀</button>
                    <button class="carousel-btn next" onClick={handleNext}>▶</button>
                </div>


                {/* right card */}
                <div className="rightCard">
                <div className="property-search">
                    
                <div className="search-style">
                <button className={searchType === 'For Sale' ? 'active' : ''} onClick={() => handleSearchTypeChange('For Sale')}>For Sale</button>
                <button className={searchType === 'For Rent' ? 'active' : ''} onClick={() => handleSearchTypeChange('For Rent')}>For Rent</button>
            </div>
            <div className="search_part">
            <div className="city-list">
                <select className='select_item'>
                    <option>Tashkent</option>
                    <option>Bukhara</option>
                    <option>Fergana</option>
                    <option>Andijan</option>
                    <option>Navoiy</option>
                    
                </select>
            </div>
           
            
            <div className="property-options">
                <select className='select_item'>
                    <option>Select Property Type</option>
                    {/* Add more property type options */}
                </select>
                <select className='select_item'>
                    <option>Select Rooms</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                </select>
            </div>
            <div className="search-bar">
                {/* <button >Search</button> */}
            </div>
            </div>
            
            
        </div>
                </div>
            </section>
        </div>
    )
};
export default Home;
