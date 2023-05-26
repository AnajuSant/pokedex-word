import style from "./index.module.css";
import img from "../../assets/pngwing 6.svg";
import logo from "../../assets/Group.svg";

export default function Lengendaries() {
  return (
    <section className={style.section_container}>
      <div className={style.title}>
        <div>Legendaries</div>
        <div className={style.line}></div>
      </div>

      <div className={style.dados_pokemon_container}>
        <div>
          <img src={img}></img>
        </div>

        <div className={style.informacao_pokemon}>
          <div className={style.nome_pokemon}>MewTwo</div>

          <div className={style.descricao}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </div>

          <div className={style.hp_experiencie}>
            <div className={style.hp}>
              Healthy Points
              <strong>1000,000</strong>
              <div className={style.powers}></div>
            </div>

            <div className={style.hp}>
              Healthy Points
              <strong>1000,000</strong>
              <div className={style.powers}></div>
            </div>
          </div>

          <div className={style.hp_experiencie}>
            <div className={style.hp}>
              Healthy Points
              <strong>1000,000</strong>
              <div className={style.powers}></div>
            </div>

            <div className={style.hp}>
              Healthy Points
              <strong>1000,000</strong>
              <div className={style.powers}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.cards_container}>
        <div>
          <div className={style.cards}></div>
          <div className={style.input_name}>
            <div>NOME</div>
            <img src={logo} />
          </div>
          <img src={img} className={style.pokemon_miniature}></img>
        </div>

        <div>
          <div className={style.cards}></div>
          <div className={style.input_name}>
            <div>NOME</div>
            <img src={logo} />
          </div>
          <img src={img} className={style.pokemon_miniature}></img>
        </div>

        <div>
          <div className={style.cards}></div>
          <div className={style.input_name}>
            <div>NOME</div>
            <img src={logo} />
          </div>
          <img src={img} className={style.pokemon_miniature}></img>
        </div>
        <div>
          <div className={style.cards}></div>
          <div className={style.input_name}>
            <div>NOME</div>
            <img src={logo} />
          </div>
          <img src={img} className={style.pokemon_miniature}></img>
        </div>
        <div>
          <div className={style.cards}></div>
          <div className={style.input_name}>
            <div>Mew</div>
            <img src={logo} />
          </div>
          <img src={img} className={style.pokemon_miniature}></img>
        </div>
      </div>
    </section>
  );
}
