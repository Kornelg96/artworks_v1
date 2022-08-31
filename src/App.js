
import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Circular from './components/Circular';
import Main from './components/Main';
import Trending from './components/Trending';
import TopList from './components/TopList';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';


const Container = styled.div`
width: 100vw;
background-color: black;
overflow: hidden;
z-index: 9;
`
let isMobile = window.innerWidth < 1301 ? true : false;
let isMobileNav = window.innerWidth < 1001 ? true : false;
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 1301 ? true : false;
    isMobileNav = window.innerWidth < 1001 ? true : false;
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <>
    <Container>
      <Circular left="1993px" top="0" width="1468px" height="1468px"/>
      <Circular left="250px" top="314px" width="2370px" height="2370px"/>
      <Circular left="692px" top="909px" width="2866px" height="2358px" opacity="0.3"/>
      <Circular left="-15px" top="2352px" width="2866px" height="2866px" opacity="0.3"/>
      <Circular left="1383px" top="3510px" width="2866px" height="2866px" opacity="0.3"/>
      <Circular left="0" top="3832px" width="2866px" height="2866px" opacity="0.4"/>
      <Circular left="1187px" top="1844px" width="2866px" height="2358px" opacity="0.5"/>
      <NavBar isMobileNav={isMobileNav}/>
      <Main/>
      <Trending/>
      <TopList/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
