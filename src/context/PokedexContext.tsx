import { createContext, useEffect, useState } from "react";
import { get, listPokemon } from "../api/pokemonApi";

type PokemonCardProps = {
  nome: string;
  ataque: number;
  defesa: number;
  experiencia: number;
  tipos: string[];
  imagem: string;
};

export type PokemonContextProps = {
  pokemons: PokemonCardProps[];
  setPokemon: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const DEFAULT_VALUE = {
  pokemons: [],
  setPokemon: () => [{}],
  count: 0,
  setCount: () => [0],
} as PokemonContextProps;

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

export const PokemonContext = createContext<PokemonContextProps>(DEFAULT_VALUE);

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemons, setPokemon] = useState(DEFAULT_VALUE.pokemons);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const pokemonData = async () => {
      const pokemonLista = await listPokemon();
      setCount(pokemonLista.count);

      const pokemonPromise = pokemonLista.results.map(async (pokemon: any) => {
        const pokemonInformacao = await get(pokemon.url);

        const nome = pokemonInformacao.name;
        const ataque = pokemonInformacao.stats[1].base_stat;
        const defesa = pokemonInformacao.stats[2].base_stat;
        const experiencia = pokemonInformacao.base_experience;
        const tipos = pokemonInformacao.types.map(
          (type: any) => type.type.name
        );
        const imagem =
          pokemonInformacao.sprites.other["dream_world"].front_default;

        return { nome, ataque, defesa, experiencia, tipos, imagem };
      });

      const pokemonInformacao = await Promise.all(pokemonPromise);
      setPokemon(pokemonInformacao);
    };

    pokemonData();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemon, count, setCount }}>
      {children}
    </PokemonContext.Provider>
  );
};
