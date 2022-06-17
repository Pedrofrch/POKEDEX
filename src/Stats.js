import React, { Fragment } from "react";
import {
  Navbar,
  Detalhe,
  List,
  LiItems,
  Navtext,
  GlobalStyle,
  Container,
} from "./components/Styled";

function Stats() {
  const [pokemons, isLoading, error] = Datapoke(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Detalhe src={pokepattern} />
        <Navbar>
          <List>
            <LiItems>
              <Navtext href="#">Pokemons</Navtext>
            </LiItems>
            <LiItems>
              <Navtext href="#">Minha Pokedex</Navtext>
            </LiItems>
          </List>
        </Navbar>
      </Container>
    </Fragment>
  );
}

export default Stats;
