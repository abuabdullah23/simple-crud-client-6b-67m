import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)

    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email };
        console.log(updateUser)
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('User updated successfully')
                }
                form.reset();
            })
    }


    return (
        <div>
            <h2 className='text-center font-bold text-6xl mb-10'>Update information of <span className='text-red-500'>'{loadedUser.name}'</span></h2>

            <form onSubmit={handleUpdateUser}>
                <input className='border border-slate-400 py-3 px-5 rounded-md mb-3' type="text" name="name" id="name" placeholder={loadedUser?.name} /> <br />
                <input className='border border-slate-400 py-3 px-5 rounded-md mb-3' type="email" name="email" id="email" placeholder={loadedUser?.email} />
                <br />
                <input className='border border-slate-400 py-2 px-5 rounded-md mb-3 hover:text-white hover:bg-green-600' type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;
