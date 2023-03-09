// HOOKS
// Forma de utilizar contadores o variables en React
// utilizando el useState
import { useState } from "react";

const Inmutable = () => {
  const [contador, setContador] = useState(0);
  console.log(contador);

  // let contador = 0; esto ya no se usa en react
  // contador ++    esto ya no se usa en react
  // contador = contador +1 esto ya no se usa en react
  // contador += esto ya no se usa en react

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h1>este es el componente Inmutable</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </>
  );
};

export default Inmutable;
