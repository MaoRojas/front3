import React from "react";

// importacion del archivo json
import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemons = ({ type }) => {
  let pokemosByType = pokemonsJson[type];

  return (
    <div>
      {pokemosByType.map((element) => {
        return (
          // es necesario indicarle a react un elemento unico que identifique los objetos generalmete es id
          // esta es una forma de asociar los padres y los hijos
          //   <div key={element.id}>
          //     <h1>{element.name}</h1>
          //     <img src={ element.avatar } alt="" />
          //     {/* Cuando una caracteristica es booleana no es detectada por eso se debe hacer un ternario como en el caso de agressive */}
          //     <h2>{element.agressive ? "es agresivo" : "no es agresivo"}</h2>
          //   </div>

          // Otra forma de asociar padres e hijos ver a PokemonCard.jsx donde esta la logica
          <PokemonCard element={element} key={element.id} />
        );
      })}
    </div>
  );
};

export default Pokemons;
