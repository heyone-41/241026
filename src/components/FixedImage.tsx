import React from "react";
import styled from "styled-components";

// image
// import FrontLeaves from "../assets/images/frontLeaves.svg";

function FixedImages() {
  return (
    <ImageWrap>
      {/* <ImageIcon>
        <img src={FrontLeaves} alt="프론트그라운드이미지" />
      </ImageIcon> */}
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  position: relative;
  height: 20px;
  margin-bottom: 30px;
  @media (max-width: 300px) {
    margin-bottom: 20px;
  }
`;
const ImageIcon = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 30px;
  @media (max-width: 300px) {
    width: 32px;
    height: 24px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default FixedImages;
