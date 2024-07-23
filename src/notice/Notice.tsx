import React, { useEffect, useRef, useState } from "react";

// style
import styled from "styled-components";

// images
import Naver from "../assets/images/map_naver.png";
import Kakao from "../assets/images/map_kakao.png";

// components
import FixedImages from "../components/FixedImage";

function Notice() {
  const buttonItems = [{ name: "본식" }, { name: "피로연" }];
  const descItems = [
    {
      desc: "B1층 2시간 무료 주차입니다.\n3층 안내 데스크에서 주차 등록이 가능합니다.\n주차권은 제공되지 않습니다.",
    },
    {
      desc: "식사 시간은 11:40 ~ 13:40입니다.\n예식 30분 전부터 식사가 가능합니다.\n식사 장소는 3층입니다.",
    },
    {
      desc: "본식에 참석하기 어려운 분들을 위해\n작은 피로연 자리를 마련 했습니다.",
    },
  ];
  const ButtonLists = [
    {
      name: "피로연장 위치 보기",
      url: "http://kko.to/lCmKvoBJDQ",
      icon: Kakao,
    },
  ];
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const clickButton = (index: number) => {
    console.log(index);
    setSelectedButtonIndex(index);
  };
  const clickMap = (url: string) => {
    window.open(url);
  };

  return (
    <Container>
      <Title>
        ❤︎
        <br />
        안내사항
      </Title>
      <NoticeWrap>
        <ButtonWrap>
          {buttonItems.map((item, index) => (
            <div key={item.name}>
              <ButtonItem
                onClick={() => clickButton(index)}
                selected={selectedButtonIndex}
                buttonIndex={index}
              >
                {item.name}
              </ButtonItem>
            </div>
          ))}
        </ButtonWrap>
        <DescWrap selected={selectedButtonIndex}>
          <div data-aos="fade-down">
            <DescBox>
              {descItems[selectedButtonIndex].desc}
              {selectedButtonIndex === 2 && (
                <div>
                  <AddressTitle>
                    <span className="material-symbols-outlined">distance</span>
                    초원갈비
                  </AddressTitle>
                  <AddressDesc>2023년 10월 8일 일요일 12시30분</AddressDesc>
                  <MapButtonWrap>
                    {ButtonLists.map((list) => (
                      <MapButtonItems key={list.name}>
                        <MapTypeItem onClick={() => clickMap(list.url)}>
                          {list.name}
                        </MapTypeItem>
                      </MapButtonItems>
                    ))}
                  </MapButtonWrap>
                </div>
              )}
            </DescBox>
          </div>
        </DescWrap>
      </NoticeWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 60px 0;
`;

const Title = styled.div`
  text-align: center;
  line-height: 2;
`;
const NoticeWrap = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 2rem auto;
  background: unset;
`;
const ButtonWrap = styled.div`
  display: flex;
  background-color: #f6f5f5;
  border-radius: 8px 8px 0 0;
  div {
    flex: 1;
    text-align: center;
    line-height: 1.8;
  }
`;
const ButtonItem = styled.div<{ selected: number; buttonIndex: number }>`
  position: relative;
  padding: 8px;
  background-color: ${({ selected, buttonIndex }) =>
    selected === buttonIndex ? "#fbfbfb" : "transparent"};
  border: 1px solid
    ${({ selected, buttonIndex }) =>
      selected === buttonIndex ? "#e8dfdf" : "transparent"};
  border-width: ${({ selected, buttonIndex }) =>
    selected === buttonIndex ? "1px 1px 0 1px" : "0"};
  border-radius: ${({ selected, buttonIndex }) =>
    selected === buttonIndex ? "8px 8px 0 0" : "0"};
  &:after {
    content: "";
    position: absolute;
    right: -1px;
    top: 25%;
    width: ${({ buttonIndex }) => (buttonIndex === 1 ? "0" : "1px")};
    height: 50%;
    background: #e8dfdf;
  }
`;
const DescWrap = styled.div<{ selected: number }>`
  margin-top: -1px;
  padding: 3rem 1rem;
  border: 1px solid #e8dfdf;
  border-top-left-radius: ${({ selected }) => (selected === 0 ? "0" : "8px")};
  border-top-right-radius: ${({ selected }) => (selected === 1 ? "0" : "8px")};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const DescBox = styled.div`
  white-space: pre-line;
  text-align: center;
  line-height: 1.8;
`;

const AddressTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
  color: #000;
`;
const AddressDesc = styled.div`
  text-align: center;
`;
const MapButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 1rem auto 0;
  text-align: center;
`;
const MapButtonItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 26px;
  margin: 0 auto;
  border: 1px solid #d1c8c8;
  color: #978686;
  line-height: 1.8;
  border-radius: 20px;
`;
const MapIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
  img {
    width: 15px;
    height: 15px;
  }
`;
const MapTypeItem = styled.div``;

export default Notice;
