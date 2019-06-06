import React, { useState, useEffect} from 'react'

import User from './User'

const Post = ()=>{ 
    const [users, setusers] = useState([])

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=>setusers(res))
    .catch(err=>console.log(err))
}

useEffect(()=>{
    getPost()
},[])

    return(
        <div>
            { users.map((user,i)=>(
                <User
                key={i}
                name={user.name}
                />
            ))}

        </div>
    )
}

export default Post