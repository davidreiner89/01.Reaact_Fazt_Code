// import PropTypes from "prop-types";

export function Button({ text = "UwU" }) {
  return (
    <button
      onClick={() => {
        console.log("Me Has Clickeado");
      }}
    >
      Boton de {text}
    </button>
  );
}

// Nos Ayuda a ver nuestros errores, al pasar una prop
// Button.prototype = {
//   text: PropTypes.string,
// };
