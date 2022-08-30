import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background: ${(props) =>
    props.secondary == "true"
      ? "inherit"
      : "linear-gradient(97.86deg, #89c6ff -38.38%, #3633d0 71.88%)"};
  border-radius: ${(props) => (props.radius ? props.radius : "30px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border: ${(props) =>
    props.secondary == "true" ? "0px solid transparent" : "none"};
  border: 0px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 19.2px;
  line-height: 23px;
  gap: 10px;
  color: #ffffff;
  z-index: 99;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 3px;
    background: linear-gradient(97.86deg, #89c6ff -38.38%, #3633d0 71.88%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Button = ({ children, width, height, secondary, onClick, border }) => {
  return (
    <>
      <MyButton
        width={width}
        height={height}
        secondary={secondary}
        onClick={onClick}
      >
        {children}
      </MyButton>
    </>
  );
};

export default Button;
