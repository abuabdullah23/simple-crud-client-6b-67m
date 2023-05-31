import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user)

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Users added successfully')
                    form.reset();
                }
            })
    }

    return (
        <div>
            <h1 className='text-center font-bold text-6xl'>Simple Crud</h1>

            <form onSubmit={handleAddUser}>
                <input className='border border-slate-400 py-3 px-5 rounded-md mb-3' type="text" name="name" id="name" placeholder='name' /> <br />
                <input className='border border-slate-400 py-3 px-5 rounded-md mb-3' type="email" name="email" id="email" placeholder='email' />
                <br />
                <input className='border border-slate-400 py-2 px-5 rounded-md mb-3 hover:text-white hover:bg-slate-800' type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;