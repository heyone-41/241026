import React from "react";
import styled from "styled-components";

function WeddingLogo() {
  return (
    <Container>
      <LogoText>1028</LogoText>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  @media (min-width: 541px) {
    padding: 40px;
  }
`;
const LogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Montserrat", serif;
`;

export default WeddingLogo;
