import style from "./index.module.css";
import banner from "../../assets/BannerComplete.svg";

export const Home = () => {
  return (
    <section className={style.section_container}>
      <main className={style.main}>
        <article className={style.content}>
          <p className={style.title}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </p>
          <p className={style.text}>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>

          <a href="#">
            <button className={style.button}>
              <span>See Pokemons</span>
            </button>
          </a>
        </article>
        <article>
          <img className={style.img} src={banner}></img>
        </article>
      </main>
    </section>
  );
};

export default Home;
