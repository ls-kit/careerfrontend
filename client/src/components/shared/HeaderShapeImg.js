import React from "react";
import headerShapeImg from "../../assets/Header-Shapes.png";

const HeaderShapeImg = () => {
    return (
        <div className="shape hidden lg:block ">
            <img className="w-full h-[400px]" src={headerShapeImg} alt="" />
        </div>
    )
}

export default HeaderShapeImg;