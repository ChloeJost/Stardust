import React from 'react';

import TeamPhotosStyled from './TeamPhotosStyled';
import image from './images/image.png';
import sangoku from './images/mini-sangoku.png';
import pandavatar from './images/pandavatar.png';
import sailor from './images/sailorjupiter.png';

const TeamPhotos = () => {
  const team = [
    {
      src: image,
      label: 'Chloé, scrum master',
    },
    {
      src: sangoku,
      label: 'Aziz, lead back',
    },
    {
      src: pandavatar,
      label: 'JC, lead front',
    },
    {
      src: sailor,
      label: 'Lucile, project owner',
    },
  ];
  return (
    <TeamPhotosStyled>
      <div className='team-photos'>
        {team.map((member) => (
          <div className='team-photos--member'>
            <div
              style={{
                backgroundImage: `url(${member.src})`,
              }}
              className='team-photos--photo'
            />
            <p>{member.label}</p>
          </div>
        ))}
      </div>
    </TeamPhotosStyled>
  );
};

export default TeamPhotos;
