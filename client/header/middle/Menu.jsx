import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  height: 45px;
`;

const Navigation = styled.span`
  margin-top: 3px;
  margin-right: 20px;
  width: max-content;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: ${(props) => (props.thin ? '400' : '700')};
  letter-spacing: 1.87px;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

function Menu() {
  return (
    <Container>
      <Center>
        <Navigation>men</Navigation>
      </Center>
      <Center>
        <Navigation>women</Navigation>
      </Center>
      <Center>
        <Navigation>kids</Navigation>
      </Center>
      <Center>
        <Navigation thin>feast friday</Navigation>
      </Center>
      <Center>
        <Navigation thin>3 barracuda life</Navigation>
      </Center>
    </Container>
  );
}

export default Menu;
