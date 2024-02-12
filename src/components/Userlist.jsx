import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async () => {
        const response = await axios.get('https://jimat-ui-back.vercel.app/users');
        setUsers(response.data);
    }

    const deleteUser = async (userId) =>{
        await axios.delete(`https://jimat-ui-back.vercel.app/${userId}`);
        getUsers();
    }
  return (
    <div>
        <div className='pl-2 mb-2'>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>List of Users</h2>
            <Link to={"/users/add"} className='button is-primary'>Add New</Link>
        </div>
        <div className='table-container px-2'>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Fakultas</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
                    <tr key={user.uuid}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.fakultas}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                    <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info' >Edit</Link>
                    <button onClick={()=> deleteUser(user.uuid)} className='button is-small is-danger' >Delete</button> 
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Userlist