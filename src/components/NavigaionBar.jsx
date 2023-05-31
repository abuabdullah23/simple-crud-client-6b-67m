import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='py-10'>
            <ul className='flex gap-5 font-bold text-xl'>
                <li> <Link to="/addUser">Add User</Link> </li>
                <li> <Link to="/users">Users</Link> </li>
            </ul>
        </div>
    );
};

export default NavigationBar;