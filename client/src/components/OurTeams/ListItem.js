import React from 'react';

const ListItem = ({ item }) => {
    return (
        <div className={`text-center relative m-4 border border-green-500`} >
            <div className="flex flex-col shadow-xl h-full justify-center items-center p-2">
                <p>{item}</p>
            </div>
        </div>
    );
};

export default ListItem;
