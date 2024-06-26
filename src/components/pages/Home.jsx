import React from 'react';
import Banner from '../Part/Banner/Banner';
import Card from '../Part/Card/Card';

function Home() {
  return (
  <div className="container_picture_header_cart">
    <div className="picture_and_text">
      <Banner image="/Banner.png" overlayOpacity={0.6} />
      <h1 className="text_on_picture">Chez vous, partout et ailleurs</h1>
    </div>
    <Card />
  </div>
  );
}

export default Home;