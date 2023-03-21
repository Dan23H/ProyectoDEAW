import "../css/floating-labels.css";
import "../css/bootstrap/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState([]);

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const confirmmation = () => {
    setConfirmar((list) => [...list, [email, password]]);
  };

  return (
    <>
      <form className="form-signin">
        <div className="text-center mb-4">
          <img
            className="mb-4"
            src="../css/favicon.ico"
            alt="Logo"
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={(event) => handleEmail(event)}
            required
            autoFocus
          />
          <label htmlFor="inputEmail">Correo Electrónico</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(event) => handlePassword(event)}
            required
          />
          <label htmlFor="inputPassword">Contraseña</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Recuérdame
          </label>
        </div>
        <div className="text-center">
          <label>
            <small>
              <Link to="/register">¿No tienes cuenta? Regístrate aquí</Link>
            </small>
          </label>
        </div>
        <Link to="/interfaz-usuario">
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => confirmmation()}
          >
            Iniciar Sesión
          </button>
        </Link>
      </form>
    </>
  );
};
