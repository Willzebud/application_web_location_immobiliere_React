import React, { useState } from 'react';
import Banner from '../Part/Banner/Banner';
import Card from '../Part/Card/Card';
import ImageSlider from '../Part/ImageSlider/ImageSlider';
import logementsData from '../../Data/logements.json';

function Home() {
  const [selectedLogement, setSelectedLogement] = useState(null);

  const handleCardClick = (index) => {
    setSelectedLogement({ ...logementsData[index], initialIndex: index });
  };

  return (
    <div className="home">
      {!selectedLogement && (
        <Banner image="/Banner.png" title="Chez vous, partout et ailleurs" overlayOpacity={0.6} />
      )}
      <div className="content">
        {!selectedLogement ? (
          <div className="cards">
            {logementsData.map((logement, index) => (
              <Card
                key={logement.id}
                title={logement.title}
                image={logement.cover}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        ) : (
          <ImageSlider
            slides={logementsData.map(logement => ({
              url: logement.cover,
              title: logement.title,
            }))}
            initialIndex={selectedLogement.initialIndex}
          />
        )}
      </div>
    </div>
  );
}

export default Home;


