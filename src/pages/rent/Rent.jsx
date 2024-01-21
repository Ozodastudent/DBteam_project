import React from "react";
import "./rent.css"
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Corusel from "../../components/corusel/Corusel";
const Rent = () => {
    return (
            <div className="rent_container">
            <Navbar/>
            <div className="rent_box">
                {/* <Corusel/> */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
           <Footer/>
        </div>
    )
}

export default Rent;