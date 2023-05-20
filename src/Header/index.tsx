import logo from "../assets/logoPokedex.svg";
import style from "./index.module.css";

export const Header = () => {
  return (
    <header className={style.header_container}>
      <img src={logo}></img>

      <div className={style.text_container}>Pokedex</div>
      <div className={style.text_container}>Legenderies</div>
      <div className={style.text_container}>Documentation</div>
    </header>
  );
};
