import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase"

const Detail = (props) => {

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies").doc(id)
    .get()
    .then((doc) => {
      if(doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log("no doc in firebase")
      }
    })
    .catch((error) => {
      console.log("error getting doc: ", error)
    })
  }, [id]);

  return(
    <Container>
      <Background>
        <img src = {detailData.backgroundImg} alt={detailData.title}/>
      </Background>
      <ImageTitle>
        <img src = {detailData.titleImg} alt={detailData.title}/>
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <a href = {detailData.trailer} target="_blank" rel="noreferrer">
          <Player> 
            <img src = "/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          </a>
          <a href = {detailData.trailer} target="_blank" rel="noreferrer">
          <Trailer>
            <img src = "/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          </a>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src = "/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>
          {detailData.subTitle}
        </SubTitle>
        <Description>
          {detailData.description}
        </Description>
      </ContentMeta>
    </Container>
  )
  }

  const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: calc(3.5vw + 5px);
  `;

  const Background = styled.div`
    left: 0;
    right: 0;
    top: 0;
    opacity: 0.8;
    position: fixed;
    z-index: -1;

    img {
      width: 100vw;
      height: 100vh;

      @media (max-width: 768px) {
        width: initial;
      }
    }
  `;

  const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0 auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 25px;
    width: 100%;

    img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
    }
  `;

  const ContentMeta = styled.div`
    max-width: 874px;
  `;

  const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 25px 0;
    min-height: 56px;
  `;

  const Player = styled.button`
    font-size: 15px;
    margin: 0 22px 0 0;
    padding: 0 25px;
    height: 56px;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
    text-align: center;
    text-transform: uppercase;
    background: #f9f9f9;
    border: none;

    img {
      width: 32px;
    }

    &:hover {
      background: #b1b1b1;
    }

    @media (max-width: 768px) {
      height: 45px;
      padding: 0 12px;
      font-size: 12px;
      margin: 0 10px 0 0;

      img {
        width: 25px;
      }
    }
  `;

    const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(#f9f9f9);
    color: #f9f9f9
  `;

  const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6); 
    border-radius: 100px;
    border: 2px solid #f9f9f9;
    cursor: pointer;

    span {
      background-color: #f9f9f9;
      display: inline-block;

      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rorate(0deg);
        width: 16px;
      }

      &:nth-child(2) {
        height: 16px;
        transform: translate(-8px) rotate(0deg);
        width: 2px;
      }
    }
  `;

  const GroupWatch = styled(AddList)`
    div {
      height: 40px;
      width: 40px;
      background-color: rgba(0, 0, 0, 0.6); ; 
      border-radius: 100px;
    }

    img {
      width: 100%;
    }
  `;

const SubTitle = styled.div`
  color: #f9f9f9;
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  color: #f9f9f9;
  line-height: 1.5;
  font-size: 20px;
  padding: 16px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail