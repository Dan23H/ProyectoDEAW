import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Register,
  InterfazUsuario,
  SubirImagen,
  Mensajeria,
  PerfilUsuario,
  TiendaU,
  Compras,
} from "./Pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/interfaz-usuario" element={<InterfazUsuario />} />
      <Route path="/subir-imagen" element={<SubirImagen />} />
      <Route path="/mensajeria" element={<Mensajeria />} />
      <Route path="/perfil" element={<PerfilUsuario />} />
      <Route path="/tienda" element={<TiendaU />} />
      <Route path="/tienda/comprar" element={<Compras />} />
    </Routes>
  );
};

export default App;

