/* El punto de entrada de una apliación React es a traves de un functional component, así: 
(todos los functional componenten deben ser en PascalCase)*/
/* export function App(){
  // El retorn es equivalente a un document.createElement...
  return <h1>Hola mundo!!!</h1>;
} */

/* Es mejor tener los componentes en archivos independientes del main.jsx
(usar el snipset 'rafc') */

export const HelloWorldApp = () => {
  return (
    <h1>Hello World App</h1>
  )
}
