import { Home } from "./components/pages/Home/home";
import { Header } from "./components/Header/index";
import { Pokedex } from "./components/pages/Pokedex/index";
import { PokemonContextProvider } from "./context/PokedexContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lengendaries from "./components/Lengendaries/index";
import NotFound from "./components/pages/NotFound";

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

          <Route
            path="/lengendaries"
            element={
              <>
                <Header />
                <Lengendaries />
              </>
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
