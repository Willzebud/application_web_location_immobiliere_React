import React from 'react';
import Banner from '../../Part/Banner/Banner';
import Headband from '../../Part/Headband/Headband';


function About() {
  return (
    <div className="about">
      <Banner image="/Banner2.png" overlayOpacity={0.3}/>
        <Headband title="Fiabilité"/>
        <Headband title="Respect"/>
        <Headband title="Service"/>
        <Headband title="Sécurité"/>
    </div>
  );
}

export default About;