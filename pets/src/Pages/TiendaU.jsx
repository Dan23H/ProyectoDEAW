import { Link } from "react-router-dom";
import { Navbar } from "../Componentes";

export const TiendaU = () => {
  return (
    <>
      <body>

        <Navbar
          searchBar={true}
          current="tienda"
          item0="home"
          item1="Subir Imagen"
          item2="Mensajeria"
          item3="Perfil"
          item4="Tienda"
        />
        <Link to="/tienda/comprar">(Cuando se compra...)</Link>

        <main role="main">

          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Hello, world!</h1>
              <p>This is a template for a simple marketing website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div class="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div class="col-md-4">
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
            </div>

            <hr />

          </div>

        </main>
      </body>
    </>
  );
};
