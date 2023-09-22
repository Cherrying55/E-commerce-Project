import styled from "styled-components";
import img1 from "../assets/img1.avif";

export function ProductView() {
  return (
    <Container>
      <ImgContainer>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </ImgContainer>
      <BigImg src={img1} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  width: 60%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    border: 1px solid black;
    padding: 5px;
    height: 100px;
    img {
      height: 90px;
    }
  }
`;

const BigImg = styled.img`
  height: 500px;
`;
