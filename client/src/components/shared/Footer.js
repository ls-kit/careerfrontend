import React from 'react';
import { MdPhoneCallback } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { menus } from '../../utils/pageMenu';
import { links } from '../../utils/socialLinks';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-green-700  py-3'>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-2 gap-4">
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-4'>
                            <h2 className='text-2xl font-medium text-white'>About Us</h2>
                            <p className='text-base text-white pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eligendi cumque, tenetur ab, vel sed nostrum sunt, commodi neque atque ea sapiente eaque itaque? Perspiciatis repudiandae eius atque magni eveniet iusto aliquid rerum blanditiis natus beatae! Autem, quos incidunt. Alias.</p>
                            <div className='grid grid-cols-2 items-center mt-6'>
                                <div className='flex items-center'>
                                    {links.map(menu => <button key={menu.id}>{menu.link}</button>)}
                                </div>
                                <div className='bg-white rounded-sm overflow-hidden grid grid-cols-12 items-center'>
                                    <input type="text" placeholder='Search' className='col-span-10 outline-none border-none py-1 px-2' />
                                    <button className='col-span-2 text-center'><BiSearch /></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 pl-4'>
                            <h2 className='text-2xl font-medium text-white'>Quick Links</h2>
                            <ul className='mt-3'>
                                {menus.map(menu => <li className='font-medium pl-3'>{menu.link}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-2'>
                            <h2 className='text-2xl font-medium text-white'>Hotline</h2>
                            <div className='flex items-center pt-3'>
                                <div className='flex items-center justify-center bg-white text-green-600 rounded-md w-8 h-8 mr-3 text-2xl shadow-md'>
                                    <MdPhoneCallback />
                                </div>
                                <ul>
                                    <li className='text-white'>017131864821</li>
                                    <li className='text-white'>01321834900</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <h2 className='text-2xl font-medium text-white'>Contact</h2>
                            <div className='flex items-center pt-3'>
                                <div className='flex items-center justify-center bg-white text-green-600 rounded-md w-8 h-8 mr-3 text-2xl shadow-md'>
                                    <ImLocation />
                                </div>
                                <p className='text-white'>135/5, North Mugda, Gazi bhaban, Dhaka-1214</p>
                            </div>
                            <div className='flex items-center pt-3'>
                                <div className='flex items-center justify-center bg-white text-green-600 rounded-md w-8 h-8 mr-3 text-2xl shadow-md'>
                                    <MdPhoneCallback />
                                </div>
                                <ul>
                                    <li className='text-white'>01911-259113</li>
                                    <li className='text-white'>01626233143</li>
                                    <li className='text-white'>017131864821</li>
                                    <li className='text-white'>01321834900</li>
                                </ul>
                            </div>
                            <div className='flex items-center pt-3'>
                                <div className='flex items-center justify-center bg-white text-green-600 rounded-md min-w-[33px] h-8 mr-3 text-2xl shadow-md'>
                                    <AiOutlineMail />
                                </div>
                                <ul>
                                    <li className='text-white'>bangladeshcareerolympiad@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;