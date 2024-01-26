import React, { useEffect, useState } from 'react';
import './home.css';
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
import ProfileImg1 from "../../assets/images/profile4.jpg";
import BlogPost1Img from "../../assets/images/blogpost1.jpg";
import BlogPost2Img from "../../assets/images/blogpost2.jpg";
import BlogPost3Img from "../../assets/images/blogpost3.png";
import AgentImg from "../../assets/images/agent1.png";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Filter from '../../components/filter/Filter';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const slideWidth = 100;
  const [estates, setEstates] = useState([]);
  const [estate, setEstate] = useState();
  const [place, setPlace] = useState();
  const [room, setRoom] = useState();
  const [search, setSearch] = useState([]);
  const [district, setDistrict] = useState('');
  const [realEstateType, setRealEstateType] = useState('home');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const handleSearch = ({ forSale, district, propertyType, rooms }) => {
    fetch(`https://vivahomes.uz/v1/search?forSale=${forSale}&district=${district}&propertyType=${propertyType}&rooms=${rooms}`)
      .then(response => response.json())
      .then(data => {
        setSearch(data);
      })
      .catch(error => {
        console.error('Error performing the search:', error);
      });
  };
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

  const searchRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://vivahomes.uz/v1/estates/?rent=false');
      setSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEstates = () => {
    axios.get('https://vivahomes.uz/api/v1/estates/')
      .then((res) => {
        setEstates(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEstates();
  }, []);

  return (
    <div className="home">
      <div className="home_header">
        <Navbar />
      </div>
      <section id='#' className="main_part">
        {/* left card */}
        <div className="leftCard">
        <div className="texts">
                        <h3 className="little_title">REAL ESTATE</h3>
                        <h1 className="big_title">Find a perfect home you love..!</h1>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, explicabo assumenda repellendus nulla ab in deserunt voluptates atque molestiae numquam.</p>

              </div>
              <div className="carousel-slider">
                        <div className="slide" >
                            <img className='slide_img' src={HomeImg1} alt="Home 1"/>
                        </div>
                        <div className="slide">
                            <img className='slide_img' src={HomeImg2} alt="Home 2"/>
                        </div>
                        <div className="slide">
                            <img src={HomeImg3} alt="Home 3"/>
                        </div>
                    </div>
                    {/* <button className="carousel-btn prev" onClick={handlePrev}>◀️</button>
                    <button className="carousel-btn next" onClick={handleNext}>▶️</button>   */}
        </div>

        {/* right card */}
        <div className="rightCard">
        {/* <div className="property-search">

<div className="search-style">
<button className={searchType === 'For Sale' ? 'active' : ''} onClick={() => handleSearchTypeChange('For Sale')}>For Sale</button>
<button className={searchType === 'For Rent' ? 'active' : ''} onClick={() => handleSearchTypeChange('For Rent')}>For Rent</button>
</div>
<div className="search_part">
<form onSubmit={searchRoom} >

<div className="city-list">
<select className='select_item'  value={district} onChange={(e) => setDistrict(e.target.value)} required>
<option value="0" selected disabled>Districts</option>
<option value="1"> Bektemir Tumani</option>
<option value="2">Chilonzor Tumani</option>
<option value="3">Mirobod Tumani</option>
<option value="4">Mirzo Ulug'bek Tumani</option>
<option value="5">Olmazor Tumani</option>
<option value="6">Mirzo Ulug'bek Tumani</option>
<option value="7">Sergeli Tumani</option>
<option value="8">Shayhontohur tumani</option>
<option value="9">Uchtepa tumani</option>
<option value="10">Yakkasaroy tumani</option>
<option value="11">Yashnaobod tumani</option>
<option value="12">Yunusobod tumani</option>
</select>
</div>


<div className="property-options">
<select className='select_item'value={realEstateType} onChange={(e) => setRealEstateType(e.target.value)} required >
  <option value="selected" selected disabled>Property type</option>
    <option value="house">House</option>
    <option value="apartment">Apartment</option>
</select>
<select className='select_item' value={numberOfRooms}
        onChange={(e) => setNumberOfRooms(e.target.value)}>
  <option value="rooms" selected disabled>Number of bed rooms (Optional)</option>
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
    <option value="four">Four</option>
</select>
</div>
<div className="search-bar">
<Link to="/search"className='search_btn' onClick={handleSearch}>Search</Link>
</div>
</form>
</div>
</div> */}
<Filter onSearch={handleSearch}/>
        </div>
      </section>


      {/* about  */}
      <section className="about_part">
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
            <section className="listings_part">
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
            <section className="team_of_experts_section">
                <div className="team_header">
                    <h2 className="team_title">Our Team of Experts</h2>
                    <p className="team_subtitle">INTRODUCE YOURSELF TO</p>
                </div>
                <div className="team_grid">
                    <div className="team_member">
                        <img src={ProfileImg1} alt="Nozimjon Nabiev" className="team_photo"/>
                        <h3 className="team_member_name">Nozimjon Nabiev</h3>
                        <p className="team_member_role">Project Manager</p>
                    </div>
                    <div className="team_member">
                        <img src={ProfileImg1} alt="Ozoda Shahobiddinova" className="team_photo"/>
                        <h3 className="team_member_name">Ozoda Shahobiddinova</h3>
                        <p className="team_member_role">Frontend Developer</p>
                    </div>
                    <div className="team_member">
                        <img src={ProfileImg1} alt="Bobosher Musulmonov" className="team_photo"/>
                        <h3 className="team_member_name">Bobosher Musulmonov</h3>
                        <p className="team_member_role">Backend Developer</p>
                    </div>
                    <div className="team_member">
                        <img src={ProfileImg1} alt="Firdavs Ismoilov" className="team_photo"/>
                        <h3 className="team_member_name">Firdavs Ismoilov</h3>
                        <p className="team_member_role">Backend Developer</p>
                    </div>
                    <div className="team_member">
                        <img src={ProfileImg1} alt="Zulfiya Usmonova" className="team_photo"/>
                        <h3 className="team_member_name">Zulfiya Usmonova</h3>
                        <p className="team_member_role">Frontend Developer</p>
                    </div>
                </div>
            </section>

{/*blog post section*/}
            <section className="latest_blogs_section">
                <div className="blogs_header">
                    <h2 className="blogs_title">Latest Blogs & Posts</h2>
                    <p className="blogs_subtitle">WHAT’S TRENDING</p>
                </div>
                <div className="blog_posts_grid">
                    <div className="blog_post">
                        <img src={BlogPost1Img} alt="Top 10 Home Buying Mistakes to Avoid" className="blog_post_image"/>
                        <div className="blog_post_content">
                            <p className="blog_post_date">28 Tue</p>
                            <h3 className="blog_post_title">Top 10 Home Buying Mistakes to Avoid</h3>
                            <p className="blog_post_excerpt">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.</p>
                        </div>
                    </div>
                    <div className="blog_post">
                        <img src={BlogPost2Img} alt="How to Stage Your Home for a Quick Sale" className="blog_post_image"/>
                        <div className="blog_post_content">
                            <p className="blog_post_date">08 Mon</p>
                            <h3 className="blog_post_title">How to Stage Your Home for a Quick Sale</h3>
                            <p className="blog_post_excerpt">Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.</p>
                        </div>
                    </div>
                    <div className="blog_post">
                        <img src={BlogPost3Img} alt="5 Tips for First-Time Home Sellers" className="blog_post_image"/>
                        <div className="blog_post_content">
                            <p className="blog_post_date">26 Wed</p>
                            <h3 className="blog_post_title">5 Tips for First-Time Home Sellers</h3>
                            <p className="blog_post_excerpt">In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*testimonials section*/}
            <section className="testimonials_section">
                <div className="testimonials_header">
                    <h2 className="testimonials_title">Look What Our Customers Say!</h2>
                    <p className="testimonials_subtitle">TESTIMONIALS</p>
                    <p className="testimonials_description">
                        Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
                    </p>
                </div>
                <div className="testimonial">
                    <blockquote className="testimonial_quote">
                        "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!"
                    </blockquote>
                    <div className="testimonial_footer">
                        <img src="path-to-customer-image.jpg" alt="Barbara D. Smith" className="testimonial_image"/>
                        <div>
                            <p className="testimonial_author">Barbara D. Smith</p>
                            <div className="testimonial_rating">
                                {/* Add star icons here */}
                                <span>⭐️⭐️⭐️⭐️⭐️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*become agent section*/}

              <section className="become_agent_section">
                <div className="become_agent_content">
                    <img src={AgentImg} alt="Become an Agent" className="become_agent_image"/>
                    <div className="become_agent_text">
                        <h2 className="become_agent_title">Become a Agent.</h2>
                        <p className="become_agent_description">Fusce venenatis tellus a felis scelerisque, venenatis tellus a felis scelerisque.</p>
                        <Link to="/register" className="become_agent_button">Register Now</Link>
                    </div>
                </div>
            </section>

      <Footer />
    </div>
  );
};
export default Home;
