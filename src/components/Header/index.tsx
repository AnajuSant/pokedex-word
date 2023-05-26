import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoPokedex.svg";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <Navbar expand="md" className={style.header_container}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={style.nav_bar}>
            <img src={logo} alt="" />
            <Nav.Link className="text-dark" as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link className="text-dark" as={Link} to="/pokedex">
              Pokedex
            </Nav.Link>

            <Nav.Link className="text-dark" as={Link} to="/lengendaries">
              Legendaries
            </Nav.Link>
            <Nav.Link className="text-dark" as={Link} to="https://pokeapi.co/">
              Documentation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
