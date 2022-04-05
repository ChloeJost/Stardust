import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoPageStyled from './InfoPageStyled';

import Button from 'src/components/Button';

const InfoPage = () => {
  return (
    <InfoPageStyled>
      <div className='info-page'>
        <h1>Bienvenue sur Stardust</h1>
        <p className='text-infos'>
          Stardust est un site dédié aux amateurs d'astronomie. La Skymap vous
          permettra d'accéder à des informations sur les différentes
          constellations, et à découvrir celles qui se trouvent au dessus de
          vous, où d'une ville que vous aurez préalablement indiquée dans
          l'encart au dessus de la carte. De plus, si vous souhaitez échanger
          avec d'autres passionnés, un forum de discussion est également
          disponible. Pour y accéder, pensez à cliquer sur le bouton
          "s'inscrire" juste en dessous.
        </p>

        <Button color='primary'>
          <Link to='/register'>S'inscrire</Link>
        </Button>
      </div>
    </InfoPageStyled>
  );
};

export default InfoPage;
