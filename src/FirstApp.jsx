import PropTypes from "prop-types";

/* Todo está dentro del mismo scope (no hay un scope global, solo del componente)
  la diferencía es que los elementos que se encuentran fuera del componente no se van a voler a renderizar
  no se asigna nuevamente un espacio en memoria para eso) */
const nombre = "Sebastián";

const apellido = () => {
  return "Álava";
};

const sebastianObj = {
  nombre: "Sebastián",
  apellido: "Álava",
};

/* Los componentes estan acostumbrados a recibir propiedades a traves de desestructuraciones
estas vienen desde donde son invocadas o renderizadas */
export const FirstApp = ({ edad, genero }) => {
  return (
    //Cuando se requiere más de un elemento, es necesario tener un elemento padre que los agrupe
    //('<></>' o '<Fragment></Fragment>')
    <>
      {/* Este es un comenatrio que no se va a rendereizar */}
      {/* Esta es la manera en la que se renderizan variables */}
      <h1>
        {nombre} {apellido()}
      </h1>
      <h2>Ingeniero en Ciencias de la computación</h2>
      <p>Edad: {edad}</p>
      <p>Genero: {genero}</p>
      {/* Está es la manera de ver un objeto renderizado en React */}
      <code>{JSON.stringify(sebastianObj)}</code>
    </>
  );
};

/* Esta es la sintaxis para definir los tipos de las propiedades,
ademas de especificar que son requeridas */
FirstApp.propTypes = {
  edad: PropTypes.number.isRequired,
  genero: PropTypes.string.isRequired,
};

/* Tambien se pueden definir los valores por defecto que tendran las props */
FirstApp.defaultProps = {
  edad: 25,
  genero: "Masculidno",
};
