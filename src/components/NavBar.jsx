import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container=styled.div`
width: 1281px;
margin: 0 auto;
@media (max-width:1300px) {
  width: 100vw;
   display: flex;
   justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 1281px;
  height: 39px;
  position: fixed;
  top: 26px;
  display: flex;
  gap: 289px;
  z-index: 999; 
  @media (max-width:1300px) {
    gap: 200px;
    width: auto;
  }
  @media (max-width:1000px) {
    display: none;
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;
const MenuItem = styled.li`
  margin: 9px 0;
  font-family: "GT Walsheim Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;
const Logo = styled.h1`
  width: 113px;
  height: 24px;
  font-family: "GT Walsheim Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 27.05px;
  line-height: 31px;
  letter-spacing: -0.025em;
  margin: 7px 0 8px 0;
`;
const ButtonContainer = styled.div`
position: absolute;
right: 0;
@media (max-width:1300px) {
    position: relative;
  }
`;


const NavBar = () => {
  return (
    <Container>
    <Wrapper>
      <MenuItems>
        <MenuItem>Marketplace</MenuItem>
        <MenuItem>Creators</MenuItem>
        <MenuItem>Community</MenuItem>
      </MenuItems>
      <Logo>NFTKING</Logo>
      <ButtonContainer>
      <Button width="168px" height="39px">Conect Wallet</Button>
      </ButtonContainer>
    </Wrapper>
      </Container>
  );
};

export default NavBar;
