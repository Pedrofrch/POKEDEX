import React from "react";
import PokemonDetails from "./PokemonDetails";
import {
  Containercards,
  Card,
  Button,
  BlueButton,
  NomePokemon,
  Flexitems,
} from "./Styled";

import { useNavigate } from "react-router-dom";
import { goToPokeStatus } from "../Routes/Coordinator";

const Cards = (props) => {
  const navigate = useNavigate();
  const pokemonList =
    props.pokemon &&
    props.pokemon.results.map((pokemon) => {
      return (
        <Card key={pokemon.url}>
          <Flexitems>
            <PokemonDetails pokemonUrl={pokemon.url} />
          </Flexitems>
          <NomePokemon>{pokemon.name}</NomePokemon>
          <Flexitems>
            <Button>Adicionar</Button>
            <BlueButton
              onClick={() => {
                goToPokeStatus(navigate);
              }}
            >
              Ver Detalhes
            </BlueButton>
          </Flexitems>
        </Card>
      );
    });
  return <Containercards>{pokemonList}</Containercards>;
};
export default Cards;
