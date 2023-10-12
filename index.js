import React from "react";
import ReactDOM from "react-dom/client";
// import { Button } from "./components/Function/Boton";
import { Publicaciones } from "./components/Function/Post";
// import { Saludar } from "./components/Saludar_Clases";

const RootElement = document.getElementById("root");
const Root = ReactDOM.createRoot(RootElement);

// Tambien podemos crear una funcion asi
// const HandleChange = (e) => {
//   console.log(e.target.value);
// };

Root.render(
  <>
    {/* <h1>Aña</h1>
    <Button></Button>
    <Button text="Aña"></Button>
    <Button text="nWn"></Button> */}
    {/* <input 
    // Y lo pasamos como valor de onChange, para ahorrarnos lineas de codigo
    // onChange={HandleChange}
    // onClick={() => { alert("Input Activado"); }}
    // onChange={(e) => {
    // console.log("Estas Escribiendo");
    // console.log(e); <- Esto es "e" de Evento
    // console.log(e.target.value); //Esto es para obtener el valor escrito en el input, este valor podemos almacenarlo en una variable.
    // }}
    // Podemos crear una funcion haciendo (parametro) => {}
    ></input> */}

    {/* <form
      onSubmit={(e) => {
        // console.log("Enviando Datos del Formulario");
        // Para Prevenir la recarga del fomulario usamos esta wea e.preventDefault() -> alert('Enviado')
      }}
    >
      <h1>Registro de Usuarios</h1>
      <button>Enviar</button>
    </form> */}

    <Publicaciones></Publicaciones>
  </>
);
