import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Components/_tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
