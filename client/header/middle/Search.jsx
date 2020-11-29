import React from 'react';
import styled from 'styled-components';
import MagnifyingGlass from './svg/MagnifyingGlass';

const Wrapper = styled.div`
  width: 15vw;
  min-width: 140px;
  max-width: 300px;
  width: 210px;
  padding: 8px 0 8px 30px;
  overflow: visible;
  position: relative;
`;

const Input = styled.input`
  font-size: 13px;
  border: thin solid #ebedee;
  padding-left: 10px;
  background-color: #ebedee;
  height: 32px;
  outline: none;
  width: 100%;
  &:hover {
    border: 1px solid #767677;
  }
  transition: border 0.8s ease;
  box-sizing: border-box;
`;

function Search() {
  return (
    <Wrapper>
      <Input placeholder="Search" />
      <MagnifyingGlass />
    </Wrapper>
  );
}

export default Search;
