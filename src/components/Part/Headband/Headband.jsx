import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Headband = ({ title, content }) => {
  const [info, setInfo] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleOpen = () => {
    setInfo(info ? null : content);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="headband">
      <div className="headband__header">
        <h3 className="headband__title">{title}</h3>
        <button onClick={toggleOpen} className="headband__button">
          <FontAwesomeIcon 
            icon={faChevronUp} 
            className={isFlipped ? 'flipped' : 'notflipped'}
          />
        </button>
      </div>
      {info && (
        <div className={`headband__content ${info ? 'show' : 'hide'}`}>
          {Array.isArray(info) ? info.map((item, index) => (
            <React.Fragment key={index}>
              {typeof item === 'string' ? (
                <>
                  {item}
                  <br />
                </>
              ) : (
                item
              )}
            </React.Fragment>
          )) : info}
        </div>
      )}
    </div>
  );
};

export default Headband;







