import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from './top/TopBar';
import NavBar from './middle/NavBar';
import BottomBar from './bottom/BottomBar';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

function Header() {
  return (
    <Container>
      <GlobalStyle />
      <TopBar />
      <NavBar />
      <BottomBar />
    </Container>
  );
}

export default Header;
