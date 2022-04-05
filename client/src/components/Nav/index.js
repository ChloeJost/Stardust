import React from 'react';

import NavLeft from 'src/containers/NavLeft';
import NavRight from 'src/containers/NavRight';
import NavStyled from './NavStyled';

const Nav = () => (
  <NavStyled>
    <NavLeft />
    <NavRight />
  </NavStyled>
);

export default Nav;
