import React from "react";
import styled from "styled-components";

// components
import mainBgJpg from "../assets/images/w12.jpg";
import testimage from "../assets/images/aaa.jpeg";

function Main() {
  return (
    <Container>
      <ContententsWrap>
        <TopTextWrap>
          <WeddingDate>SAT</WeddingDate>
          <WeddingDate>|</WeddingDate>
          <WeddingDate>2024.10.28.</WeddingDate>
          <WeddingDate>|</WeddingDate>
          <WeddingDate>12pm</WeddingDate>
        </TopTextWrap>
        <MiddleTextWrap>
          <WeddingText>Happy Wedding Day</WeddingText>
        </MiddleTextWrap>
        <BottomTextWrap>
          <MainCharacterName>Suji & Junhyuk</MainCharacterName>
          <BottomSubText>
            We are so excited to share our special day with you. Come join us in
            celebrating our union as we commit ourselves to each other.
          </BottomSubText>
          <VenueAddress>
            2024년 10월 28일 토요일 12시 빌라드지디 청담
          </VenueAddress>
        </BottomTextWrap>
      </ContententsWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.3) 10%,
      rgba(20, 20, 20, 0.1) 20%,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, 0.6) 80%,
      rgba(20, 20, 20, 1) 100%
    ),
    url(${mainBgJpg});
  /* url("https://i2n.news1.kr/system/photos/2022/3/31/5295894/article.jpg"); */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;
const ContententsWrap = styled.div``;
const TopTextWrap = styled.div`
  position: absolute;
  top: 2%;
  display: flex;
  justify-content: space-around;
  /* align-content: space-evenly; */
  background-color: transparent;
`;
const WeddingDate = styled.div`
  text-align: center;
  color: rgb(255 255 255);
  font-size: 1.1rem;
  background-color: transparent;
  font-family: "Suranna", serif;
  line-height: 1;
  :nth-child(1) {
    padding-left: 10px;
    /* text-align: left; */
  }
  :nth-child(5) {
    padding-right: 10px;
    /* text-align: right; */
  }
`;
const MiddleTextWrap = styled.div`
  position: absolute;
  top: 50%;
  background-color: transparent;
  opacity: 50%;
`;
const WeddingText = styled.div`
  text-align: center;
  font-size: 4rem;
  color: rgb(228 218 205);
  font-family: "Herr Von Muellerhoff", cursive;
  background-color: transparent;
`;
const MainCharacterName = styled.div`
  padding: 0 15px;
  font-size: 18px;
  color: rgb(228 218 205);
  font-family: "Suranna", serif;

  line-height: 1;
  font-size: 3rem;
  text-align: center;
  background: transparent;
`;

const BottomSubText = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: rgb(228 218 205);
  font-family: "Suranna", serif;
  line-height: 1.2;
  background-color: transparent;
`;
const BottomTextWrap = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  background-color: transparent;
`;
const VenueAddress = styled.div`
  text-align: center;
  padding: 0 6px;
  color: rgb(228 218 205);
  font-size: 0.9rem;
  line-height: 1.8;
  background: transparent;
`;

export default Main;
