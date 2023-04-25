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

  let postsPrueba = [
    {
      msg: "Amo a mi perrita Carla",
      img: "https://www.revistapetlovers.com/wp-content/uploads/2020/10/Posiciones_perros_dormir_-800x500.jpg",
    },
    {
      msg: "Mi gato es hermoso",
      img: "https://www.barakaldotiendaveterinaria.es/blog/wp-content/uploads/2019/01/siames.jpg",
    },
    {
      msg: "A",
      img: "https://www.craftyfibres.uk/wp-content/uploads/2020/12/Alpaca.jpg",
    },
    {
      msg: "Hola Mundo",
      img: "https://w0.peakpx.com/wallpaper/981/728/HD-wallpaper-puppy-animal-dog-grass.jpg",
    },
    {
      msg: "Castro",
      img: "https://static.fundacion-affinity.org/cdn/farfuture/hHjlkRJJ0mnR1zVGzWk-SEX1BpGXvE56GGuN6h89MWM/mtime:1528830329/sites/default/files/descubre-como-se-comporta-un-gato.jpg?itok=n2kVSTSl",
    },
    {
      msg: "A",
      img: "https://w0.peakpx.com/wallpaper/206/516/HD-wallpaper-monkeys-monkey-animal.jpg",
    },
    {
      msg: "Hola Mundo",
      img: "https://data.viaje-a-china.com/kcfinder/upload/vac/pic/lucia/serpiente.jpg",
    },
    {
      msg: "Castro",
      img: "https://w0.peakpx.com/wallpaper/853/897/HD-wallpaper-little-hedgehog-summer-nature-hedgehog-animal.jpg",
    },
    {
      msg: "A",
      img: "http://inluxus.com/fotos/notas/osoHormiguero00.jpg",
    },
    {
      msg: "Castro",
      img: "https://w0.peakpx.com/wallpaper/927/716/HD-wallpaper-flying-eagle-nature-wings-bald-eagle-trees.jpg",
    },
    {
      msg: "A",
      img: "https://w0.peakpx.com/wallpaper/568/175/HD-wallpaper-lemur-eyes-animal.jpg",
    },
    {
      msg: "Castro",
      img: "https://bucketvirtualpro.s3.amazonaws.com/noticiasImg/2020/04/53288/pajaros-20200412.jpg",
    },
    {
      msg: "A",
      img: "https://w0.peakpx.com/wallpaper/818/560/HD-wallpaper-little-bear-cub-baribal-black-bear-wild-nature.jpg",
    },
    {
      msg: "Castro",
      img: "https://w0.peakpx.com/wallpaper/549/2/HD-wallpaper-nice-iguana-animal-selection.jpg",
    },
    {
      msg: "A",
      img: "https://w0.peakpx.com/wallpaper/545/633/HD-wallpaper-cute-cow-green-brown-vaca-bull-baby-animal.jpg",
    },
    {
      msg: "Castro",
      img: "https://w0.peakpx.com/wallpaper/42/374/HD-wallpaper-goat-leg-small-animal.jpg",
    },
    {
      msg: "A",
      img: "https://w0.peakpx.com/wallpaper/700/15/HD-wallpaper-piglet-farm-small-pig-dalmatian-piggy-pets-pigs-funny-animals-piglets.jpg",
    },
    {
      msg: "A",
      img: "https://comenius.susqu.edu/biol/202/animals/deuterostomes/craniata/mammalia/Capybara_Hattiesburg_Zoo-VIGILANCEPRIME.jpg",
    },
  ];

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
        <Album posts={postsPrueba} onComments={onCommentsOpen} />
      </div>
    </>
  );
};
