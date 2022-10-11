import React from 'react'

const ResizeApp = () => {

const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

const isMobile = windowWidth < 768;

// Si isMobile es menor que 768 es true si no es false //

React.useEffect(() => {


    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

return () => {
    window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
}

}, []);

  return (
      <div>
    <h1> {windowWidth} </h1>
{isMobile && <h2> Size for Mobiles </h2>
}
</div>
  )
}

export default ResizeApp


// Usamos listeners globales //