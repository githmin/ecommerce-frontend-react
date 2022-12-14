import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 30vh;
  background-color: #fbefef;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media only screen and (max-width: 720px) {
    font-size: 50px;
  }
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media only screen and (max-width: 720px) {
    text-align: center;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media only screen and (max-width: 720px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get exciting news and discounts right into your inbox</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon></SendIcon>
        </Button>
      </InputContainer>
    </Container>
  );
};
