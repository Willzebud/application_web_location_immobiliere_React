import React from 'react';
import Banner from '../Part/Banner/Banner';
import Card from '../Part/Card/Card';
import logementsData from '../../Data/logements.json';


function Home() {
  return (
    <div className="home">
      <Banner image="/Banner.png" title="Chez vous, partout et ailleurs" />
      <div className="cards">
        {logementsData.slice(0, 6).map((logement) => (
          <Card key={logement.id} title={logement.title} image={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;

