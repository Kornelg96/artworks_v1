import React from "react";
import styled from "styled-components";
import Rec from "../images/Rec.png";
import Rec2 from "../images/Rec2.png";
import Rec3 from "../images/Rec3.png";
import Rec4 from "../images/Rec4.png";
import Button from "./Button";
import Rectangle from "./Rectangle";

const Container = styled.div`
  width: 496px;
  height: 369px;
  position: relative;
`;
const Image = styled.img`
  margin: 0 24px;
  position: relative;
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
  font-style: normal;
  font-weight: 600;
  font-size: 25.7561px;
  line-height: 128.5%;
  letter-spacing: 0.005em;
  margin-top: 12px;
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

const TrendingItem = ({ img, author, instagram, price }) => {
  return (
    <Container>
      <Image src={img} />
      <Rectangle blur top="264px" width="497px" height="105px">
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
    </Container>
  );
};

export default TrendingItem;
