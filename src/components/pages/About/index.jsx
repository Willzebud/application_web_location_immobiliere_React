import React from 'react';
import Banner from '../../Part/Banner/Banner';
import Headband from '../../Part/Headband/Headband';
import { aboutList } from '../../../Data/AboutData';

function About() {
  return (
    <div className="about">
      <Banner image="/Banner2.png" overlayOpacity={0.3} />
      {aboutList.map((item, index) => (
        <Headband key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default About;