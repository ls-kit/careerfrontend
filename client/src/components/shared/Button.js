import React from 'react';

const Button = ({ name = "BUTTON" }) => {
    return (
        <button>
            {name}
        </button>
    );
};

export default Button;