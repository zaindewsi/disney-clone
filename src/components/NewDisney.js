import styled from "styled-components";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

const NewDisney= (props) => {
const movies = useSelector(selectNewDisney);

  return (
    <Container>
    <h1>New on Disney+</h1>
      <Content>
      {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            {movies.id}
            <Link to ={"/detail/" + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
      
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 25px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.5, 0.45, 0.95);
  border: 3px solid rgba(249, 294, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transform: scale(1.05);
    border-color: #fff;

  }
`;

export default NewDisney