import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 4249px;
  left: -1391px;
  top: -673px;
`;
const Circle = styled.div`
  position: absolute;
  left: ${(props) => props.left && props.left};
  top: ${(props) => props.top && props.top};
  background: radial-gradient(
    34.98% 34.98% at 50% 50%,
    #725bda 0%,
    rgba(6, 19, 45, 0) 100%
  );
  opacity: ${(props) => (props.opacity ? props.opacity : "0.5")};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  overflow: hidden;
`;

const Circular = ({ left, top, width, height, opacity }) => {
  return (
    <Container>
      <Circle
        left={left}
        top={top}
        width={width}
        height={height}
        opacity={opacity}
      />
    </Container>
  );
};

export default Circular;
