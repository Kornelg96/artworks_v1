import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Rectangle from "./Rectangle";

const Container = styled.div`
  width: 1279px;
  height: 500px;
  margin: 0 auto;
  margin-top: 120px;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.005em;
`;
const Top = styled.div``;
const Bottom = styled.div`
  margin-top: 81.21px;
`;
const Copyright = styled.p`
  font-family: "GT Walsheim Pro";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;
const Newsletter = styled.div`
  width: 685px;
  height: 198.79px;
  margin-top: 96px;
`;
const NewsletterTop = styled.div`
  width: 590px;
  height: 83.79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 60px;
`;
const NewsletterTitle = styled.h1`
  font-weight: 600;
  font-size: 40.4352px;
  line-height: 52px;
`;
const NewsletterText = styled.p`
  font-weight: 400;
  font-size: 13.7063px;
  line-height: 18px;
`;
const NewsletterBottom = styled.div`
  width: 685px;
  height: 55px;
  display: flex;
  gap: 19px;
`;
const Input = styled.input`
  width: 480px;
  height: 23px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  border: none;
  padding: 16px 24px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.5);
`;
const Footer = () => {
  return (
    <Container>
      <Top>
        <Rectangle width="1279px" height="390.79px" top="0">
          <Newsletter>
            <NewsletterTop>
              <NewsletterTitle>Never miss a drop!</NewsletterTitle>
              <NewsletterText>
                Subscribe to super-exclusive drop list and be the first to know
                about upcoming drops
              </NewsletterText>
            </NewsletterTop>
            <NewsletterBottom>
              <Input type="text" placeholder="Enter your email address" />
              <Button width="138px" height="55px" radius="50px">
                Subscripe
              </Button>
            </NewsletterBottom>
          </Newsletter>
        </Rectangle>
      </Top>
      <Bottom>
        <Copyright>© 2018 - 2022 NFTKING, Inc</Copyright>
      </Bottom>
    </Container>
  );
};

export default Footer;
