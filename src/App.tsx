import { Home } from "./components/pages/Home/home";
import { Header } from "./components/Header/index";
import { Pokedex } from "./components/pages/Pokedex/index";
import { PokemonContextProvider } from "./context/PokedexContext";

function App() {
  return (
    <>
      <Header />
      <PokemonContextProvider>
        <Pokedex />
      </PokemonContextProvider>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
