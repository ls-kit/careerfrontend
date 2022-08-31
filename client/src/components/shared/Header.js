import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <div className='bg-black py-2'>
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
                        <button className='bg-green-500 py-2 px-4 font-medium text-white text-sm rounded-sm ml-3'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;