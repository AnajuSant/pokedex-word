import style from "./index.module.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../context/PokedexContext";

export const Pokedex = () => {
  const { pokemons, setPokemon, count } = useContext(PokemonContext);

  // const filter = (name) => {
  //   const filterPokemons = [];

  //   if (name === "") {
  //     getPokemons();
  //   }
  //   for (const i in pokemons) {
  //     if (pokemons[i].data.name.includes(name)) {
  //       filterPokemons.push(pokemons[i]);
  //     }
  //   }

  //   setPokemons(filterPokemons);
  // };

  return (
    <section className={style.section_container}>
      <main>
        <article className={style.search_container}>
          <p className={style.title}>
            <strong>{count}</strong> Pokemons for you to choose your favorite
          </p>
          <input
            className={style.input}
            type="text"
            placeholder="Encuentra tu pokémon..."
            // onChange={(e) => filter(e.target.value)}
          />
        </article>

        <article className={style.centralizer_cards}>
          {pokemons.map((pokemon) => (
            <div className={style.card_container}>
              <div className={style.powers}>
                <p>
                  <strong>{pokemon.nome}</strong>
                </p>

                <div className={style.container_circle_container}>
                  <div className={style.container_atack}>
                    <div className={style.circle}>{pokemon.ataque}</div>
                    <p>Atack</p>
                  </div>

                  <div className={style.container_defense}>
                    <div className={style.circle}> {pokemon.defesa}</div>
                    <p>Defense</p>
                  </div>
                </div>

                <div className={style.abilites_container}>
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "grass"
                            ? `${style.abilite} ${style.glass_bug}`
                            : style.abilite
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={style.img_pokemon}>
                <img
                  alt="foto do bixo"
                  src={pokemon.imagem}
                  className={style.img_pokemon}
                ></img>
              </div>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
};
