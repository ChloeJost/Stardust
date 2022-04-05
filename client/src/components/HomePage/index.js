import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Element, animateScroll as scroll, Events } from 'react-scroll';

import Button from 'src/components/Button';
import InfoPage from 'src/components/InfoPage';
import SignupMessage from 'src/components/SignupMessage';

import Anchor from 'src/components/Anchor';
import HomePageStyled from './HomePageStyled';

const HomePage = ({ isLogged, isVerified, signupMessage }) => {
  const [nextElement, setNextElement] = useState(1);
  const maxElements = 2;

  const handleScroll = () => {
    if (nextElement === maxElements) {
      scroll.scrollToTop();
      setNextElement(1);
    } else {
      setNextElement(nextElement + 1);
    }
  };

  return (
    <HomePageStyled>
      <Element name='0'>
        {isVerified && !isLogged && (
          <SignupMessage signupMessage={signupMessage} />
        )}
        <div className='header'>
          <h1 className='title'>STARDUST</h1>
        </div>
      </Element>
      <Element name='1'>
        <InfoPage />
      </Element>

      <Anchor
        handleScroll={handleScroll}
        nextElement={nextElement}
        maxElements={maxElements}
      />
    </HomePageStyled>
  );
};

HomePage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isVerified: PropTypes.bool.isRequired,
  signupMessage: PropTypes.string.isRequired,
};

export default HomePage;
