import React from 'react';
import heroBG from '../../assets/hero-bg.png';

const Banner = () => {
    const herobg = {
        background: `url(${heroBG})`,
        height: '550px',
        backgroundSize: "cover"
    }
    return (
        <div style={herobg}>
        </div>
    );
};

export default Banner;