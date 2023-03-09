import React from 'react'

import "./CustomCss.css"

const CustomCss = () => {
  return (
    <div className='container'>
        {/* Primera forma de utilizar estilos CSS creando un archivo .CSS e importandolo el archivo es CustomCss.css */}
        <h2 className='title'>Este es el componente con CSS</h2>
        {/* Segunda forma de utilizar estilos CSS con la propiedad style */}
        <h3 style={ {backgroundColor: "blue"} }>Hola</h3>
    </div>
  )
}

export default CustomCss