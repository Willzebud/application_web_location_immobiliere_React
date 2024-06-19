import React from 'react';

const Banner = ({ image, title, overlayOpacity }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner__overlay" style={{ opacity: overlayOpacity }}></div>
      <h1 className="text_on_picture">{title}</h1>
    </div>
  );
};

export default Banner;







