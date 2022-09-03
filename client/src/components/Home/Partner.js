import React from 'react';
import LogoBox from '../shared/LogoBox';

const Partner = () => {
    return (
        <div className="container mx-auto px-3 pt-12 pb-6">
            <h2 className='text-red-600 text-3xl font-semibold text-center pb-5'>Our Partners</h2>
            <div className="grid grid-cols-4 gap-8">
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
                <div><LogoBox /></div>
            </div>
        </div>
    );
};

export default Partner;