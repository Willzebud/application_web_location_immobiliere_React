import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Headband = ({ title }) => {
  return (
    <div className='headband'>
      <h3 className='headband__title'>{title}</h3>
      <FontAwesomeIcon icon={faChevronUp}  className='headband__icon' />
    </div>
  );
};

export default Headband;