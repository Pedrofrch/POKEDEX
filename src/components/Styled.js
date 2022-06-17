import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const redcolor = "#FF7B7B";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #FEFEFE;
  }
`;

//DETALHE POKEBOLA
export const Detalhe = styled.img`
  position: absolute;
  max-width: 100%;
  right: 0;
  z-index: -1000;
`;

//CONTAINER
export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  padding-left: 48px;
  padding-right: 48px;
  margin-left: auto;
  margin-right: auto;
`;

//#################### COMEÇO NAVBAR ####################
export const Navbar = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-inline-start: 0;
`;

export const LiItems = styled.li`
  padding: 32px;
`;

export const Navtext = styled.a`
  position: relative;
  color: #666666;
  letter-spacing: 1px;
  text-decoration: none;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
  font-weight: 500;
  &:hover {
    color: ${redcolor};
  }
  &:hover::after {
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    margin-top: 28.8px;
    height: 3.52px;
    width: 0%;
    background-color: ${redcolor};
    transition: all ease-in-out 200ms;
  }
`;
//#################### FINAL NAVBAR ####################

//#################### COMEÇO CARD ####################

export const Containercards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 48px;
  margin-top: 160px;
  margin-bottom: 48px;

  img {
    width: 120px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const Flexitems = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
  gap: 16px;
`;

export const NomePokemon = styled.p`
  text-align: center;
  font-weight: 500;
  margin-block-start: -1em;
  margin-block-end: 0em;
`;

export const Button = styled.button`
  background-color: ${redcolor};
  border-radius: 5px;
  color: #ffffff;
  padding: 8px 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff6c6c;
  }
`;

export const BlueButton = styled(Button)`
  color: #6590ff;
  background-color: #ffffff;
  border: 3px solid;
  border-color: #6590ff;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #6590ff;
    color: #ffffff;
  }
`;
//#################### FINAL CARD ####################

//#################### COMEÇO STATS ####################
