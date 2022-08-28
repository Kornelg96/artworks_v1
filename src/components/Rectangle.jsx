import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  top: ${(props) => props.top && props.top};
  bottom: ${(props) => props.bottom && props.bottom};
  background: rgba(255, 255, 255, 0.1);
  background-color: #717171cc;
  position: ${(props) => (props.blur ? "absolute" : "relative")};
  border-radius: 7.42311px;
  display: flex;
  justify-content: ${(props) => (props.blur ? "space-between" : "center")};
  @supports (
    (-webkit-backdrop-filter: blur(29.6924px)) or
      (backdrop-filter: blur(29.6924px))
  ) {
    backdrop-filter: blur(29.6924px);
    backdrop-filter: ${(props) => props.blur && "blur(29.6924px)"};
    -webkit-backdrop-filter: blur(29.6924px);
    -webkit-backdrop-filter: ${(props) => props.blur && "blur(29.6924px)"};
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 7.42311px;
    border: 1.5px solid transparent;
    background: linear-gradient(
        93.17deg,
        rgba(6, 19, 45, 0) 0.92%,
        #ffffff 100%
      ),
      linear-gradient(93.17deg, #ffffff 0.92%, #06132d 100%) border-box;
    -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  z-index: 1;
`;

const Rectangle = ({ children, width, height, top, bottom, blur }) => {
  return (
    <Container
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      blur={blur}
    >
      {children}
    </Container>
  );
};

export default Rectangle;