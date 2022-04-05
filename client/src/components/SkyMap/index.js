import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Constellations from 'src/components/Constellations';
import SkyMapStyled from './SkyMapStyled';

const SkyMap = ({ user }) => {
  const [coords, setCoords] = useState({});
  const [city, setCity] = useState('');

  const handleChange = e => {
    setCity(e.target.value);
  };

  const fetchCoords = async city => {
    const { data } = await axios.get(
      `https://api.opencagedata.com/geocode/v1/google-v3-json?q=${
        city ? city : user.city
      }&key=${process.env.GEOLOC_API_KEY}`
    );

    const {
      geometry: {
        location: { lat, lng },
      },
    } = data.results[0];

    setCoords({ lat, lng });
  };

  useEffect(() => {
    fetchCoords(city);
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();
    fetchCoords(city);
  };

  return (
    <SkyMapStyled>
      <div className='map'>
        <div className='info-map'>
          <h1>Sky Map</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='search-bar'
              type='text'
              placeholder='Chercher une ville...'
              onChange={handleChange}
              value={city}
            />
          </form>
        </div>
        <h2>{user.city ? (city ? city : user.city) : ''}</h2>
        <div className='sky-map'>
          <iframe
            width='570'
            height='570'
            frameBorder='0'
            scrolling='yes'
            marginHeight='0'
            marginWidth='0'
            src={`https://virtualsky.lco.global/embed/index.html?longitude=${coords.lng}&latitude=${coords.lat}&projection=polar&constellations=true&constellationlabels=true&az=192.84525109280014&showdate=false&showposition=false`}
            allowtransparency='false'
          ></iframe>
        </div>
      </div>
      <Constellations />
    </SkyMapStyled>
  );
};

const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(mapStateToProps)(SkyMap);
