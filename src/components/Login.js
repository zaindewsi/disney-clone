import styled from "styled-components"

const Login = (props) => {
  return (
  <Container>
    <Content>
      Content
    </Content>
  </Container>
  )
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: realtive;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-dirextion: column;
  padding: 80px 40px;
  height: 100%
`;

export default Login;