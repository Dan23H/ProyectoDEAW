import { Link } from "react-router-dom";
import { Navbar } from "../Componentes";

export const TiendaU = () => {
  return (
    <>
      <Navbar
        searchBar={true}
        current="tienda"
        item1="Subir Imagen"
        item2="Mensajeria"
        item3="Perfil"
        item4="Tienda"
      />
      <Link to="/tienda/comprar">(Cuando se compra...)</Link>
    </>
  );
};
