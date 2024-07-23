import React from "react";
import styled from "styled-components";

// components
import FixedImages from "../components/FixedImage";
import { useRecoilState } from "recoil";
import { ContactModalType } from "../states/Modal";

const ContactButtonLists = [
  {
    name: "신랑측 마음 전하실 곳",
    type: "groom",
  },
  {
    name: "신부측 마음 전하실 곳",
    type: "bride",
  },
];

function Contact() {
  const [contactModalType, setContactModalType] =
    useRecoilState(ContactModalType);

  const clickContactButton = (type: string) => {
    setContactModalType(type);
    document.body.style.overflowY = "hidden";
  };

  return (
    <Container>
      <FixedImages />
      <Title>
        ❤︎
        <br />
        마음 전하실 곳
      </Title>
      <div data-aos="fade-down">
        <Desc>
          참석이 어려우신 분들을 위해
          <br />
          연락처와 계좌번호를 남기오니
          <br />
          너그러운 마음으로 양해 부탁 드립니다.
        </Desc>
      </div>
      <ContactWrap>
        {ContactButtonLists.map((list) => (
          <div key={list.name} data-aos="fade-down">
            <ButtonWrap>
              <Button onClick={() => clickContactButton(list.type)}>
                {list.name}
              </Button>
            </ButtonWrap>
          </div>
        ))}
      </ContactWrap>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 80px;
`;
const Title = styled.div`
  text-align: center;
  line-height: 2;
`;
const Desc = styled.div`
  margin-top: 30px;
  line-height: 1.8;
  text-align: center;
`;
const ContactWrap = styled.div`
  width: 100%;
  margin: 30px 0 50px;
`;
const ButtonWrap = styled.div``;
const Button = styled.div`
  width: 230px;
  padding: 12px 25px;
  margin: 0 auto 12px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 6px;
  background-color: #e8dfdf;
`;

export default Contact;
