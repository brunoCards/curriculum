import React from 'react';

//imagens
import logo from '../../assets/main_logo.svg';
import sidelogo from '../../assets/side_logo.svg';

//styled-components
import { MainHeader, Logo, SideLogo, HeaderSideLogo } from './styles';

const Header = ({ isHome, title }) => {
  return (
    <>
      {isHome ? (
        <MainHeader>
          <Logo src={logo} alt="Logo-curriculum" />
        </MainHeader>
      ) : (
        <HeaderSideLogo>
          <SideLogo src={sidelogo} alt="Logo-curriculum" />
          <h1>{title}</h1>
        </HeaderSideLogo>
      )}
    </>
  );
};

export default Header;
