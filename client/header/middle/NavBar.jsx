import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Search from './Search';
import RightMenu from './RightMenu';
import logo from '../../../public/assets/BarracudasLogo.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #ebedee;
  box-sizing: border-box;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 40px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 40px;
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

function NavBar() {
  return (
    <Container>
      <Logo />
      <Menu />
      <Right>
        <Search />
        <RightMenu />
      </Right>
    </Container>
  );
}

export default NavBar;
