import React, { useEffect, useState } from "react";
import headerShapeImg from "../../assets/Header-Shapes.png";
import axios from "axios";

const HeaderShapeTitle = ({ title }) => {
  // const [headerTitle, setHeaderTitle] = useState("");
  // useEffect(() => {
  //   fetchHeaderTitle();
  // }, []);

  // const fetchHeaderTitle = async () => {
  //   const response = await axios.get(`http://localhost:3000/api/title/`);
  //   setHeaderTitle(response.data.latestTitle.title);
  // };

  return (
    <div className='shape hidden lg:block relative'>
      <img className='w-full h-[400px]' src={headerShapeImg} alt='' />
      <div className='ls_big-head'>
        <h3 className='text-4xl'>
          <span className='text-green-700'>BANGLADESH </span>
          <span className='text-red-600'>CAREER OLYMPIAD </span>
          {/* <span className='text-green-700'>{headerTitle.slice(0, 10)} </span>
          <span className='text-red-600'>{headerTitle.slice(10)} </span> */}
        </h3>
        <h2 className='text-6xl text-neutral-500 uppercase mt-10'>{title}</h2>
      </div>
    </div>
  );
};

export default HeaderShapeTitle;
