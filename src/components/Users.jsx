import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted successfully')
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h3 className='text-center font-bold text-6xl'>All users: {users.length}</h3>
            <ol>
                {
                    users.map(user => <li key={user._id}  className='mb-5 border border-slate-400 rounded-lg py-3 px-4 w-fit'>{user.name} : {user.email} 
                    
                    <Link className='ml-2 border border-slate-500 rounded hover:text-white hover:bg-slate-700 py-2 px-4' to={`/update/${user._id}`}><button>Update</button></Link>
                    <button  className='ml-2 border border-slate-500 rounded hover:text-white hover:bg-red-500 py-2 px-4' 
                        onClick={() => handleDelete(user._id)}
                    >del</button> </li>)
                }
            </ol>
        </div>
    );
};

export default Users;