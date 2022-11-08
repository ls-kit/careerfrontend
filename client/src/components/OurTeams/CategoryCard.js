import React from 'react';

const CategoryCard = ({ name, css }) => {
    return (
        <div className={` text-center relative m-4 border-2 ${css}`}  >
            <div className="flex flex-col shadow-xl h-full justify-center items-center py-3 px-10 ">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default CategoryCard;