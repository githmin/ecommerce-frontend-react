import React, { useState } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { sliderItems } from "../data";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-in-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const HandelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  setInterval(() => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  }, 6000);

  return (
    <Container>
      <Arrow direction="left" onClick={() => HandelClick("left")}>
        <KeyboardDoubleArrowLeftOutlinedIcon></KeyboardDoubleArrowLeftOutlinedIcon>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW &nbsp; <ShoppingBagOutlinedIcon/></Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => HandelClick("right")}>
        <KeyboardDoubleArrowRightOutlinedIcon></KeyboardDoubleArrowRightOutlinedIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
