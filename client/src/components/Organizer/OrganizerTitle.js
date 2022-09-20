import React from 'react';
import HeaderShapeImg from "../shared/HeaderShapeImg";
import bigLogo from "../../assets/Logo-Large.png";

const OraganizerTitle = () => {
    return (
        <div className="shape hidden lg:block relative">
            <HeaderShapeImg />
            <div className="ls_big-head">
                <img src={bigLogo} alt="logo" className='w-44 m-auto'/>
                <h2 className="text-6xl text-red-600">Oraganizer</h2>
            </div>
        </div>
    );
};

export default OraganizerTitle;