import styled from 'styled-components';

const Background = styled.div`
  display: flex; /*${(props) => (props.show ? 'flex' : 'none')};*/
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .2s;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  max-width: 90vw;
  max-height: 92vh;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity .45s;
  transition-delay: .1s;
  z-index: 0;
`;

export { Background, ClickableBackground, ModalContent };
