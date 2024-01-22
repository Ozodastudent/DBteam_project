import React from "react";
import "./eachHome.css"
import InCardImg from "../../assets/images/about1.jpg"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Table from "../../components/table/Table";
import MapImg from "../../assets/images/map.jpg"
const EachHome = () => {
    return(
        <div className="incard_container">
            <Navbar/>

        <div className="in_card">
            <div className="incard_left">
            <img className="incard_img" src={InCardImg} alt="Property Image" />
            <div className='in_card_items'>
            <div className="in_card-details">
                <h2 className="inName">Шахрисабз шахарида ховли сотилади</h2>
                <p className='inPrice'>488 764 000 UZS</p>
            </div>

            <div className="in_card-actions">
                <div>
                <p>Ташкентская область, Ташкентский район</p>
                <p>30.10.2023</p>
                </div>
                <div>
                <p>150 м2 A 0/1/1</p>
                <p>5/1/1</p>
                </div>
                <div>
                </div>
            </div>
            </div>
            <Table/>
            </div>
            <div className="incard_right">
                <img className="incard_rightimg" src={MapImg} alt="map image" />
                </div>
    </div>

    <Footer/>
        </div>
    )
}

export default EachHome;