import { Home } from "./components/pages/Home/home";
import { Header } from "./components/Header/index";
import { Pokedex } from "./components/pages/Pokedex/index";
import { PokemonContextProvider } from "./context/PokedexContext";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <PokemonContextProvider>
        <Pokedex />
      </PokemonContextProvider>

      {/* <NotFound /> */}

      {/* <Home></Home> */}
    </>
  );
}

export default App;
