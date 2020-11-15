import React, { useState } from 'react';
import styled from 'styled-components';

function ModalLink() {
  const [highlight, setHighlight] = useState(false);
  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
  `;
  const LinkButton = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin-top: 5px;
    background-color: ${highlight ? 'black' : 'white'};
    color: ${highlight ? 'white' : 'black'};
  `;

  return (
    <ButtonWrapper>
      <LinkButton
        onMouseEnter={() => { setHighlight(true); }}
        onMouseLeave={() => { setHighlight(false); }}
      >
        Learn more
      </LinkButton>
    </ButtonWrapper>
  );
}

export default ModalLink;
