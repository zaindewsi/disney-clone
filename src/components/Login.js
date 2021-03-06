import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, setSignOutState, setUserLoginDetails } from "../features/user/userSlice"

const Login = (props) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)


  const handleAuth = () => {
    if(!userName) {
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user);
    }).catch((error) => {
      alert(error.message)
    });
  } else if (userName) {
    auth.signOut().then(() => {
      dispatch(setSignOutState())
      history.push("/")
    }).catch((err) => alert(err.message))
  }
}
const setUser = (user) => {
  dispatch(
    setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    })
    );
};


  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/logo.png" alt="hulu disney espn logo" />
          <SignUp onClick = {handleAuth}>GET FREE PREMIER ACCESS NOW</SignUp>
          <Description>
          <h2>Welcome to Dewsi+</h2>
          Feel free to login using Google authentication and take a look around. Once you enter the site, you'll be able to browse a catalogue of Disney content and view some trailers!
          <p>Enjoy!</p>
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="disney logos" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
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
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
    margin: auto;
    max-width: 650px;
    flex-flow: column wrap;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    transition: opacity 0.2s ease 0s;
    width: 100%
`;

const CTALogoOne = styled.img`
  margin-bottom: 0px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 60%;
  position: relative;
  top: 7%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 80%
  }
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  z-index: 1;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;