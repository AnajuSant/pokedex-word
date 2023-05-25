import close from "../../assets/closeIcon.svg";
import style from "./index.module.css";
import tinycolor from "tinycolor2";

export const Modal = ({ isOpen, setModalPokemon, pokemon }: any) => {
  if (isOpen) {
    return (
      <div className={style.Modal_Container}>
        <div
          className={style.Modal_Conteudo}
          style={{
            background: `linear-gradient(to bottom, ${tinycolor(pokemon.cor)
              .desaturate(18)
              .darken(48)
              .lighten(20)
              .toString()} 10%, 
                    ${tinycolor(pokemon.cor)
                      .darken(15)
                      .desaturate(30)
                      .lighten(15)
                      .toString()} 100%)`,
          }}
        >
          <div
            className={style.fotoPokemon}
            style={{
              background: `linear-gradient(to bottom, ${tinycolor(pokemon.cor)
                .desaturate(20)
                .darken(10)
                .lighten(15)
                .toString()} 0%, 
                    ${tinycolor(pokemon.cor)
                      .darken(10)
                      .desaturate(5)
                      .toString()} 100%)`,
            }}
          >
            <img src={pokemon.imagem} />
          </div>
          <div>
            <div className={style.dados_pokemon}>
              <p className={style.nome_picacku}>{pokemon.nome}</p>

              <div className={style.generiton}>
                <p>Generation 1</p>
                <div className={style.number}>
                  <p>{pokemon.experiencia}</p>
                </div>
              </div>
            </div>

            <div className={style.centraliza_cards_pokemon}>
              <div className={style.abilites_card_container}>
                <p>Abilites</p>
                <div className={style.abilites}>
                  {pokemon.habilidades.map((habilidade: any) => {
                    return <p>{habilidade.ability.name}</p>;
                  })}
                </div>
              </div>

              <div className={style.experiencie}>
                <div className={style.experiencie_itens}>
                  <div>
                    <p>Healthy Points</p>
                    <strong>{pokemon.hp}</strong>
                    <div className={style.energy2}></div>
                  </div>

                  <div>
                    <p>Experience</p>
                    <strong>{pokemon.experiencia}</strong>
                    <div className={style.energy}></div>
                  </div>
                </div>
              </div>

              <div className={style.centraliza_defesa_atack}>
                <div className={style.defese_atack}>
                  <div className={style.aling_defese_atack}>
                    <div className={style.circle}>
                      <p>{pokemon.defesa}</p>
                    </div>
                    <p className={style.defense}>Defense</p>
                  </div>
                </div>

                <div className={style.defese_atack}>
                  <div className={style.aling_defese_atack}>
                    <div className={style.circle}>
                      <p>{pokemon.ataque}</p>
                    </div>
                    <p className={style.defense}>Attack</p>
                  </div>
                </div>
                <div className={style.defese_atack}>
                  <div className={style.aling_defese_atack}>
                    <div className={style.circle}>
                      <p>{pokemon.ataqueSpecial}</p>
                    </div>
                    <p className={style.defense}>Sp Attack</p>
                  </div>
                </div>
                <div className={style.defese_atack}>
                  <div className={style.aling_defese_atack}>
                    <div className={style.circle}>
                      <p>{pokemon.defesaSpecial}</p>
                    </div>
                    <p className={style.defense}>Sp Defense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.Close_Modal}>
          <img onClick={() => setModalPokemon(null)} src={close}></img>
        </div>
      </div>
    );
  }

  return null;
};
