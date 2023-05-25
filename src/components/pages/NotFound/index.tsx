import team from "../../../assets/teamRocket.svg";

import style from "./index.module.css";

export default function NotFound() {
  return (
    <section className={style.section_container}>
      <p className={style.error}>404</p>
      <div className={style.team}>
        <img src={team}></img>
        <div className={style.alig_container}>
          <div>
            <p className={style.paragrafo}>
              <span>The rocket team </span>has won this time.
            </p>
          </div>
          <div>
            <button className={style.button}>
              <span>Return</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
