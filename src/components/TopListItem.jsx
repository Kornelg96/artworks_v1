import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 305px;
  height: 364.54px;
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  @media (max-width: 1300px) {
    min-width: calc((100% / 4) - (60px / 4));
    margin-right: 20px;
    &:nth-child(4n) {
      margin-right: 10px;
    }
  }
  @media (max-width: 1000px) {
    min-width: calc((100% / 3) - (40px / 3));
    &:nth-child(4n) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: 10px;
    }
  }
  @media (max-width: 650px) {
    min-width: calc((100% / 2) - (20px / 2));
    &:nth-child(3n) {
      margin-right: 20px;
    }
    &:nth-child(2n) {
      margin-right: 0px;
    }
    overflow: hidden;
  }
  @media (max-width: 550px) {
    height: 300px;
  }
  @media (max-width: 650px) {
    min-width: calc((100% / 2) - (20px / 2));
    &:nth-child(3n) {
      margin-right: 20px;
    }
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
`;
const Button = styled.button`
  border-radius: 12px;
  padding: 16px 86px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 19.2px;
  line-height: 23px;
  height: 55px;
  width: 276px;
  background: ${(props) =>
    props.followed === "Follow"
      ? "linear-gradient(97.86deg, #89C6FF -38.38%, #3633D0 71.88%)"
      : "inherit"};
  border: ${(props) =>
    props.followed === "Follow" ? "none" : "1px solid white"};
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 1300px) {
    width: 85%;
  }
  @media (max-width: 550px) {
    padding: 16px 16px;
  }
`;
const Information = styled.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 73.52px;
`;
const Author = styled.p`
  font-size: 20.0548px;
  line-height: 24px;
  margin-bottom: 14px;
`;
const Followers = styled.p`
  background: linear-gradient(97.86deg, #ff8d8d -38.38%, #f7fc0e 71.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 20.0548px;
  line-height: 24px;
`;
const ImageContainer = styled.div`
  @media (max-width: 1300px) {
    height: 164px;
  }
`;

const Image = styled.img`
  position: ${(props) => props.profile && "absolute"};
  bottom: ${(props) => props.profile && "176.52px"};
  width: ${(props) => props.profile && "56.40px"};
  height: ${(props) => props.profile && "56.40px"};
  @media (max-width: 1300px) {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: ${(props) => props.profile && "absolute"};
    bottom: ${(props) => props.profile && "176.52px"};
    width: ${(props) => props.profile && "56.40px"};
    height: ${(props) => props.profile && "56.40px"};
    object-fit: cover;
  }
`;

const Union = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  mask-image: url("/img/Unionpngx4.png");
  -webkit-mask-image: url("/img/Unionpngx4.png");
  -webkit-mask-repeat: no-repeat;
  mask-size: 305px, 164px;
  z-index: 999999;
  height: 240.6470184326172px;
  width: 305px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  @media (max-width: 1300px) {
    mask-size: cover;
    width: 100%;
    mask-position: center;
    border-radius: 20px;
  }
  @media (max-width: 550px) {
    bottom: -30px;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 16.7px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 550px) {
    bottom: 40px;
  }
`;
const FollowersSmaller = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  background: #f7fc0e;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline;
`;
const TopListItem = ({
  author,
  followers,
  buttonStatus,
  imgHero,
  imgProfile,
}) => {
  useEffect(() => {
    if (buttonStatus !== buttonType) {
      setButtonType(buttonStatus);
    }
  }, [buttonStatus]);

  const [buttonType, setButtonType] = useState(buttonStatus);
  const handleButton = () => {
    if (buttonType == "Follow") {
      setButtonType("Followed");
    } else if (buttonType == "Followed") {
      setButtonType("Follow");
    }
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={imgHero} />
      </ImageContainer>
      <Union>
        <Image src={imgProfile} profile />
        <Information>
          <Author>{author}</Author>
          <Followers>
            {followers}
            <FollowersSmaller> Artwork</FollowersSmaller>
          </Followers>
        </Information>
        <ButtonWrapper>
          <Button followed={buttonType} onClick={handleButton}>
            {buttonType}
          </Button>
        </ButtonWrapper>
      </Union>
    </Container>
  );
};

export default TopListItem;
