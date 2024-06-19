import React, { useState, useEffect } from 'react';
import Banner from '../../Part/Banner/Banner';
import Headband from '../../Part/Headband/Headband';
import aboutList from '../../../Data/aboutList.json';

function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    // Charger les données à partir du fichier JSON
    setAboutData(aboutList);
  }, []);

  return (
    <div className="about">
      <Banner image="/Banner2.png" overlayOpacity={0.3} />
      {aboutData.map((item, index) => (
        <Headband key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default About;