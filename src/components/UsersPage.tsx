import axios from 'axios';
import React, { useEffect } from 'react'
import { ReqResUserListResponse } from '../interfaces/reqres.interface';




const loadUsers = async ()  =>{

    try {
        const {data} = await  axios.get<ReqResUserListResponse>('https://reqres.in/api/users?+');
        return data.data;


    } catch (error) {
        console.log(error);
        return [];
    }

}



const UsersPage = () => {

    useEffect(()=>{

        loadUsers().then( users => console.log ( users))

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
