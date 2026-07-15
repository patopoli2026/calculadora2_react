import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const Pantalla2 = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const Suma = () => {
    setResultado(numero1 + numero2);
  };

  const Resta = () => {
    setResultado(numero1 - numero2);
  };

  const Multiplica = () => {
    setResultado(numero1 * numero2);
  };

  const Divide = () => {
    setResultado(numero1 / numero2);
  };

  const Limpiar = () => {
    setResultado(numero1 / numero2);
  };

  return (
    <div className="container mt-5">
      <div className="alert alert-success text-center" role="alert">
        Pantalla de Ingresos de Numeros a Calcular <br />
      </div>

      <div>
        <input
          type="number"
          className="form-control"
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
        />
      </div>

      <div>
        <input
          type="number"
          className="form-control"
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
        />
      </div>

      <button className="btn btn-primary" onClick={Suma}>
        Suma
      </button>

      <button className="btn btn-primary" onClick={Resta}>
        Resta
      </button>

      <button className="btn btn-primary" onClick={Multiplica}>
        Multiplica
      </button>

      <button className="btn btn-primary" onClick={Divide}>
        Divide
      </button>

      <button className="btn btn-primary" onClick={Limpiar}>
        Limpiar
      </button>

      <div>
        <h1>Resultado: {resultado}</h1>
      </div>
    </div>
  );
};
