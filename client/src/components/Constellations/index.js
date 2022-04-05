import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ConstellationStyled from './ConstellationStyled';
import Modal from './ModalConstellations';

const InfoConstellation = () => {
  const [name, setName] = useState('');
  const [constellations, setConstellations] = useState([]);
  const [filteredConstellations, setFilteredConstellations] = useState([]);
  const [selectedConstellation, setSelectedConstellation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchConstellations = async () => {
    const { data } = await axios({
      url: 'http://localhost:5000/constellations',
    });
    return data;
  };

  const getConstellations = async () => {
    const data = await fetchConstellations();
    setConstellations(data);
  };

  const handleModal = c => {
    setSelectedConstellation(c);
    setShowModal(true);
  };

  useEffect(() => {
    let isSubscribed = true;
    getConstellations();
    setFilteredConstellations(
      constellations.filter(c =>
        c.frenchName.toLowerCase().includes(name.toLowerCase())
      )
    );
    return () => (isSubscribed = false);
  }, [name, constellations]);

  return (
    <ConstellationStyled>
      <div className='constellations'>
        <input
          className='input'
          name='name'
          placeholder='Rechercher une constellation...'
          onChange={e => setName(e.target.value)}
          autoComplete='off'
        />
        {constellations.length ? (
          <div className='constellations-list'>
            {name &&
              filteredConstellations.map((c, index) => (
                <div
                  className='constellation-link'
                  onClick={() => handleModal(c)}
                >
                  <p key={`constellation-${index}`}>{c.frenchName}</p>
                </div>
              ))}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
      {selectedConstellation && (
        <Modal
          active={showModal}
          setShowModal={setShowModal}
          constellation={selectedConstellation}
        ></Modal>
      )}
    </ConstellationStyled>
  );
};
export default InfoConstellation;
