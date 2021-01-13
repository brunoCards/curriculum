import React from 'react';

//imagens
import logo from '../../assets/main_logo.svg';
import sidelogo from '../../assets/side_logo.svg';

//styled-components
import { MainHeader, Logo, SideLogo, HeaderSideLogo } from './styles';

const Header = ({ isHome, children }) => {
  return (
    <>
      {isHome ? (
        <MainHeader>
          <Logo src={logo} alt="Logo-curriculum" />
        </MainHeader>
      ) : (
        <HeaderSideLogo>
          <SideLogo src={sidelogo} alt="Logo-curriculum" />
          {children}
        </HeaderSideLogo>
      )}
    </>
  );
};

export default Header;
