import React from 'react'
import ReactDOM from 'react-dom/client';

/* El punto de entrada de una apliación React es a traves de un functional component, así: 
(todos los functional componenten deben ser en PascalCase)*/
function App(){
  // El retorn es equivalente a un document.createElement...
  return <h1>Hola mundo!!!</h1>;
}

/* Esta es la sintaxis a seguir para renderizar los componentes en el index.html a traves del modo estricto */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)