import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ProfilePage = () => {
    let {idd} = useParams()
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const getDataUsers = async()=>{
           try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
           }
           catch(e){console.log(e)} 
        }
        getDataUsers()
    },[])

    const filtered = users?.filter(el=>el.id == idd)
    console.log('users',users);
    console.log(filtered);
  return (
    <div>
        <h1>This is a Profile Page</h1>
        <div>
          <h1>{filtered.map(el=> el.name)}</h1>
          </div>   
    </div>
  )
}

export default ProfilePage