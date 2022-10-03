import React from 'react'

const Lifecycle = () => {

const [counter1, setCounter1] = React.useState(0)
const [counter2, setCounter2] = React.useState(0)

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