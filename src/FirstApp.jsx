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

export const FirstApp = () => {
  return (
    //Cuando se requiere más de un elemento, es necesario tener un elemento padre que los agrupe
    //('<></>' o '<Fragment></Fragment>')
    <>
      {/* Este es un comenatrio que no se va a rendereizar */}
      {/* Esta es la manera en la que se renderizan variables */}
      <h1>
        {nombre} {apellido()}
      </h1>
      <h2>Un subtitulo</h2>
      {/* Está es la manera de ver un objeto renderizado en React */}
      <code>{JSON.stringify(sebastianObj)}</code>
    </>
  );
};
