// Exportado por defecto
import Header from "./Components/Header/Header"
// Exportado nombrado
import { Footer } from "./Components/Footer/Footer"
import './App.css'
import Main from "./Components/Main/Main"
import PokemonList from "./Components/PokemonList/PokemonList"


function App() {


  return (
    <div className="App">

      {/* <Header />
      <Main />
      <Footer /> */}
      {/* Para utilizar props se escribe en el padre (App.js) la propiedad name = {} y se introducen los valores a mostrar y se actualiza el componente hijo (PokemonList)  */}
      {/* <PokemonList name = {"Pepito"} />
      <PokemonList name = {"Maria"} />
      <PokemonList name = {"Juancito"} /> */}
      <PokemonList />
      

    </div>
  )
}

export default App
