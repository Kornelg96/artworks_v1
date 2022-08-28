import { React, useState, useEffect } from "react";
import styled from "styled-components";
import TopListItem from "./TopListItem";

const Container = styled.div`
  overflow: hidden;
`;

const WrapperList = styled.div`
  width: 1280px;
  height: 364.54px;
  display: flex;
  gap: 20px;
  transform: translateX(${(props) => props.slide * -1300}px);
  transition: all 1.5s ease;
`;
const Rectangles = styled.div`
  display: flex;
  gap: 4.65px;
  margin-top: 55px;
`;
const Rectangle = styled.div`
  width: ${(props) => (props.active ? "40.94px" : "20.7px")};
  height: 10px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(97.86deg, #89C6FF -38.38%, #3633D0 71.88%)"
      : "rgba(255, 255, 255, 0.2)"};
  border-radius: 20px;
  cursor: pointer;
  z-index: 9;
`;
const WrapperRectangles = styled.div`
  display: flex;
  justify-content: center;
`;

const Slider = ({ sliderItems }) => {
  const [slide, setSlide] = useState(0);
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 3);
    } else {
      setSlide(slide < 3 ? slide + 1 : 0);
    }
  };

  const runSlider = () => {
    slideInterval = setInterval(handleClick, intervalTime);
  };

  const moveDot = (index) => {
    setSlide(index);
  };

  useEffect(() => {
    autoScroll && runSlider();
    return () => clearInterval(slideInterval);
  }, [slide]);

  return (
    <>
      <Container>
        <WrapperList slide={slide}>
          {sliderItems.map((item, index) => (
            <TopListItem
              author={item.author}
              followers={item.followers}
              buttonStatus={item.buttonStatus}
              imgHero={item.imgHero}
              imgProfile={item.imgProfile}
              index={index}
            />
          ))}
        </WrapperList>
        <WrapperRectangles>
          <Rectangles>
            {Array.from({ length: 4 }).map((rectangle, index) =>
              slide === index ? (
                <Rectangle active onClick={() => moveDot(index)} />
              ) : (
                <Rectangle onClick={() => moveDot(index)} />
              )
            )}
          </Rectangles>
        </WrapperRectangles>
      </Container>
    </>
  );
};

export default Slider;
