import { useContext } from "react";
import { PokemonContext, PokemonContextProps } from "../context/PokedexContext";

const usePokemonContext = () => {
  const pokemonContext = useContext<PokemonContextProps>(PokemonContext);

  return pokemonContext;
};

export default usePokemonContext;
