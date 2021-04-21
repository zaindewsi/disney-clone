import { useEffect } from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails} from "../features/user/userSlice"

const Header = (props) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user)
        history.push("/home");
      }
    });
  }, [userName]);

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
  <Nav>
    <Logo> <img src="images/logo.png" alt="Disney+"/></Logo>

    {
      !userName ? <Login onClick = {handleAuth}>Log in</Login> : 
      <> 
      
    
    <NavMenu>
    <a href="/home">
      <img src="/images/home-icon.svg" alt="HOME" />
      <span>HOME</span>
    </a>
    <a href="/home">
      <img src="/images/search-icon.svg" alt="SEARCH" />
      <span>SEARCH</span>
    </a>
    <a href="/home">
      <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
      <span>WATCHLIST</span>
    </a>
    <a href="/home">
      <img src="/images/original-icon.svg" alt="ORIGINALS" />
      <span>ORIGINALS</span>
    </a>
    <a href="/home">
      <img src="/images/movie-icon.svg" alt="MOVIES" />
      <span>MOVIES</span>
    </a>
    <a href="/home">
      <img src="/images/series-icon.svg" alt="SERIES" />
      <span>SERIES</span>
    </a>
    </NavMenu>
    <SignOut>
    <UserImg src = {userPhoto} alt = {userName} />
    <Dropdown>
      <span onClick = {handleAuth}> Sign out</span>
    </Dropdown>
    </SignOut>
    </>
  }
  </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-bottom: 14px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: #f9f9f9;
      font-size: 13px;
      letter-spacing: 1.4px;
      line-height: 1.1;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: #f9f9f9;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        right: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.5, 0.45, 0.95);
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: #090b13;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #090b13;  
  border: 1px solid #979797;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1.5px;
  width: 100px;
  opacity: 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 100px;
    cursor: pointer;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 0.4s;

    }
  }
`;



export default Header