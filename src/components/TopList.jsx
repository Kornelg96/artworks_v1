import { React, useState } from "react";
import styled from "styled-components";
import Button from "./Button.jsx";
import Slider from "./Slider.jsx";
import { sliderItems } from "../data/data";
import { sliderItems2 } from "../data/data";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 1280px;
  height: 642.54px;
  margin: 0 auto;
  margin-top: 137.57px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  width: 100%;
  height: 76px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 59.0024px;
  line-height: 76px;
  text-align: center;

  letter-spacing: 0.005em;
  margin-bottom: 32px;
  @media (max-width:550px){
    height: auto;
  }
`;
const Tabs = styled.div`
  width: 288px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  gap: 21px;
`;
const SliderContaier = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  @media (max-width: 1300px) {
    margin: 60px 40px;
  }
  @media (max-width:550px){
    margin: 60px 15px;
  }
`;
const TopList = () => {
  const [active, setActive] = useState("firstButton");
  const handleButton = () => {
    setActive("firstButton");
  };
  const handleButton2 = () => {
    setActive("secondButton");
  };
  return (
    <Container>
      <Wrapper>
        <Title>Top List Creator</Title>
        <Tabs>
          <Button
            secondary={active == "firstButton" ? "false" : "true"}
            width="126px"
            height="45px"
            radius="27.75px"
            onClick={handleButton}
          >
            Popular
          </Button>
          <Button
            secondary={active == "secondButton" ? "false" : "true"}
            width="141px"
            height="45px"
            radius="27.75px"
            onClick={handleButton2}
          >
            Following
          </Button>
        </Tabs>
        <SliderContaier>
          {active == "firstButton" ? (
            <Slider sliderItems={sliderItems} />
          ) : (
            <Slider sliderItems={sliderItems2} />
          )}
        </SliderContaier>
      </Wrapper>
    </Container>
  );
};

export default TopList;
