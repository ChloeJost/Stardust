import React from 'react';

import Button from 'src/components/Button';
import TeamPageStyled from './TeamPageStyled';
import TeamPhotos from './TeamPhotos';

const TeamPage = () => {
  return (
    <TeamPageStyled>
      <div className='team-page--header'>
        <h1>La team</h1>
        <h1>Nous contacter</h1>
      </div>
      <div className='team-page--content'>
        <TeamPhotos />
        <div className='contact'>
          <form className='contact-form'>
            <input type='text' placeholder='Nom...' autoComplete='off' />
            <input
              type='email'
              placeholder='Adresse Email...'
              autoComplete='off'
            />

            <textarea
              className='message-text'
              cols='30'
              rows='10'
              placeholder='Message…'
            ></textarea>

            <Button type='submit' color='primary'>
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </TeamPageStyled>
  );
};

export default TeamPage;
