import React from "react";
import headerShapeImg from "../../assets/Header-Shapes.png";

const HeaderShapeTitle= ({title}) => {
    return (
        <div className="shape hidden lg:block relative">
            <img className="w-full h-[400px]" src={headerShapeImg} alt="" />
            <div className="ls_big-head">
                <h3 className="text-4xl">
                    <span className="text-green-700">BANGLADESH </span> 
                    <span className="text-red-600">CAREER OLYMPIAD</span>
                </h3>
                <h2 className="text-6xl text-neutral-500 uppercase">{title}</h2>
            </div>
        </div>
    )
}

export default HeaderShapeTitle;