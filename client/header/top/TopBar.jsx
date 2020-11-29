import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
`;

const Links = styled.span`
  padding: 0 10px;
  text-transform: lowercase;
  cursor: pointer;
  font-size: 13px;
`;

function TopBar() {
  return (
    <Wrapper>
      <Links>help</Links>
      <Links>exchanges & returns</Links>
      <Links>order tracker</Links>
      <Links>join hidden temple</Links>
      <Links>hidden temple</Links>
      <Links>log in</Links>
    </Wrapper>
  );
}

export default TopBar;
