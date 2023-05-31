import React from 'react';
import NavigationBar from '../components/NavigaionBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='px-16'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;