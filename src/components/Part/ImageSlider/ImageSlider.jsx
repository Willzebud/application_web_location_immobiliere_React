import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/Components/_imageSlider.scss';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  const length = slides.length; // longueur du tableau de slides

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <div className="image-slider">
      {length > 1 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="left-arrow"
          onClick={prevSlide}
        />
      )}
      {length > 1 && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="right-arrow"
          onClick={nextSlide}
        />
      )}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${current === index ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide})`,
            display: current === index ? 'block' : 'none',
          }}
        >
          {index === current && (
            <div className="slider__number">
              <p>
                {current + 1}/{length}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;