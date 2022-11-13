import React from "react";
import styled from "styled-components";
import { Announcements } from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 200px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContianer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  text-wrap: 200px;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Contine Shopping</TopButton>
          <TopTexts>
            <TopText>Cart (2)</TopText>
            <TopText>Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://i.imgur.com/t2NMPRq.png" />
                <Details>
                  <ProductName>
                    <b>Product :</b>Pink Slayer
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>1233456567
                  </ProductId>
                  <ProductColor color="pink" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContianer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContianer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            {/* Duplicate */}
            <Product>
              <ProductDetails>
                <Image src="https://i.imgur.com/t2NMPRq.png" />
                <Details>
                  <ProductName>
                    <b>Product :</b>Pink Slayer
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>1233456567
                  </ProductId>
                  <ProductColor color="pink" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContianer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContianer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            {/* Duplicate edn */}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ 60</SummeryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 3.99</SummeryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>- $ 3.99</SummeryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ 60.99</SummeryItemPrice>
            </SummaryItem>
            <Button>CheckOut Now!</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
