import { Home } from "./components/pages/Home/home";
import { Header } from "./components/Header/index";
import { Pokedex } from "./components/pages/Pokedex/index";
import { PokemonContextProvider } from "./context/PokedexContext";
import NotFound from "./components/pages/NotFound";
import Lengendaries from "./components/Lengendaries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>

          <Route
            path="/pokedex"
            element={
              <>
                <Header />
                <PokemonContextProvider>
                  <Pokedex />
                </PokemonContextProvider>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>

    // <>
    //   <Header />
    //   {/* <PokemonContextProvider>
    //     <Pokedex />
    //   </PokemonContextProvider> */}
    //   <Lengendaries />
    //   {/* <NotFound /> */}

    //   {/* <Home></Home> */}
    // </>
  );
}

export default App;
