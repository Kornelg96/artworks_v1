import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import img from "../images/Frame.png";
import img2 from "../images/Frame2.png";
import img3 from "../images/Frame3.png";
import group from "../images/Group 20.png";
import Rectangle from "./Rectangle";

const Container = styled.div`
  position: relative;
  width: 1280.43px;
  height: 525.77px;
  margin: 0 auto;
  top: 0;
  display: flex;
  gap: 7px;
  margin-top: 169.66px;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;
const Left = styled.div`
  width: 615px;
  height: 439px;
  position: relative;
  margin-top: 12.34px;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;
const Right = styled.div`
  width: 658.43px;
  height: 525.77px;
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  display: inline-block;
  width: 616px;
  height: 243px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 66.7826px;
  line-height: 81px;
  letter-spacing: 0.015em;
  margin-bottom: 28px;
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    height: auto;
  }
  @media (max-width: 700px) {
    font-size: 35px;
  }
`;
const SubTitle = styled.p`
  width: 522px;
  height: 75px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.4895px;
  line-height: 25px;
  letter-spacing: 0.02em;
  margin-bottom: 38px;
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin-top: 0;
    height: auto;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 28px;
  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;
const Images = styled.div`
  width: ${(props) => (props.second ? "658.43px" : "495.44px")};
  height: ${(props) => (props.second ? "124.71px" : "525.77px")};
  position: relative;
  margin-left: ${(props) => (props.second ? "37.12px" : "104px")};
  margin-top: ${(props) => props.second && "45.28px"};
  display: flex;
  gap: 35.63px;
  @media (max-width: 1300px) {
    width: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 700px) {
    height: auto;
  }
  @media (max-width: 350px) {
    gap: 20px;
  }
`;

const Image = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  top: ${(props) => (props.top ? props.top : "auto")};
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  left: ${(props) => props.left && props.left};
  z-index: ${(props) => (props.z ? props.z : "1")};
  @media (max-width: 700px) {
    width: 100%;
    position: relative;
  }
`;

const Image2 = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  @media (max-width: 700px) {
    &:last-child {
      display: none;
    }
  }
  @media (max-width: 500px) {
    width: 40%;
    height: auto;
  }
`;

const Gradient = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 66.7826px;
  line-height: 81px;
  letter-spacing: 0.015em;
  background: linear-gradient(97.86deg, #ff8d8d -38.38%, #f7fc0e 71.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
  @media (max-width: 700px) {
    font-size: 35px;
  }
`;
const Test = styled.div`
  @media (max-width: 700px) {
    position: relative;
    width: 100%;
  }
`;
const Main = () => {
  let browserWidth = window.innerWidth;
  const [resize, setResize] = useState(false);
  useEffect(() => {
    if (browserWidth < 700) {
      setResize(true);
    }
  }, [browserWidth]);

  return (
    <Container>
      <Left>
        <Title>
          Discover & Collect <Gradient>Super Rare</Gradient> Digital Artworks
        </Title>
        <SubTitle>
          The largest NFT marketplace. Authentic and truly unique digital
          creation. Signed and issued by the creator, made possible by
          blockchain technology
        </SubTitle>
        <Buttons>
          <Button width="173px" height="55px">
            Let’s Explore
          </Button>
          <Button width="137px" height="55px" secondary="true">
            Sell NFT
          </Button>
        </Buttons>
      </Left>
      <Right>
        <Images>
          <Image src={group} />
        </Images>
        <Test>
          <Rectangle blur bottom="29.11px" width="658.43px" height="124.71px">
            <Images second="true">
              <Image2 src={img} width="188.03px" height="34.63px" />
              <Image2 src={img3} width=" 173.14px" height=" 34.63px" />
              <Image2 src={img2} width="152.28px" height="27.2px" />
            </Images>
          </Rectangle>
        </Test>
      </Right>
    </Container>
  );
};

export default Main;
