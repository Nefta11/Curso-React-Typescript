import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { ReqResUserListResponse, User } from '../interfaces/reqres.interface';




const loadUsers = async (page: number = 1): Promise<User[]>  =>{

    try {
        const {data} = await  axios.get<ReqResUserListResponse>('https://reqres.in/api/users?+',{
        params: {
            page:page
        }
        } );
        return data.data;


    } catch (error) {
        console.log(error);
        return [];
    }

}



const UsersPage = () => {


    const [users, setusers ] = useState<User[]>([])
    const currentPageRef = useRef(1);



    useEffect(()=>{

        loadUsers(currentPageRef.current)
        .then(setusers )

        },[])


  return (
    <>
      
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

<UserRow key={user.id} user={user}/>
    ))
}


    </tbody>
    </table>

    <div>
    <button>Prev</button>
    <button>Next</button>
    </div>

    </>
  )
}

interface Props {
user: User;
}




const UserRow = ({user}: Props) => {

    const {avatar, first_name, last_name, email} = user;

  return (
    <tr>
    <td><img style={{width:'66px'}} src={avatar} alt="User avatar" /></td>
    <td>{first_name}</td>
    <td>{email}</td>
    </tr>
  )
}






export default UsersPage
