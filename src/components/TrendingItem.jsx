import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Rectangle from "./Rectangle";

const Container = styled.div`
  width: 496px;
  height: 369px;
  position: relative;
  @media (max-width: 1300px) {
    height: 320px;
    width: 400px;
  }
`;
const Image = styled.img`
  margin: 0 24px;
  position: relative;
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    min-width: 250px;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;
const Author = styled.div`
  width: 201px;
  height: 33px;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 25.7561px;
  line-height: 128.5%;
  letter-spacing: 0.005em;
  margin-top: 12px;
  white-space: nowrap;
`;
const Instagram = styled.div`
  width: 70px;
  height: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11.7557px;
  line-height: 128.5%;
  letter-spacing: 0.005em;
  opacity: 0.5;
  margin-bottom: 7px;
`;
const Price = styled.div`
  width: 88.18px;
  height: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20.8105px;
  line-height: 128.5%;
  letter-spacing: 0.005em;
  background: linear-gradient(97.86deg, #ff8d8d -38.38%, #f7fc0e 71.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

let isMobile = window.innerWidth < 1301 ? true : false;
const TrendingItem = ({ img, author, instagram, price }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 1301 ? true : false;
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <Container>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      {isMobile ? (
        <Rectangle blur trending bottom="55px" width="100%" height="105px">
          <Information>
            <Author>{author}</Author>
            <Instagram>{instagram}</Instagram>
            <Price>{price}</Price>
          </Information>
          <ButtonWrapper>
            <Button width="132px" height="39px">
              Collect Now
            </Button>
          </ButtonWrapper>
        </Rectangle>
      ) : (
        <Rectangle blur top="264px" width="100%" height="105px">
          <Information>
            <Author>{author}</Author>
            <Instagram>{instagram}</Instagram>
            <Price>{price}</Price>
          </Information>
          <ButtonWrapper>
            <Button width="152px" height="39px">
              Collect Now
            </Button>
          </ButtonWrapper>
        </Rectangle>
      )}
    </Container>
  );
};

export default TrendingItem;
