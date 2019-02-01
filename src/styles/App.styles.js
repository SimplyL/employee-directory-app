import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const MainArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 2/2;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export { AppContainer, MainArea };
