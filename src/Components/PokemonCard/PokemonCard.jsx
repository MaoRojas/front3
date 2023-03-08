import React from "react";

const PokemonCard = ( { element } ) => {
  return (
    <div key={element.id}>
      <h1>{element.name}</h1>
      <img src={element.avatar} alt="" />
      {/* Cuando una caracteristica es booleana no es detectada por eso se debe hacer un ternario como en el caso de agressive */}
      <h2>{element.agressive ? "es agresivo" : "no es agresivo"}</h2>
    </div>
  );
};

export default PokemonCard;
