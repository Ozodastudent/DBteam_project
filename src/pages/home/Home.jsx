import React, { useState } from 'react';import "./home.css";
import HomeImg1 from "../../assets/images/home1.jpg";
import HomeImg2 from "../../assets/images/home2.jpg";
import HomeImg3 from "../../assets/images/home3.jpg";
import AboutImg1 from "../../assets/images/about1.jpg";
import AboutImg2 from "../../assets/images/about2.jpg";
import AboutImg3 from "../../assets/images/about3.jpg";
import ListImg1 from "../../assets/images/list1.jpg";
import ListImg2 from "../../assets/images/list2.jpg";
import ListImg3 from "../../assets/images/list3.jpg";
import SearchImg1 from "../../assets/images/search.png";
import HomeImg4 from "../../assets/images/home.png";
import BedImg1 from "../../assets/images/bed.png";
import NeighborhoodImg1 from "../../assets/images/modernHouse1.jpeg";
import NeighborhoodImg2 from "../../assets/images/modernHouse2.jpeg";
import NeighborhoodImg3 from "../../assets/images/modernHouse3.jpeg";
import NeighborhoodImg4 from "../../assets/images/modernHouse4.jpeg";



import Navbar from "../../components/navbar/Navbar";
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
            {/* home section */}
            <section id='#' className="main_part">
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
                <button className='search_btn'>Search</button>
            </div>
            </div>
        </div>
                </div>
            </section>

            {/* about part */}
            <section id='about' className="about_part">
            <div className="aboutLeftCard">
                    <div className="about_texts">
                        <h3 className="little_title">WHO ARE WE</h3>
                        <h1 className="about_big_title">Assisting individuals in locating the appropriate real estate.</h1>
                        <p className="desc">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                    
                    </div>
                    <div className="about_cards">
                        <div className="card_one">
                            <h3 className='card_title'>Donec porttitor euismod</h3>
                            <p className='card_text'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
                        </div>
                        <div className="card_one">
                        <h3 className='card_title'>Donec porttitor euismod</h3>
                        <p className='card_text'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
                        </div>
                    </div>
                </div>
                <div className="aboutRightCard">
                    <div className="img1">
                        <img className='about_images' width={400} height={500} src={AboutImg1} alt="image" />
                    </div>
                    <div className="img2">
                    <img className='about_images' width={300} height={400} src={AboutImg2} alt="image" />
                    <img className='about_images' width={350} height={300} src={AboutImg3} alt="image" />
                    </div>
                </div>
            </section>

        {/* Listings part */}
            <section id='Listings' className="listings_part">
                <div className="listings_header">
                <div className="listingLeftCard">
                    <div className="about_texts">
                        <h3 className="little_title">CHECK OUT OUR NEW</h3>
                        <h1 className="about_big_title">Latest listed properties</h1>
                        <p className="desc">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                    
                    </div>
                </div>
                <div className="listingRightCard">
                    <div className="listing_options">
                        <button className='all_btn'>All</button>
                        <button className='sell_btn'>Sell</button>
                        <button className='rent_btn'>Rent</button>
                    </div>

                </div>
                </div>
                <div className="listing_cards">
                    <div className="listing_card1">
                        <img  className='listing_imgs' width={350} height={300} src={ListImg1} alt="image" />
                        <h4>$5. 490</h4>
                        <h4>Tranquil Haven in the Woods</h4>
                        <p>103 Wright CourtBurien, WA 98168</p>
                        <div>
                            <p>4 Beds</p>
                            <p>3 Bath</p>
                        </div>
                    </div>
                    <div className="listing_card1">
                    <img className='listing_imgs' width={350} height={300} src={ListImg2} alt="image" />
                        <h4>$5. 490</h4>
                        <h4>Tranquil Haven in the Woods</h4>
                        <p>103 Wright CourtBurien, WA 98168</p>
                        <div>
                            <p>4 Beds</p>
                            <p>3 Bath</p>
                        </div>
                    </div>
                    <div className="listing_card1">
                    <img className='listing_imgs' width={350} height={300} src={ListImg3} alt="image" />
                        <h4>$5. 490</h4>
                        <h4>Tranquil Haven in the Woods</h4>
                        <p>103 Wright CourtBurien, WA 98168</p>
                        <div>
                            <p>4 Beds</p>
                            <p>3 Bath</p>
                        </div>
                    </div>
                </div>
           
            </section>

           {/* our services part */}
            <section className="new_services_section">
                <div className="services_header">
                    <h2 className="services_title">OUR SERVICES</h2>
                    <p className="services_subtitle">Donec porttitor euismod dignissim</p>
                </div>
                <div className="services_container">
                    <div className="service_item">
                        <img src={SearchImg1} alt="Buy a New Home" className="service_icon"/>
                        <h3 className="service_item_title">Buy a New Home</h3>
                        <p className="service_item_text">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
                    </div>
                    <div className="service_item">
                        <img src={HomeImg4} alt="Sell a House" className="service_icon"/>
                        <h3 className="service_item_title">Sella House</h3>
                        <p className="service_item_text">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
                    </div>
                    <div className="service_item">
                        <img src={BedImg1} alt="Rent a House" className="service_icon"/>
                        <h3 className="service_item_title">Rent a House</h3>
                        <p className="service_item_text">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
                    </div>
                </div>

            </section>


            <section className="neighborhood_properties_section">
                <div className="properties_header">
                    <h2 className="properties_title">Neighborhood Properties</h2>
                </div>
                <div className="properties_grid">
                    <div className="property_card">
                        <img src={NeighborhoodImg1} alt="Property 1" className="property_image"/>
                        <div className="property_info">
                            <div className="property_number">216</div>
                            <div className="property_location">New York City, NY</div>
                        </div>
                    </div>
                    <div className="property_card">
                        <img src={NeighborhoodImg2} alt="Property 2" className="property_image"/>
                        <div className="property_info">
                            <div className="property_number">141</div>
                            <div className="property_location">Houston, TX</div>
                        </div>
                    </div>
                    <div className="property_card">
                        <img src={NeighborhoodImg3} alt="Property 3" className="property_image"/>
                        <div className="property_info">
                            <div className="property_number">212</div>
                            <div className="property_location">San-Diego, SD</div>
                        </div>
                    </div>
                    <div className="property_card">
                        <img src={NeighborhoodImg4} alt="Property 4" className="property_image"/>
                        <div className="property_info">
                            <div className="property_number">183</div>
                            <div className="property_location">Philadelphia, PA</div>
                        </div>
                    </div>
                
                
                </div>

            </section>
        </div>
    )
};
export default Home;
