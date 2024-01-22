import React from 'react';
import "./card.css"; 
import CardImg from "../../assets/images/about1.jpg"
import { Link } from 'react-router-dom';

const Card = ({ id }) => {
  return (
    <Link className='card_link' to={`/sales/${id}`}>
      <div className="card">
        <img src={CardImg} alt="Property Image" />
        <div className='card_items'>
          <div className="card-details">
            <h2>Шахрисабз шахарида ховли сотилади</h2>
            <p className='price'>488 764 000 UZS</p>
          </div>
          <div className="card-actions">
            <div>
              <p>Ташкентская область, Ташкентский район</p>
              <p>30.10.2023</p>
            </div>
            <div>
              <p>150 м2 A 0/1/1</p>
              <p>5/1/1</p>
            </div>
            <div>
              <button className="call-button">See more</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
