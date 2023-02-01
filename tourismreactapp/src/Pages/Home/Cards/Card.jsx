import React from 'react';
import './Card.css';
import CardData from '../../../data/CardData.json';

function Card() {
  return (
    <div className="tourism-site__Card__container">
      {CardData.map((data) => {
        return (
          <div className="tourism-site__Card-card">
            <div className="tourism-site__Card-card-text" key={data.desc}>
              <img src={data.src} alt={data.title} />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
            <button type="button">Learn More</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
