import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

const menus = [
    {
        id: 1,
        link: <Link className="text-white text-sm" to="/home">Home</Link>
    },
    {
        id: 2,
        link: <Link className="text-white text-sm" to="/about-BCO">About BCO</Link>
    },
    {
        id: 3,
        link: <Link className="text-white text-sm" to="/central-comitee">Central Comitee</Link>
    },
    {
        id: 4,
        link: <Link className="text-white text-sm" to="/organizer">organizer</Link>
    },
    {
        id: 5,
        link: <Link className="text-white text-sm" to="/news-media">News-Media</Link>
    },
    {
        id: 6,
        link: <Link className="text-white text-sm" to="/contact-us">Contact Us</Link>
    },
    {
        id: 7,
        link: <Link className="text-white text-sm" to="/Courses">Courses</Link>
    },
    {
        id: 8,
        link: <Link className="text-white text-sm" to="/Blog">Blog</Link>
    },
    {
        id: 9,
        link: <Link className="text-white text-sm" to="/FAQ">FAQ</Link>
    }
]
const Header = () => {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScrollHeader);
    }, []);
    const onScrollHeader = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    }
    return (
        <div>
            {/* Big Screen */}
            <div className={`z-50 hidden lg:block bg-black py-2 ${stickyMenu ? "fixed w-full top-0 transition-all duration-500" : ""}`}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <ul className='flex items-center justify-start'>
                                {menus.map((menu, index) => (
                                    <li className='pr-4' key={index}>{menu.link}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className='bg-red-600 py-2 px-4 font-medium text-sm text-white rounded-sm'>Registration</button>
                            <Link className='bg-green-500 py-2 px-4 font-medium text-white text-sm rounded-sm ml-3' to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black lg:hidden mx-auto px-4 flex items-center justify-between'>
                <div></div>
                <div>
                    <button onClick={() => setShowMenu(!showMenu)} className='text-4xl flex items-center justify-center  text-white'><AiOutlineMenu /></button>
                </div>
            </div>
            {/* Responsive Screen */}
            <div className={`lg:hidden fixed top-0 z-50 ${showMenu
                ? "left-0 transition-all ease-linear duration-300"
                : "-left-full transition-all ease-linear duration-300"}`}>
                <div className=' px-4 pt-8 w-[300px] top-0 h-screen bg-black'>
                    <div className='flex items-center justify-end'>
                        <button className='text-white text-2xl' onClick={() => setShowMenu(!showMenu)}><MdOutlineClose /></button>
                    </div>
                    <ul>
                        {menus.map(menu => (
                            <li onClick={() => setShowMenu(!showMenu)} className='mt-2 text-lg '>{menu.link}</li>
                        ))}
                    </ul>
                    <div className='mt-5'>
                        <button className='bg-red-600 py-2 px-4 font-medium text-sm text-white rounded-sm'>Registration</button>
                        <button className='bg-green-500 py-2 px-4 font-medium text-white text-sm rounded-sm ml-3'>Login</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;