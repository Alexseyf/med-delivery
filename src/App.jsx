import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Inicio, Comprar, Receita  } from "./components/pages";
import Sobre from "./components/pages/Sobre";
import Fidelidade from "./components/pages/Fidelidade";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/receita" element={<Receita />} />
          <Route path="/fidelidade" element={<Fidelidade />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
