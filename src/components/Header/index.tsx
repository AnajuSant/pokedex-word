import logo from "../../assets/logoPokedex.svg";
import style from "./index.module.css";
import burguerbtn from "../../assets/BurgenBtn.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className={style.header_container}>
        <img src={logo}></img>
        <div>
          <ul className={style.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokedex">Pokédex</Link>
            </li>
            <li>
              <a>Legendaries</a>
            </li>
            <li>
              <Link to="https://pokeapi.co/">Documentation</Link>
            </li>
          </ul>
        </div>

        <div className={style.mobile}>
          <img src={burguerbtn}></img>
        </div>
      </nav>
    </>
  );
};

export default Header;
