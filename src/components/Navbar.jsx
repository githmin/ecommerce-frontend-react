import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  /* height: 60px; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 720px) {
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  display: none;  //May Need To Enable This
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: none;
  border-bottom: 1px solid #010407;
  padding: 5px 10px;
  outline: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: px;

  @media only screen and (max-width: 720px) {
    border: none;
  }
`;

const Input = styled.input`
  border: none;
  @media only screen and (max-width: 720px) {
    width: 45px;
  }
`;

const Logo = styled.h1`
  font-weight: bold;

  @media only screen and (max-width: 720px) {
    font-size: 24px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media only screen and (max-width: 720px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 720px) {
    justify-content: center;
    flex: 2;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "grey", fontsize: 16 }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>.BrandJ</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={16} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
