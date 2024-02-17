
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Inscription from "./Component/Inscription";
import GestionProduction from "./Component/BackOffice/GestionProduction";
import ComandeList from "./Component/BackOffice/ListeComande";
import NewCat from "./Component/BackOffice/NewCat";
import GestionPub from "./Component/BackOffice/GestionPub";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/publier" element={<GestionProduction />} />
        <Route path="/gestion/publication" element={<GestionPub />} />
        <Route path="/list-commande" element={<ComandeList />} />
        <Route path="/test" element={<NewCat />} />
      </Routes>
    </Router>
  );
};

export default App;
