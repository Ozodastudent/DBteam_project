import React from "react";
import "./home.css";
import HomeImg from "../../assets/images/home.jpg"
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
    return (
        <div className="home">
            <div className="home_header">
                <Navbar/>
            </div>
            {/* body part */}
            <section className="main_part">
                <div className="leftCard">
                    <div className="texts">
                        <h3 className="little_title">REAL ESTATE</h3>
                        <h1 className="big_title">Find a perfect home you love..!</h1>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, explicabo assumenda repellendus nulla ab in deserunt voluptates atque molestiae numquam.</p>
                    
                    </div>
                    <div className="images">
                        <img width={500} height={340} src={HomeImg} alt="image" />
                    </div>
                </div>
                <div className="rightCard">
                    <div></div>
                </div>
            </section>
        </div>
    )
};
export default Home;
