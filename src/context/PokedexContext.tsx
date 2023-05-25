import { createContext, useEffect, useState } from "react";
import { get, listPokemon } from "../api/pokemonApi";

type PokemonCardProps = {
  nome: string;
  hp: string;
  ataque: number;
  defesa: number;
  ataqueSpecial: number;
  defesaSpecial: number;
  experiencia: number;
  tipos: string[];
  imagem: string;
  cor: string;
  habilidades: [];
};

export type PokemonContextProps = {
  pokemons: PokemonCardProps[];
  setPokemon: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

const DEFAULT_VALUE = {
  pokemons: [],
  setPokemon: () => [{}],
  count: 0,
  setCount: () => [0],
  offset: 0,
  setOffset: () => [0],
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
  const [offset, setOffset] = useState(0);

  const pokemonPromiseFunction = async (pokemonLista: any) => {
    return pokemonLista.results.map(async (pokemon: any) => {
      const pokemonInformacao = await get(pokemon.url);

      const nome = pokemonInformacao.name;
      const hp = pokemonInformacao.stats[0].base_stat;
      const ataque = pokemonInformacao.stats[1].base_stat;
      const defesa = pokemonInformacao.stats[2].base_stat;
      const ataqueSpecial = pokemonInformacao.stats[3].base_stat;
      const defesaSpecial = pokemonInformacao.stats[4].base_stat;
      const habilidades = pokemonInformacao.abilities;
      const experiencia = pokemonInformacao.base_experience;
      const tipos = pokemonInformacao.types.map((type: any) => type.type.name);
      const imagem =
        pokemonInformacao.sprites.other["dream_world"].front_default;

      const especieUrl = pokemonInformacao.species.url;

      const { color } = await get(especieUrl);

      return {
        nome,
        hp,
        ataque,
        defesa,
        experiencia,
        ataqueSpecial,
        defesaSpecial,
        habilidades,
        tipos,
        imagem,
        cor: color.name,
      };
    });
  };

  const pokemonData = async () => {
    const pokemonLista = await listPokemon(offset);
    setCount(pokemonLista.count);

    const pokemonInformacao = await Promise.all(
      await pokemonPromiseFunction(pokemonLista)
    );

    setPokemon((pokemonInformacaoAntiga) => [
      ...pokemonInformacaoAntiga,
      ...pokemonInformacao,
    ]);
  };

  useEffect(() => {
    pokemonData();
  }, [offset]);

  // pokemonData();
  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemon, count, setCount, offset, setOffset }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
