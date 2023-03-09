import React from "react";

// Mejor forma de usar los estilos de Css ya que con modulos de Css no se toman el cuenta los nombres solo en esta aplicacion con lo cualno hay errores

import estilos from "./Home.module.css";

const Home = ( { isDark } ) => {
  return (
    <div className={isDark ? estilos.dark : estilos.light }>
      <h1 className={estilos.titleHome}>Este es el home</h1>
      <h2 className={estilos.description}>Descripcion</h2>
    </div>
  );
};

export default Home;
