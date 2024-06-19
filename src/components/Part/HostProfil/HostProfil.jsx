import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Components/_hostProfil.scss';

const HostProfil = ({ name, picture }) => {
  return (
    <div className="host-profil">
      <img src={picture} alt={name} className="host-profil__picture" />
      <p className="host-profil__name">{name}</p>
    </div>
  );
};

HostProfil.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default HostProfil;
