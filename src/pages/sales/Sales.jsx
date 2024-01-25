import React from "react";
import "./sales.css";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ErrorComponent from "../../components/error/ErrorComponent";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Sales = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const defaultTitles = ["Apartment for sale in Yashnabad",
    "Apartment for sale in Chilonzor",
    "Apartment for sale in Uchtepa",
    "Apartment for sale in Yunusobod"];
  
    useEffect(() => {
      axios.get("https://vivahomes.uz/v1/estates/?rent=false")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setIsError(true);
          console.error("Error fetching data:", err);
        });
    }, []);
  
    return (
      <div className="sales_container">
        <Navbar />
        <div className="sales_box">
          {isError ? <ErrorComponent message="An error occurred. Please try again later." /> : data?.map((card) => <Card key={card.id} data={card} />)}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Sales;
  
