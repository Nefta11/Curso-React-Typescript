import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { ReqResUserListResponse, User } from '../interfaces/reqres.interface';




const loadUsers = async (): Promise<User[]>  =>{

    try {
        const {data} = await  axios.get<ReqResUserListResponse>('https://reqres.in/api/users?+');
        return data.data;


    } catch (error) {
        console.log(error);
        return [];
    }

}



const UsersPage = () => {


    const [users, setusers ] = useState<User[]>([])




    useEffect(()=>{

        loadUsers().then(setusers )

        },[])


  return (
    <div>
      
    <h3>Usuarios</h3>

    <table>
    <thead>
    <tr>

    <th>Avatar</th>
    <th>Nombre</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
{

    users.map (user => (
        <tr key={user.id}>
        <td><img style={{width:'66px'}} src={user.avatar} alt="User avatar" /></td>
        <td>{user.first_name}</td>
        <td>{user.email}</td>
        </tr>

    ))
}


    </tbody>
    </table>


    </div>
  )
}



const UserRow = () => {
  return (
    <div>
      
    </div>
  )
}






export default UsersPage
