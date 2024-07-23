import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FixedImages from "../components/FixedImage";

function Calendar() {
  const dayLists = [
    { day: "일" },
    { day: "월" },
    { day: "화" },
    { day: "수" },
    { day: "목" },
    { day: "금" },
    { day: "토" },
  ];
  const DateLists = [
    [
      { date: "1" },
      { date: "2" },
      { date: "3" },
      { date: "4" },
      { date: "5" },
      { date: "6" },
      { date: "7" },
    ],
    [
      { date: "8" },
      { date: "9" },
      { date: "10" },
      { date: "11" },
      { date: "12" },
      { date: "13" },
      { date: "14" },
    ],
    [
      { date: "15" },
      { date: "16" },
      { date: "17" },
      { date: "18" },
      { date: "19" },
      { date: "20" },
      { date: "21" },
    ],
    [
      { date: "22" },
      { date: "23" },
      { date: "24" },
      { date: "25" },
      { date: "26" },
      { date: "27" },
      { date: "28" },
    ],
    [
      { date: "29" },
      { date: "30" },
      { date: "31" },
      { date: "" },
      { date: "" },
      { date: "" },
      { date: "" },
    ],
  ];

  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date().getTime();
    const untilWeddingDay =
      new Date("2024-10-28").getTime() + 1000 * 3600 * 9 - new Date().getTime();
    setDays(
      Math.floor((untilWeddingDay + 1000 * 3600 * 9) / (1000 * 3600 * 24))
    );
  }, []);

  return (
    <Container>
      {/* <FixedImages /> */}
      <Title>2024.10.28. 토요일 낮 12시</Title>
      <CalenderWrap>
        <DayWrap>
          {dayLists.map((list) => (
            <div key={list.day}>
              <DayItem>{list.day}</DayItem>
            </div>
          ))}
        </DayWrap>
        <DateWrap>
          {DateLists.map((list, index) => (
            <DateRowWrap key={list[index].date + "dateRow"}>
              {list.map((day, index) => (
                <DateItaems key={`${day.date}` + `${index}`}>
                  <DateItem>{day.date}</DateItem>
                </DateItaems>
              ))}
            </DateRowWrap>
          ))}
        </DateWrap>
      </CalenderWrap>
      <CountdownWrap data-aos="zoom-in" data-aos-duration="1000">
        준혁
        <span>❤︎</span>
        수지의 결혼식이 <span>{days}일</span>
        {days < 0 ? "지났습니다." : "남았습니다."}
      </CountdownWrap>
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
  background-color: #f6f3ee;
  /* border: 1px solid rgb(209, 200, 200); */
  border-width: 1px 0;
`;
const Title = styled.div`
  line-height: 1.8;
  text-align: center;
  font-size: 1.3rem;
  color: #8a8076;
`;
const Desc = styled.div`
  line-height: 1.8;
  text-align: center;
`;
const CalenderWrap = styled.div`
  border: 1px solid #e8dfdf;
  border-width: 1px 0;
  width: 90%;
  max-width: 450px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;
const DayWrap = styled.div`
  display: flex;
  div:first-of-type {
    div {
      color: #c6472b;
    }
  }
  div {
    flex: 1;
  }
`;

const DayItem = styled.div`
  text-align: center;
`;
const DateWrap = styled.div``;
const DateRowWrap = styled.div`
  display: flex;

  &:nth-of-type(4) {
    div:last-of-type {
      div {
        position: relative;
        &:before {
          content: "28";
          position: absolute;
          width: fit-content;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 8px;
          color: #fff;
          line-height: 1;
          border-radius: 20px;
          background-color: rgb(234, 118, 100);
          @media (max-width: 300px) {
            width: 40px;
            padding: 8px 0;
            font-size: 13px;
          }
        }
      }
    }
  }
`;
const DateItaems = styled.div`
  flex: 1;
  &:first-of-type {
    div {
      color: #c6472b;
    }
  }
`;
const DateItem = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
const CountdownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 18px; */
  span {
    width: fit-content;
    margin: 0 5px;
    font-size: 18px;
    color: #ea7664;
  }
`;

export default Calendar;
