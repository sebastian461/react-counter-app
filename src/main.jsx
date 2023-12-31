import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

/* Esta es la sintaxis a seguir para renderizar los componentes en el index.html a traves del modo estricto */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp edad={25} genero="Masculino" /> */}
    <CounterApp value={0}></CounterApp>
  </React.StrictMode>
);
