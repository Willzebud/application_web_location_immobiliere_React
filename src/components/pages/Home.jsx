import React, { useState } from 'react';
import Banner from '../Part/Banner/Banner';
import Card from '../Part/Card/Card';
import ImageSlider from '../Part/ImageSlider/ImageSlider';
import logementsData from '../../Data/logements.json';

function Home() {
  return (
    <div className="container_picture_header_cart">
    <div className="picture_and_text">
      <Banner image="/Banner.png" overlayOpacity={0.3} />
      <p className="text_on_picture">Chez vous, partout et ailleurs</p>
    </div>
    <Card />
  </div>
  );
}

export default Home;