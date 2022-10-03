import React from 'react'

const Lifecycle = () => {

const [counter1, setCounter1] = React.useState(0)
const [counter2, setCounter2] = React.useState(0)

React.useEffect(() => {
console.log('use effect sin dependency');
})

// En este caso la funcion useEffect se va a ejecutar cada vez que haya un cambio en el componente //


React.useEffect(() => {
    console.log('use effect con array vacio []');
    }, [])

// En este caso la funcion useEffect se va a ejecutar solo una vez cuando se inicia el componente //

React.useEffect(() => {
    console.log('use effect en [counter 1]');
    }, [counter1])

// En este caso la funcion useEffect se va a ejecutar cuando se inicia el componente y cada vez que haya un cambio en counter 1 //

React.useEffect(() => {
    console.log('use effect en [counter 2]');
    }, [counter2])

// En este caso la funcion useEffect se va a ejecutar cuando se inicia el componente y cada vez que haya un cambio en counter 2 //

React.useEffect(() => {
    console.log('use effect en [counter1] y [counter 2]');
    }, [counter1, counter2])

// En este caso la funcion useEffect se va a ejecutar cuando se inicia el componente y cada vez que haya un cambio en counter 1 o en counter 2 //

  return (
  <div> 
    <h1> Clicks Counter 1: {counter1} </h1>
    <h1> Clicks Counter 2: {counter2} </h1>
    <button onClick={() => setCounter1(counter1 + 1)} > Increment C1 </button>

    <button onClick={() => setCounter2(counter2 + 1)} > Increment C2 </button>
     </div>
  )
}

export default Lifecycle