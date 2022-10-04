import React from 'react'

import getUser from './Helpers/getUser' 

/* const initialUser = {
    name: "",
    email: "",
}
*/

const FetchCard = () => {

const [user, setUser] = React.useState("");

const updateUser = () => {
    getUser().then(newUser => {
        setUser(newUser);
    })
}

// Usamos el useEffect para renderizar esta funcion solo cuando se carga el componente // 

React.useEffect(() => {
    updateUser();
}, []);



  return (
    <div> 
    <h1> Fetch Card Api  </h1>
    <h1> {user.name}  </h1>
    <h1> {user.email}  </h1>
    <button onClick={updateUser}> Update User </button>
    </div>
  )
}

export default FetchCard

// Api: https://jsonplaceholder.typicode.com/ //