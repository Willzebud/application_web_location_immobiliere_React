import React from 'react';
import '../../styles/Banner.scss';

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;







