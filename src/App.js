import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PgPrincipal from "./pages/Pgprincipal";
import Contato from "./pages/Contato";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Cardápio</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PgPrincipal />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
