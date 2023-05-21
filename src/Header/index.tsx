import logo from "../assets/logoPokedex.svg";
import style from "./index.module.css";
import burguerbtn from "../assets/BurgenBtn.svg";
import { useState } from "react";

export const Header = () => {
  return (
    <>
      <nav className={style.header_container}>
        <img src={logo}></img>
        <div>
          <ul className={style.navbar}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pokédex</a>
            </li>
            <li>
              <a>Legendaries</a>
            </li>
            <li>
              <a>Documentation</a>
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
