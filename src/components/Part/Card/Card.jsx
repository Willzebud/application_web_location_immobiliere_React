import React from 'react';

function Card({ title, image }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card__image' />
      <h3 className='card__title'>{title}</h3>
    </div>
  );
}

export default Card;