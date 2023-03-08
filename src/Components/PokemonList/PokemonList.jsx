// import React from 'react'

// // Para unir el componente hijo con el padre se debe escribir dentro del parentesis de la funcion la palabra props (por convencion se utiliza este nombre puede ser cualquiera)
// // Se puede desestructurar el objeto al momento de unir los componentes y traer la informacion necesaria ( {name} ) para este caso
// const PokemonList = ( {name} ) => {

//   // se puede desestucturar el objeto creando una funcion e igualandola al objeto y en las llaves se trae el objeto u objetos que se requieran en este caso name
//   // let {name} = props

//   return (
//     // desestructurando el objeto se puede traer directamente los datos del objeto al div en este caso name
//     // Para utilizar props en el componente se ingresa dentro del div {} y se escribe la proiedad buscada en este caso props.name
//     <div>Hola {name}</div>
//   )
// }

// export default PokemonList
import React from "react";
import Pokemons from "../Pokemons/Pokemons";

const PokemonList = ( { type } ) => {
  return (
    <div>
      <Pokemons type = {"fire"} />
    </div>
  );
};

export default PokemonList;
