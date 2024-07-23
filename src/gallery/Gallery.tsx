import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

// states
import { MorePhotoData } from "../states/Modal";

// images
import galleryJpg from "../assets/images/w11.jpg";
import FixedImages from "../components/FixedImage";

function Gallery() {
  const [MorePhoto, SetMorePhoto] = useRecoilState(MorePhotoData);

  const clickMorePhoto = () => {
    SetMorePhoto(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <Container>
      {/* <FixedImages /> */}
      <ButtonWrap>
        <Title>
          ❤︎
          <br />
          갤러리
        </Title>
        <ImageWrap>
          <img src={galleryJpg} alt="" />
        </ImageWrap>
        <Button className="bounce" onClick={clickMorePhoto}>
          사진 더 보기&nbsp;&nbsp;&nbsp;{">"}
        </Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  padding: 60px 0;
  background-color: #b59888;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  line-height: 2;
  color: #fff8f0;
`;
const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  img {
    width: 80%;
    max-width: 450px;
    border-radius: 350px 350px 0 0;
    /* border: 1px solid rgb(231, 217, 217); */
  }
`;
const Button = styled.div`
  padding: 8px 25px;
  width: fit-content;
  margin-top: 60px;
  font-size: 15px;
  color: #fff8f0;
  border: 1px solid #fff8f0;
  /* border: 1px solid #fff1dc; */
  border-radius: 50px;
  background-color: transparent;
`;

export default Gallery;
