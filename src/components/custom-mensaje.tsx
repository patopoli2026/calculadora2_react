import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const CustomMensaje = () => {
  const [mensaje, setMensaje] = useState<string>("");

  const manejarClick = () => {
    console.log("¡Botón presionado!");
    setMensaje("¡Botón presionado!");
  };

  const borrarMensaje = () => {
    setMensaje("");
  };

  return (
    <div className="container mt-5">
      <div className="alert alert-primary text-center" role="alert">
        Bienvenido a la Calculadora
        <>.........</>
        {/* <button onClick={manejarClick} className="btn btn-primary mt-3">
          Ir
        </button> */}
        <Link to="/calculadora">Ir</Link>
        <button onClick={borrarMensaje} className="btn btn-secondary mt-3 ms-2">
          Borrar
        </button>
        {mensaje && <p className="mt-3">{mensaje}</p>}
      </div>
      <Outlet></Outlet>
    </div>
  );
};
