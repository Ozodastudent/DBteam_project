import React from "react";
import "./rent.css"
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Corusel from "../../components/corusel/Corusel";
import ErrorComponent from "../../components/error/ErrorComponent";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Rent = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      axios.get("https://vivahomes.uz/v1/estates/?rent=true")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setIsError(true);
          console.error("Error fetching data:", err);
        });
    }, []);
  
    return (
      <div className="rent_container">
        <Navbar />
        <div className="rent_box">
          {isError ? <ErrorComponent message="An error occurred. Please try again later." /> : data?.map((card) => <Card key={card.id} data={card} />)}
        </div>
        <Footer />
      </div>
    );
  };
  
export default Rent;