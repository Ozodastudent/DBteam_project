import React from "react";
import "./sales.css"
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Sales = () => {
    return (
        <div className="sales_container">
            <Navbar/>
            <div className="sales_box">
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
export default Sales;