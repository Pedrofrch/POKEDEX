import React, { Fragment, useState } from "react";
import Cards from "../components/Cards";
import { Datapoke } from "../hooks/Datapoke.js";
import Nav from "../components/Nav";

import { GlobalStyle, Container } from "../components/Styled";

function Home() {
  const [pokemons] = Datapoke("https://pokeapi.co/api/v2/pokemon/");

  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <Container>
        <Cards pokemon={pokemons} />
      </Container>
    </Fragment>
  );
}

export default Home;
