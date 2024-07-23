import React from "react";
import styled from "styled-components";

// images
import invitationJpg from "../assets/images/w14.jpg";

function Invitation2() {
  return (
    <Container>
      <ContententsWrap>
        <ImageWrap>
          <img src={invitationJpg} alt="" />
        </ImageWrap>
        <TextWrap data-aos="fade-down">
          <GreetingText>
            사계절을 나란히 걸어가면서
            <br />
            한 발씩 맞춰 걷는 법을 배웠습니다.
            <br />
            함께 할 인생의 모든 계절 동안
            <br />
            서로에게 유일한 사람으로 머물겠습니다.
            <br />
            늘 곁에서 아껴주셨던
            <br />
            소중한 분들을 모십니다.
          </GreetingText>
          <BottomTextWrap>
            <IntroduceParent>
              <NameItem>김진수 · 박정수</NameItem>
              <DefaultItem>의&nbsp;&nbsp;아들</DefaultItem>
              <NameItem>준혁</NameItem>
            </IntroduceParent>
            <IntroduceParent>
              <NameItem>강대성 · 김수란</NameItem>
              <DefaultItem>의&nbsp;&nbsp;&nbsp;딸</DefaultItem>
              <NameItem>&nbsp;&nbsp;수지</NameItem>
            </IntroduceParent>
          </BottomTextWrap>
        </TextWrap>
      </ContententsWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;
  /* background-color: #ece3de; */
  background: #f2ebe9;
`;
const ContententsWrap = styled.div`
  background-color: transparent;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 70%;
  img {
    /* border: 40px solid #ddcec1; */
    border: 40px solid #decdc0;
  }
  /* :before {
    content: "10/28";
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-family: "Suranna", serif;
    color: #fffff1;
  } */
  :after {
    content: "WEDDING INVITATION";
    position: absolute;
    bottom: -44px;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-family: "Suranna", serif;
    line-height: 1;
    color: rgb(147, 126, 112);
    text-align: center;
  }
`;
const TextWrap = styled.div<{ location?: number }>`
  width: 100%;
  padding-top: 5rem;
  background-color: transparent;
`;
const GreetingText = styled.div`
  text-align: center;
  background-color: transparent;
  line-height: 2;
`;
const BottomTextWrap = styled.div`
  text-align: center;
  margin: 20px auto 0;
  line-height: 2;
  background-color: transparent;
`;
const IntroduceParent = styled.div`
  text-align: center;
  line-height: 1.5;
  div {
    display: flex;
    background-color: transparent;
  }
  background-color: transparent;
`;
const NameItem = styled.span`
  width: 120px;
  margin-left: 10px;
  font-size: 18px;
  background-color: transparent;
`;
const DefaultItem = styled.span`
  margin-left: 10px;
  opacity: 70%;
  background-color: transparent;
`;

export default Invitation2;
