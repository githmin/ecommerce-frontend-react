import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  max-width: 40px;
  margin-right: 2px;
`;
const PaymentContainer = styled.div``;

const IconSpacer = styled.div`
  width: 15px;
`;

const CreditContainer = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: black;
  color: white;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Footer = () => {
  return (
    <div>
      <Container>
        <Left>
          <Logo>.Brand</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
          <SocialContainer>
            <SocialIcon color="3b5998">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="bc2a8d">
              <InstagramIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Featured</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <LocationOnIcon />
            <IconSpacer />
            No.256, PCI-e Lane, Motherboard, 10400
          </ContactItem>
          <ContactItem>
            <PhoneInTalkIcon /> <IconSpacer />+ 94 766 281 881
          </ContactItem>
          <ContactItem>
            <MarkunreadIcon /> <IconSpacer />
            githmin21@gmail.com
          </ContactItem>
          <PaymentContainer>
            <Payment src="https://cdn-icons-png.flaticon.com/512/39/39196.png" />
            <Payment src="https://cdn-icons-png.flaticon.com/512/8721/8721123.png" />
            <Payment src="https://cdn-icons-png.flaticon.com/512/39/39223.png" />
            <Payment src="https://cdn-icons-png.flaticon.com/512/39/39022.png" />
          </PaymentContainer>
        </Right>
      </Container>
      <CreditContainer>
        Made with 🤍 by &nbsp;
        <a href="https://github.com/githmin"> Githmin Jayawardhana</a>
      </CreditContainer>
    </div>
  );
};

export default Footer;
