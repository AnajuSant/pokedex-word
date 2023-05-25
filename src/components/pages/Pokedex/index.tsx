import style from "./index.module.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../context/PokedexContext";
import { Modal } from "../../modal";
import tinycolor from "tinycolor2";

const tipoDoEstilo: { [index: string]: string } = {
  grass: `${style.abilite} ${style.glass_bug}`,
  bug: `${style.abilite} ${style.glass_bug}`,
  poison: `${style.abilite} ${style.poison_psychic_fairy_ghost}`,
  psychic: `${style.abilite} ${style.poison_psychic_fairy_ghost}`,
  fairy: `${style.abilite} ${style.poison_psychic_fairy_ghost}`,
  ghost: `${style.abilite} ${style.poison_psychic_fairy_ghost}`,
  stile: `${style.abilite} ${style.stile_dark_rock}`,
  dark: `${style.abilite} ${style.stile_dark_rock}`,
  rock: `${style.abilite} ${style.stile_dark_rock}`,
  ice: `${style.abilite} ${style.ice_water}`,
  water: `${style.abilite} ${style.ice_water}`,
  fire: `${style.abilite} ${style.fire_fighting_dragon}`,
  fighthing: `${style.abilite} ${style.fire_fighting_dragon}`,
  dragon: `${style.abilite} ${style.fire_fighting_dragon}`,
  normal: `${style.abilite} ${style.normal_gosth}`,
  gosth: `${style.abilite} ${style.normal_gosth}`,
  groud: `${style.abilite} ${style.groud}`,
  eletric: `${style.abilite} ${style.eletric}`,
};

export const Pokedex = () => {
  const { pokemons, setPokemon, count } = useContext(PokemonContext);
  const [openModel, setOpenModal] = useState(false);
  const [modalPokemon, setModalPokemon] = useState<any>(null);

  return (
    <section className={style.section_container}>
      <main>
        <Modal
          isOpen={modalPokemon !== null}
          pokemon={modalPokemon}
          setModalPokemon={setModalPokemon}
        ></Modal>
        <article className={style.search_container}>
          <p className={style.title}>
            {count}
            <span> Pokemons</span> for you to choose your favorite
          </p>
          <input
            className={style.input}
            type="text"
            placeholder="Encuentra tu pokémon..."
          />
        </article>

        <article className={style.centralizer_cards}>
          {pokemons.map((pokemon) => (
            <div
              className={style.card_container}
              onClick={() => setModalPokemon(pokemon)}
            >
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
                  {pokemon.tipos.map((tipo) => (
                    <div className={tipoDoEstilo[tipo] || style.none}>
                      {tipo}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  borderRadius: "0px 8px 8px 0px",
                  background: `linear-gradient(to bottom, ${tinycolor(
                    pokemon.cor
                  )
                    .desaturate(50)
                    .darken(30)
                    .lighten(10)
                    .toString()} 8%, 
                        ${tinycolor(pokemon.cor)
                          .darken(15)
                          .desaturate(40)
                          .lighten(20)
                          .toString()} 100%)`,
                }}
              >
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

      <div className={style.alinhaBotao}>
        <button
          className={style.CarregarMais}
          onClick={() => console.log("clicou")}
        >
          <p>Carregar mais</p>
        </button>
      </div>
    </section>
  );
};
