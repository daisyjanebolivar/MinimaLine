import styled from "styled-components";
import NewMain from "./NewMain";

const App = () => {
  return (
      <Container>
      <Wrapper>
        <NewMain />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background: #C59C6C;
  background-position: center;
  background-size: cover;
  bacground-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;

//#C59C6C