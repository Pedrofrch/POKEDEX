import React from "react";
import pokepattern from "../imgs/pokeball.svg";

import { Navbar, Detalhe, List, LiItems, Navtext } from "./Styled";

const Nav = () => {
  return (
    <>
      <Detalhe src={pokepattern} />
      <Navbar>
        <List>
          <LiItems>
            <Navtext href="/">Pokemons</Navtext>
          </LiItems>
          <LiItems>
            <Navtext href="#">Minha Pokedex</Navtext>
          </LiItems>
        </List>
      </Navbar>
    </>
  );
};

export default Nav;
