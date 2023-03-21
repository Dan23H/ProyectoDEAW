import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, InterfazUsuario } from "./Pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/interfaz-usuario" element={<InterfazUsuario />} />
    </Routes>
  );
};

export default App;
