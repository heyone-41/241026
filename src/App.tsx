import React, { useEffect, useRef } from "react";
import "./App.css";
import styled from "styled-components";

// image
import KakaoWhiteIcon from "./assets/images/icon_kakao_white.png";
import LinkIcon from "./assets/images/icon_link.svg";
import w1 from "./assets/images/w1.jpg";
import w2 from "./assets/images/w2.jpg";
import w3 from "./assets/images/w3.jpg";
import w4 from "./assets/images/w4.jpg";
import w5 from "./assets/images/w5.jpg";
import w6 from "./assets/images/w6.jpg";
import w7 from "./assets/images/w7.jpg";
import w8 from "./assets/images/w8.jpg";
import w9 from "./assets/images/w9.jpg";
import w10 from "./assets/images/w10.jpg";
import w11 from "./assets/images/w11.jpg";
import w12 from "./assets/images/w12.jpg";
import w13 from "./assets/images/w13.jpg";
import w14 from "./assets/images/w14.jpg";
import w15 from "./assets/images/w15.jpg";
import w16 from "./assets/images/w16.jpg";
import w17 from "./assets/images/w17.jpg";
import w18 from "./assets/images/w18.jpg";
import w19 from "./assets/images/w19.jpg";
import w20 from "./assets/images/w20.jpg";

// components
import Main from "./main/Main";
import Gallery from "./gallery/Gallery";
import Invitation from "./invitation/Invitation";
// import Map from "./map/MapToSuwon";
import Map from "./map/Map";
import Contact from "./contact/Contact";
import { shareKakao } from "./utils/shareKakaoLink";

// library
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Splide CSS 파일을 import

import AOS from "aos";
import "aos/dist/aos.css";
import { useRecoilState, useRecoilValue } from "recoil";

// states
import { ContactModalType, MorePhotoData } from "./states/Modal";
import Calendar from "./calendar/Calendar";
import Notice from "./notice/Notice";

const contactTypeList = {
  groom: [
    {
      name: "신랑 아버지 김진수",
      bank: "신한은행",
      account: "763202-96-125679",
    },
    {
      name: "신랑 어머니 박정수",
      bank: "신한은행",
      account: "763202-01-042338",
    },
    {
      name: "신랑 김준혁",
      bank: "국민은행",
      account: "110-434-452748",
    },
  ],
  bride: [
    {
      name: "신부 아버지 강대성",
      bank: "국민은행",
      account: "782301-01-625569",
    },
    {
      name: "신부 어머니 김수란",
      bank: "우리은행",
      account: "302-1234-234045-41",
    },
    {
      name: "신부 강수지",
      bank: "카카오뱅크",
      account: "3333-14-1934489",
    },
  ],
};

const snapLists = [
  {
    name: w1,
    desc: "hotel_together",
  },
  {
    name: w2,
    desc: "mirror_gh",
  },
  {
    name: w3,
    desc: "bed_nr",
  },
  {
    name: w4,
    desc: "chair_gh",
  },
  {
    name: w5,
    desc: "door_nr",
  },
  {
    name: w6,
    desc: "floor_gh_stand",
  },
  {
    name: w7,
    desc: "floor_nr_side",
  },
  {
    name: w8,
    desc: "floor_nr_back",
  },
  {
    name: w9,
    desc: "floor_gh_sitdown",
  },
  {
    name: w10,
    desc: "floor_together_back",
  },
  {
    name: w11,
    desc: "flower_nr",
  },
  {
    name: w12,
    desc: "pond_together_side",
  },
  {
    name: w13,
    desc: "pond_together_back",
  },
  {
    name: w14,
    desc: "street_together_walk1",
  },
  {
    name: w15,
    desc: "street_together_walk2",
  },
  {
    name: w16,
    desc: "house_chu",
  },
  {
    name: w17,
    desc: "house_together_front",
  },
  {
    name: w18,
    desc: "house_gh",
  },
  {
    name: w19,
    desc: "corridor_side",
  },
  {
    name: w20,
    desc: "corridor_front",
  },
];

function App() {
  const splideRef = useRef(null);
  const [MorePhoto, SetMorePhoto] = useRecoilState(MorePhotoData);
  const [contactModalType, setContactModalType] =
    useRecoilState(ContactModalType);

  const clickCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("모바일 청첩장 주소를 복사 했습니다.");
    } catch (e) {
      alert("모바일 청첩장 주소 복사에 실패 했습니다.");
    }
  };

  const clickCloseModal = () => {
    SetMorePhoto(false);
    document.body.style.overflowY = "auto";
  };
  const clickCloseContactModal = () => {
    setContactModalType("");
    document.body.style.overflowY = "auto";
  };
  const clickCopyAccount = async (
    name: string,
    bank: string,
    account: string
  ) => {
    try {
      await navigator.clipboard.writeText(
        account.replace(/-/g, "") + " " + bank
      );
      alert(name + "님의 계좌번호를 복사 했습니다.");
    } catch (e) {
      alert("복사에 실패 했습니다");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <Container className="container">
      <div>
        <Main />
        <Invitation />
        <Gallery />
        <Calendar />
        <Map />
        <Notice />
        <Contact />

        <ShareWrap>
          <ShareItem onClick={() => shareKakao()}>
            <img src={KakaoWhiteIcon} alt="" />
            카카오톡 공유하기
          </ShareItem>
          <ShareItem
            onClick={() => clickCopyUrl("https://gh1028nr.netlify.com")}
          >
            <img src={LinkIcon} alt="" />
            모바일 청첩장 주소 복사하기
          </ShareItem>
        </ShareWrap>
      </div>
      {MorePhoto && (
        <MorePhotoModal showModal={MorePhoto}>
          <CloseButton
            modalType="morePhoto"
            onClick={clickCloseModal}
            className="material-symbols-outlined"
          >
            <span className="material-symbols-outlined">close</span>
          </CloseButton>
          <div className="slider-container">
            <div className="splide-vertical-centered">
              <Splide
                options={{
                  type: "slide",
                  perPage: 1,
                  perMove: 1,
                  pagination: false,
                }}
              >
                {snapLists.map((list) => (
                  <SplideSlide key={list.name}>
                    <div className="slide-content">
                      <img src={list.name} alt="" />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </MorePhotoModal>
      )}
      {contactModalType !== "" && (
        <ContactModal showModal={contactModalType}>
          <ModalBox>
            <TitleWrap>
              <ModalTitle>
                {contactModalType === "groom" ? "신랑측" : "신부측"} 마음 전하실
                곳
                <CloseButton
                  modalType="contact"
                  onClick={clickCloseContactModal}
                  className="material-symbols-outlined"
                >
                  <span className="material-symbols-outlined">close</span>
                </CloseButton>
              </ModalTitle>
            </TitleWrap>
            <ModalContentsWrap>
              {contactModalType === "groom"
                ? contactTypeList.groom.map((list) => (
                    <ItemWrap key={list.name}>
                      <NameItem>{list.name}</NameItem>
                      <AccountWrap>
                        <BankItem>
                          {list.bank} {list.account}
                        </BankItem>
                        <CopyButton
                          onClick={() =>
                            clickCopyAccount(list.name, list.bank, list.account)
                          }
                        >
                          복사하기
                        </CopyButton>
                      </AccountWrap>
                    </ItemWrap>
                  ))
                : contactTypeList.bride.map((list) => (
                    <ItemWrap key={list.name}>
                      <NameItem>{list.name}</NameItem>
                      <AccountWrap>
                        <BankItem>
                          {list.bank} {list.account}
                        </BankItem>
                        <CopyButton
                          onClick={() =>
                            clickCopyAccount(list.name, list.bank, list.account)
                          }
                        >
                          복사하기
                        </CopyButton>
                      </AccountWrap>
                    </ItemWrap>
                  ))}
            </ModalContentsWrap>
          </ModalBox>
        </ContactModal>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  text-align: center;
  background-color: rgb(251, 251, 251);
  font-family: "GowunDodum";
  .slick-slider.slick-initialized {
    ul.slick-dots {
      display: block;
      bottom: 0 !important;
      li {
        width: 10px;
        width: 10px;
        margin: 0 2px;
        button {
          width: 10px;
          height: 10px;
          padding: 0;
          &:before {
            line-height: 10px;
            width: 10px;
            height: 10px;
          }
        }
      }
    }
    button.slick-arrow {
      &.slick-prev {
        left: 10px !important;
        z-index: 9999 !important;
      }
      &.slick-next {
        right: 10px;
      }
    }
  }
`;
const ShareWrap = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #f2eeee;
`;
const ShareItem = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  padding: 5px 15px;
  background-color: #f2eeee;
  img {
    width: 20px;
    margin-right: 6px;
    background: none;
  }
`;
const MorePhotoModal = styled.div<{ showModal: boolean }>`
  display: ${({ showModal }) => (showModal ? "block" : "none")};
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100vh;
  /* padding-top: 13%; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  .slider-container {
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    height: 100vh; /* 뷰포트의 높이에 맞춤 */
  }

  .splide-vertical-centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%; /* 세로 중앙 정렬된 Splide의 높이를 조정할 수 있습니다. */
  }

  ul li {
    display: flex;
    align-items: center;
  }
`;
const ContactModal = styled.div<{ showModal: string }>`
  display: ${({ showModal }) => (showModal === "" ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  max-width: 420px;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  @media (min-width: 540px) {
    padding-top: 10vh;
  }
  @media (min-width: 700px) {
    padding-top: 18vh;
  }
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 450px;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #fff;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalTitle = styled.div`
  padding: 15px;
  border-radius: 6px 6px 0 0;
  background-color: #e8dfdf;
`;
const CloseButton = styled.div<{ modalType: string }>`
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  width: fit-content;
  span {
    padding: ${({ modalType }) =>
      modalType === "morePhoto" ? "10px" : "15px"};
    color: ${({ modalType }) => (modalType === "morePhoto" ? "#fff" : "#000")};
    /* @media (min-width: 540px) {
      padding: 15px;
    } */
  }
`;
const ModalContentsWrap = styled.div`
  padding: 15px;
`;
const ItemWrap = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid rgba(125, 125, 125, 0.4);
  line-height: 1.8;
  &:first-of-type {
    padding: 0 0 15px;
  }
  &:last-of-type {
    padding: 15px 0 0;
    border: none;
  }
`;
const NameItem = styled.div``;
const AccountWrap = styled.div`
  line-height: 1.8;
`;
const BankItem = styled.div``;
const CopyButton = styled.div`
  padding: 4px;
  margin-top: 5px;
  border-radius: 6px;
  background-color: #f2eeee;
  text-align: center;
`;
const SnapImageWrap = styled.div`
  width: 100%;
  img {
    width: 100%;
    /* height: auto; */
    /* @media (min-width: 451px) {
      width: 450px;
      margin: 0 auto;
    } */
  }
`;
export default App;
