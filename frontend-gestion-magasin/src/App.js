
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Inscription from "./Component/Inscription";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
};

export default App;
