import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/Components/_rating.scss';

const Rating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star ${index < filledStars ? 'filled' : ''}`}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
