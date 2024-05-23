import React from 'react';

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;







