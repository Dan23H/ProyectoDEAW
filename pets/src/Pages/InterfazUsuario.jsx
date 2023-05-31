import { useState } from "react";
import { Album, Navbar, ModalComments } from "../Componentes/";
import "../css/album.css";

export const InterfazUsuario = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const onCommentsClose = (e) => {
    setCommentsVisible(false);
  };
  const onCommentsOpen = (datos) => {
    setCommentsVisible(true);
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://vetbackend.onrender.com/imagenes");
      const data = await response.json();
      const formattedImages = data.imagenes.map((imagen) => {
        return {
          id: imagen.id,
          imagen: {
            contentType: imagen.imagen.contentType,
            data: imagen.imagen.data,
          }
        };
      });
      setImages(formattedImages);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar
        searchBar={true}
        current="interfaz-usuario"
        item1="Subir Imagen"
        item2="Mensajeria"
        item3="Perfil"
        item4="Tienda"
      />
      <div className="banner"></div>
      <ModalComments visible={commentsVisible} onClose={onCommentsClose} />
      <div>
        <Album posts={images} onComments={onCommentsOpen} />
      </div>
    </>
  );
};
