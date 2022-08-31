import { React, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import menu from "../images/menu-left.png";
import cross from "../images/cross.png";

const Container = styled.div`
  width: 1281px;
  margin: 0 auto;
  @media (max-width: 1300px) {
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
  z-index: 998;
  @media (max-width: 1300px) {
    gap: 200px;
    width: auto;
  }
  @media (max-width: 1000px) {
    width: 100%;
    gap: 0;
    justify-content: space-between;
    padding: 0 0 0 20px;
    align-items: center;
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin: 9px 0;
  font-family: "GT Walsheim Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  list-style: none;
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
  @media (max-width: 1000px) {
    margin: 0;
    width: auto;
    height: auto;
    display: none;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  @media (max-width: 1300px) {
    position: relative;
  }
`;

const MobileMenu = styled.img`
  width: 50px;
  cursor: poiner;
`;
const LogoMobile = styled(Logo)`
  display: inline;
  text-align: center;
  transform: translateX(49px);

  @media (max-width: 550px) {
    transform: translateX(0);
    position: absolute;
    right: 20px;
  }
`;
const MobileItems = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 80vw;
  height: 100vh;
  background: #000000f5;
  z-index: 999;
  padding: 100px 50px;
`;
const Cross = styled.img`
  width: 50px;
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
`;

const NavBar = ({ isMobileNav }) => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <Container>
      {open && (
        <MobileItems>
          <Cross src={cross} onClick={handleMenu} />
          <MenuItem>Marketplace</MenuItem>
          <MenuItem>Creators</MenuItem>
          <MenuItem>Community</MenuItem>
        </MobileItems>
      )}
      <Wrapper>
        {isMobileNav && (
          <>
            <MobileMenu src={menu} onClick={handleMenu} />
            <LogoMobile>NTFKING</LogoMobile>
          </>
        )}
        <MenuItems>
          <MenuItem>Marketplace</MenuItem>
          <MenuItem>Creators</MenuItem>
          <MenuItem>Community</MenuItem>
        </MenuItems>
        <Logo>NFTKING</Logo>
        <ButtonContainer>
          <Button mobile width="168px" height="39px">
            Conect Wallet
          </Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
