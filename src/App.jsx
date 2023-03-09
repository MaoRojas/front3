import { useState } from "react";
import "./App.css";
import CustomCss from "./CustomCss";
import Home from "./Home";
import Inmutable from "./Inmutable";

function App() {
  const [tipoColor, setTipoColor] = useState("light");
  const [isDark, setIsDark] = useState(false);

  const cambiarModoOscuro = () => {
    setTipoColor("dark");
  };
  const cambiarModoClaro = () => {
    setTipoColor("light");
  };
  const cambiarModo = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <CustomCss />
      <Home isDark={isDark} />
      {/* Se desactivo por el boton Cambiar desde un solo Boton */}
      <button onClick={cambiarModoOscuro}>Modo Oscuro</button>
      {/* Se desactivo por el boton Cambiar desde un solo Boton */}
      <button onClick={cambiarModoClaro}>Modo Claro</button>
      {/* Se cambio la logica para es boton funcionara */}
      <button onClick={cambiarModo}>Cambiar desde un solo Boton</button>
      <Inmutable />
    </div>
  );
}

export default App;
