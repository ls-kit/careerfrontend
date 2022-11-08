import React from "react";

const Member = ({ member }) => {
  return (
    <div className='text-center'>
      <img className='inline-block' src={member.img} alt='' />
      <div className='name text-center '>
        <h2 className='text-[24px] font-sans font-semibold text-green-700'>{member.name}</h2>
        <p className='text-[18px] text-slate-500 font-sans'>{member.role}</p>
      </div>
    </div>
  );
};

export default Member;
