import React from 'react';
import Button from '../shared/Button';
import RegisterForm from './RegisterForm';

const Banner = () => {
    const handleClick = () => {
        alert("Something!");
    }
    return (
        <div>
            <RegisterForm />
            <Button onClick={handleClick} name="This button" />
        </div>
    );
};

export default Banner;