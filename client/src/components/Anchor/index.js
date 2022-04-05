import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import AnchorStyled from './AnchorStyled';

import { Link } from 'react-scroll';


const Anchor = ({ nextElement, maxElements, handleScroll }) => (
  <AnchorStyled>
    <Link
      onClick={() => handleScroll()}
      activeClass='active'
      to={nextElement}
      spy={true}
      smooth={true}
      offset={window.innerHeight}
      duration={500}
    >
      <FontAwesomeIcon
        icon={nextElement === maxElements ? faChevronUp : faChevronDown}
      />
    </Link>
  </AnchorStyled>
);

export default Anchor;
