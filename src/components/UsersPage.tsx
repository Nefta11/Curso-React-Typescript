import axios from 'axios';
import React, { useEffect } from 'react'
import { ReqResUserListResponse } from '../interfaces/reqres.interface';




const loadUsers = async ()  =>{

    axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
    .then( resp => console.log(resp.data.data[0]) );

}



const UsersPage = () => {

    useEffect(()=>{


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
        <tr>
            <td>avatar</td>
            <td>nombre</td>
            <td>email</td>
        </tr>
    </tbody>
    </table>


    </div>
  )
}

export default UsersPage
