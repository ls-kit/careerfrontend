import React from 'react';
import logo from '../../assets/Logo.png';

const LogoBox = () => {
    return (
        <div className='shadow-lg shadow-gray-500'>
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default LogoBox;