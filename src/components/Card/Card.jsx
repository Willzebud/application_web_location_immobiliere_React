import React from 'react';

function Card({ title, image }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card__image' />
      <h2 className='card__title'>{title}</h2>
    </div>
  );
}

export default Card;
