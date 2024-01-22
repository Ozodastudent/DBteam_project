import React from "react";
import "./sales.css";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Sales = () => {
  return (
    <div className="sales_container">
      <Navbar />
      <div className="sales_box">
        <Card id="1" />
        <Card id="2" />
        <Card id="3" />
        <Card id="4" />
        <Card id="5" />
        <Card id="6" />
        <Card id="7" />
        <Card id="8" />
      </div>
      <Footer />
    </div>
  );
};

export default Sales;
