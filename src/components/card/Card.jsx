import React from 'react';
import "./card.css"; 
import CardImg from "../../assets/images/about1.jpg"

const Card = () => {
  return (
    <div className="card">
      <img src={CardImg} alt="Property Image" />
      <div className="card-details">
        <h2>Продается промышленное предприятие</h2>
        <p>Ташкентская область, Ташкентский район</p>
        <p>07.09.2023</p>
        <p>150 м2 A 0/1/1</p>
        <button className="call-button">Позвонить</button>
      </div>
      <div className="card-actions">
        <button>Добавить в избранное</button>
        <button>Сообщение</button>
        <button>Поделиться</button>
        <span>Просмотры: 27</span>
      </div>
    </div>
  );
}

export default Card;
