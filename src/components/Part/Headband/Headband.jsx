import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Headband = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='headband'>
      <div className='headband__header' onClick={toggleOpen}>
        <h3 className='headband__title'>{title}</h3>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronDown : faChevronUp} 
          className='headband__icon' 
        />
      </div>
      {isOpen && <p className='headband__content'>{content}</p>}
    </div>
  );
};

export default Headband;
