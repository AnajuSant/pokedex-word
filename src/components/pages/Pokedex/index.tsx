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
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "bug"
                            ? `${style.abilite} ${style.glass_bug}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "poison"
                            ? `${style.abilite} ${style.poison_psychic_fairy_ghost}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "psychic"
                            ? `${style.abilite} ${style.poison_psychic_fairy_ghost}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "fairy"
                            ? `${style.abilite} ${style.poison_psychic_fairy_ghost}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "ghost"
                            ? `${style.abilite} ${style.poison_psychic_fairy_ghost}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "stile"
                            ? `${style.abilite} ${style.stile_dark_rock}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "dark"
                            ? `${style.abilite} ${style.stile_dark_rock}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}
                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "rock"
                            ? `${style.abilite} ${style.stile_dark_rock}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "ice"
                            ? `${style.abilite} ${style.ice_water}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "water"
                            ? `${style.abilite} ${style.ice_water}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "fire"
                            ? `${style.abilite} ${style.fire_fighting_dragon}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "fighthing"
                            ? `${style.abilite} ${style.fire_fighting_dragon}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "dragon"
                            ? `${style.abilite} ${style.fire_fighting_dragon}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "normal"
                            ? `${style.abilite} ${style.normal_gosth}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "gosth"
                            ? `${style.abilite} ${style.normal_gosth}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "groud"
                            ? `${style.abilite} ${style.groud}`
                            : style.none
                        }
                      >
                        {tipo}
                      </div>
                    );
                  })}

                  {pokemon.tipos.map((tipo) => {
                    return (
                      <div
                        className={
                          tipo === "eletric"
                            ? `${style.abilite} ${style.eletric}`
                            : style.none
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
                  alt="foto do pokemon"
                  src={pokemon.imagem}
                  className={style.img_pokemon}
                ></img>
              </div>
            </div>
          ))}
        </article>
      </main>

      <button>Carregar mais</button>
    </section>
  );
};
