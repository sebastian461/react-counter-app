/* Los hooks estan caracterizados porque inicial su nombre con la palabra 'use' */
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  /* Esta es la forma de definir el hook 'useState'
    se desestructura en una variable y una función
    la variable obtiene el valor que se le pasa por estado
    y la función sirve para manipular la variable
    (los hooks son usados regularmente para renderizar porciones del componente que
      son manipuladas por el usuario o por la propia aplicación) */
  const [counter, setCounter] = useState(value);

  const handledAdd = () => {
    /* Se puede usar las dos formas */
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      {/* En este caso ya no se usa el valor pasado al componente sino a la que se define en el hook */}
      <h2>{counter}</h2>
      {/* Está es la sintaxis para agregar eventos, en este caso un evento click */}
      <button onClick={handledAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
