import React from 'react';
import headerLogo from '../../assets/Logo.png';
import { BiSearch } from 'react-icons/bi';

const TopHeader = () => {
    return (
        <div className='py-2'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Header Logo */}
                    <div>
                        <img src={headerLogo} alt="" />
                    </div>
                    {/* Header Searchbar */}
                    <div className=' hidden lg:flex items-center justify-end w-full'>
                        <div className='rounded-md overflow-hidden flex items-center w-full max-w-xs py-1 px-2 border border-gray-400 shadow-sm shadow-green-600'>
                            <input type="search" className='w-full block outline-none border-none' placeholder='Search Here' />
                            <button className='text-gray-700 text-xl'><BiSearch /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;