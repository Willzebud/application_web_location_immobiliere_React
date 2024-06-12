import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/Components/_imageSlider.scss';

const ImageSlider = ({ slides, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="image-slider__container">
        <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" onClick={goToPrevious} />
        <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex].url})` }} />
        <FontAwesomeIcon icon={faChevronRight} className="right-arrow" onClick={goToNext} />
      </div>
    </div>
  );
};

export default ImageSlider;
