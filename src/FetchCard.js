import React, { useState, useEffect, useCallback } from 'react'
import getUser from './Helpers/getUser';
import getPosts from './Helpers/getPosts';


const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setsPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    }

    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) => {
                setsPosts(newPosts);
            })
    }, [user.id]);
        
    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if(user?.id) {
            updatePosts();
        }
    }, [user, updatePosts]);
    
    return (
        <div>
           
            <h1> Name: {user.name}</h1>
            <h2> Email: {user.email}</h2>

            <br/>
              <button 
              onClick={updateUser}
              style={{ backgroundColor: "pink"}}
              >
                Update User
            </button>
            <h2>Posts User ID: {user.id} </h2>
            <div>
                {posts.map(post => (
                    <p key={post.id}
                    
                    >{post.title}</p>
                ))}
            </div>
        </div>
    )
}

export default FetchCard

// Api: https://jsonplaceholder.typicode.com/ //