import React from 'react'
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'


/* Esta es la sintaxis a seguir para renderizar los componentes en el index.html a traves del modo estricto */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>
)