import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// image
// import FixedImages from "../components/FixedImage";
import Naver from "../assets/images/map_naver.png";
import Kakao from "../assets/images/map_kakao.png";

function MapToSuwon() {
  const transfotationLists = [
    {
      name: "기차",
      desc: "[KTX] 수원역, 동탄역",
      icon: "directions_subway",
    },
    {
      name: "자동차",
      desc: "마이어스 수원점(수원버스터미널)",
      icon: "directions_car",
    },
    {
      name: "주차 안내",
      desc: "수원버스터미널 주차장 지하 1층\n2시간 무료(3층에서 등록)",
      icon: "local_parking",
    },
    {
      name: "식사 안내",
      desc: "식사 시간은 11:40 ~ 13:40입니다.\n식사 장소는 3층입니다.",
      icon: "restaurant_menu",
    },
  ];

  const ButtonLists = [
    {
      name: "네이버 지도",
      url: "https://m.map.naver.com/appLink.naver?pinId=13278793&pinType=site&menu=location&appTargetPage=place&appSchemeName=nmap&mode=detail&id=13278793&app=Y&appmarket=N#applink",
      icon: Naver,
    },
    {
      name: "카카오 지도",
      url: "http://kko.to/EmAWbPhQN3",
      icon: Kakao,
    },
  ];

  const mapElement = useRef(null);

  // 네이버 지도
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.250426, 127.020871);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  const clickMap = (url: string) => {
    window.open(url, "_blank");
    console.log("click");
  };

  return (
    <Container>
      <TopContentsWrap>
        <Title>수원 마이어스 웨딩&파티</Title>
        <Desc>경기 수원시 권선구 경수대로 270 터미널동 2층</Desc>
        {/* <ImageWrap>
          <img src={weddingHallMap} alt="" />
        </ImageWrap> */}
        <NaverMap ref={mapElement} />
        <ButtonWrap>
          {ButtonLists.map((list, idx) => (
            <ButtonItems key={list.name}>
              <MapIcon>
                <img src={list.icon} alt="" />
              </MapIcon>
              <MapTypeItem onClick={() => clickMap(list.url)}>
                {list.name}
              </MapTypeItem>
            </ButtonItems>
          ))}
        </ButtonWrap>
      </TopContentsWrap>
      <TextWrap>
        {transfotationLists.map((list, idx) => (
          <TraficWrap key={list.name + idx}>
            <IconWrap>
              <IconItem>
                <span className="material-symbols-outlined">{list.icon}</span>
              </IconItem>
            </IconWrap>
            <ItemWrap>
              <TypeItem>{list.name}</TypeItem>
              <DescItem>{list.desc}</DescItem>
            </ItemWrap>
          </TraficWrap>
        ))}
      </TextWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  /* padding: 80px 0; */
`;
const Title = styled.div`
  /* margin-top: 30px; */
  font-size: 18px;
  text-align: center;
  color: #000;
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;
const Desc = styled.div`
  margin-top: 8px;
  text-align: center;
  @media (max-width: 300px) {
    font-size: 13px;
  }
`;
const NaverMap = styled.div`
  width: 100%;
  height: 260px;
  margin: 20px auto 0;
`;
const TopContentsWrap = styled.div`
  width: 100%;
`;
const TextWrap = styled.div`
  max-width: 450px;
  box-sizing: border-box;
`;

const TraficWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #e9e5e5;
  &:last-of-type {
    border-bottom: none;
  }
`;
const IconWrap = styled.div`
  width: fit-content;
`;
const IconItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #f2eeee;
  span {
    width: fit-content;
    font-size: 19px;
    color: #89757a;
  }
`;
const ItemWrap = styled.div`
  width: calc(100% - 35px);
  padding-left: 10px;
`;
const TypeItem = styled.div`
  font-size: 17px;
  text-align: left;
  color: #89757a;
`;
const DescItem = styled.div`
  margin-top: 2px;
  text-align: left;
  white-space: pre-line;
  line-height: 1.8;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 300px) {
  }
`;
const ButtonItems = styled.div`
  flex: 1;
  text-align: center;
  padding: 12px 0;
  background-color: #f2eeee;
  &:first-of-type {
    border-right: 1px solid rgba(97, 80, 67, 0.15);
  }
`;
const MapIcon = styled.span`
  margin-right: 6px;
  img {
    width: 15px;
    height: 15px;
  }
`;
const MapTypeItem = styled.span``;

export default MapToSuwon;
