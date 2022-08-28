import React from 'react'
import styled from 'styled-components'
import TrendingItem from './TrendingItem'
import Rec from '../images/Rec.png'
import Rec2 from '../images/Rec2.png'
import Rec3 from '../images/Rec3.png'
import Rec4 from '../images/Rec4.png'

const Container = styled.div`
position: relative;
width: 1284px;
height: 1010px;
margin: 0 auto;
margin-top: 120px;
display: flex;
flex-direction: column;
gap:90px;
`
const Top = styled.div`
width: 1284px;
height: 92px;
`
const TopContainer= styled.div`
display: flex;
gap: 89px;
`
const Title = styled.h1`
width: 592px;
height: 76px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 58.0024px;
line-height: 76px;
letter-spacing: 0.005em;
`
const Text = styled.p`
width: 603px;
height: 81px;
font-family: 'GT Walsheim Pro';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 27px;
text-align: justify;
opacity: 0.5;
margin-top: 11px;
`
const Bottom = styled.div`
width: 1082px;
height: 828px;
margin-left: 103px;
display: flex;
flex-wrap: wrap;
gap:90px;

`
const Trending = () => {
  return (
    <Container>
        <Top>
    <TopContainer>
      <Title>Trending This Week</Title>
      <Text>Various kinds of Artwork categories that are trending this week. The trend will be reset every week. Don’t miss out on the best artworks every week</Text>
    </TopContainer>
        </Top>
        <Bottom>
          <TrendingItem img={Rec} author="Miles Grogosters" instagram="@rominolegs" price="4.99 ETH"/>
          <TrendingItem img={Rec2} author="Reox Fancxy" instagram="@hibnastiar" price="3.27 ETH"/>
          <TrendingItem img={Rec3} author="Miles Grogosters" instagram="@senjadisini" price="4.20 ETH"/>
          <TrendingItem img={Rec4} author="Tuinz Rey" instagram="@albertov" price="2.99 ETH"/>
        </Bottom>
    </Container>
  )
}

export default Trending