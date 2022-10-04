import React from 'react'

import getPosts from './Helpers/getPosts'

import getUser from './Helpers/getUser'



const Post = () => {


const [posts, setsPosts] = React.useState([]);

const [user, setUser] = React.useState({});

const updateUser = () => {
    getUser(user.id).then(newUser => {
        setUser(newUser);
}, [user.id])
}


const updatePosts = () => {
    getPosts(user.id).then(newPost => {
        setsPosts(newPost);
    }, [user.id])
}

// Usamos el useEffect para renderizar esta funcion solo cuando se carga el componente // 

React.useEffect(() => {
    updateUser();
}, []);

React.useEffect(() => {
    if(user?.id) {
        updatePosts();
    }
}, [posts]);

  return (
    <div> 
    <h1> Fetch  Posts  </h1>
    <h1> Post ID: {user.id} </h1>
    <div>  
    {posts.map(post => (
        <p key={post.id}> {post.title} </p>
    ))}
    </div>

    <button onClick={updateUser}> Update Post </button> 
    </div>
  )
}

export default Post

// Api: https://jsonplaceholder.typicode.com/ //