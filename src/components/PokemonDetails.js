import React from "react";
import { Datapoke } from "../hooks/Datapoke";
import Loading from "../imgs/loadingpokeball.png";

const PokemonDetails = (props) => {
  const [pokemons, isLoading] = Datapoke(`${props.pokemonUrl}`);

  return (
    <>
      {
        <img
          src={isLoading ? Loading : pokemons && pokemons.sprites.front_default}
          alt={""}
        />
      }
    </>
  );
};
export default PokemonDetails;
