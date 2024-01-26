import React, { useState, useEffect } from "react";
import "./eachHome.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Table from "../../components/table/Table";
import MapImg from "../../assets/images/map.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const EachHome = () => {
  const { id } = useParams();
  const [estateDetails, setEstateDetails] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);
  const [agentDetails, setAgentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstateDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/estates/${id}`);
        setEstateDetails(response.data);
      } catch (error) {
        console.error('Error fetching estate details:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAddressDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/addresses/${estateDetails.address}`);
        setAddressDetails(response.data);
      } catch (error) {
        console.error('Error fetching address details:', error);
      }
    };

    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`https://vivahomes.uz/v1/agents/${estateDetails.agent}`);
        setAgentDetails(response.data);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    fetchEstateDetails();
    // Fetch address details and agent details only if estateDetails is available
    if (estateDetails) {
      fetchAddressDetails();
      fetchAgentDetails();
    }
  }, [id, estateDetails]);

  const handleCallButtonClick = () => {
    if (agentDetails && agentDetails.contact) {
      // Display the phone number
      alert(`Agent's Phone Number: ${agentDetails.contact.phone}`);

      // Copy the phone number to the clipboard
      navigator.clipboard.writeText(agentDetails.contact.phone)
        .then(() => {
          alert("Phone number copied to clipboard!");
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    } else {
      alert("Agent's phone number not available.");
    }
  };

  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (!estateDetails) {
    // Handle case where estate details are not available
    return <div>No estate details available.</div>;
  }

  // Prepare details for the Table component
  const details = [
    { label: 'Square / akr', value: `${estateDetails.area} м²` },
    { label: 'Bedrooms', value: estateDetails.bedrooms },
    { label: 'Bathrooms', value: estateDetails.bathrooms },
    { label: 'Address', value: addressDetails ? `${addressDetails.city}, ${addressDetails.address_line_1}` : '' },
    { label: 'Date Listed', value: estateDetails.date_listed },
    { label: 'Type', value: estateDetails.type },
    { label: 'Description', value: estateDetails.description },
    { label: 'Status', value: estateDetails.status ? 'Available' : 'Not Available' }
  ];

  return (
    <div className="incard_container">
      <Navbar />

      <div className="in_card">
        <div className="incard_left">
          <img className="incard_img" src={estateDetails.image.image} alt="Property Image" />
          <div className="in_card_items">
            <div className="in_card-details">
              <h2 className="inName">{estateDetails.title}</h2>
              <p className="inPrice">
                {estateDetails.price} {estateDetails.currency}
              </p>
              <p className="inEstimatedMarketValue">
                Estimated Market Value: {estateDetails.market_value} {estateDetails.currency}
              </p>
            </div>
            <button className="callButton" onClick={handleCallButtonClick}>
              Call
            </button>
            <div className="in_card-actions">
              <Table details={details} />
            </div>
          </div>
        </div>
        <div className="incard_right">
          <img className="incard_rightimg" src={MapImg} alt="map image" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EachHome;
