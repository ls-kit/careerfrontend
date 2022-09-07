import React from 'react';
import heroBG from '../../assets/hero-bg.png';

const Banner = () => {
    const herobg = {
        background: `url(${heroBG})`,
        backgroundSize: "cover"
    }
    return (
        <div className='h-[150px] sm:h-[300px] md:h-[400px] lg:h-[600px]' style={herobg}>
        </div>
    );
};

export default Banner;