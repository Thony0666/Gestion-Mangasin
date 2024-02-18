// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contenu from "./Component/Acceuil";
import Login from "./Component/Login";
import Inscription from "./Component/Inscription";
import Product from "./Component/Product";
import Apropos from "./Component/Apropos";
import GestionProduction from "./Component/BackOffice/GestionProduction";
import ComandeList from "./Component/BackOffice/ListeComande";
import DetailProduit from "./Component/DetailProduit";
// import PreBuildDashBoard from "./Component/teste";
import MyCarousel from "./Component/teste";
import NewCat from "./Component/BackOffice/NewCat";
import GestionPub from "./Component/BackOffice/GestionPub";

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Vos routes existantes */}
          <Route path="/" element={<Contenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/produit" element={<Product />} />
          <Route path="/produit/:id" element={<DetailProduit />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/publier" element={<GestionProduction />} />
          <Route path="/gestion/publication" element={<GestionPub />} />
          <Route path="/list-commande" element={<ComandeList />} />
          <Route path="/test" element={<NewCat />} />
          {/* Autres routes */}
        </Routes>
      </Router>
  );
};

export default App;
