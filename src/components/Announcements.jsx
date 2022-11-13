import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #1eb2d3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcements = () => {
  return <Container>This site is a demo site and do not sell any products!</Container>;
};
