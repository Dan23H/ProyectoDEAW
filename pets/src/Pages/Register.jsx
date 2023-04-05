import "../css/bootstrap/bootstrap.min.css";
import "../css/floating-labels.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordc, setPasswordc] = useState("");
  const [datos, setDatos] = useState([]);

  const handleNombre = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleCorreo = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handlePasswordc = (e) => {
    e.preventDefault();
    setPasswordc(e.target.value);
  };

  const Guardar = () => {
    setDatos((list) => [...list, [name, email, password, passwordc]]);
  };
  return (
    <>
      <body className="text-center">
        <form className="form-signin">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Registro</h1>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="inputNickname"
              className="form-control"
              placeholder="Nombre de usuario"
              value={name}
              onChange={(event) => handleNombre(event)}
              required
              autoFocus
            />
            <label htmlFor="inputNickname">Nombre de Usuario</label>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(event) => handleCorreo(event)}
              required
            />
            <label htmlFor="inputEmail">Correo Electrónico</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => handlePassword(event)}
              required
            />
            <label htmlFor="inputPassword">Contraseña</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPasswordConfirm"
              className="form-control"
              placeholder="Confirmar Contraseña"
              value={passwordc}
              onChange={(event) => handlePasswordc(event)}
              required
            />
            <label htmlFor="inputPasswordConfirm">Confirmar Contraseña</label>
          </div>

          <div className="text-center">
            <label>
              <small>
                <Link to="/">¿Ya tienes cuenta? Inicia sesión aquí</Link>
              </small>
            </label>
          </div>
          <Link to="/">
            <button
              className="btn btn-lg btn-primary btn-block"
              onSubmit={() => Guardar()}
            >
              Registrarse
            </button>
          </Link>
        </form>
      </body>
    </>
  );
};
