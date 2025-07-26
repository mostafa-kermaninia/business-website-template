import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import styles from '../style'; // styles را import می‌کنیم

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    return (
        // ۱. کلاس‌های جدید برای ثابت کردن نوار در بالا
        <nav className='w-full fixed top-0 left-0 z-50 bg-primary/90 backdrop-blur-sm'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} flex py-4 justify-between items-center`}>
                    {/* لوگوی تعاملی */}
                    <a href="#home" onClick={() => setActiveLink('home')}>
                        <img
                            src={logo}
                            alt='momis-studio-logo'
                            className='w-[130px] h-auto transform transition-transform duration-300 hover:scale-110'
                        />
                    </a>

                    {/* منوی دسکتاپ */}
                    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                                            transition-colors duration-300 hover:text-secondary
                                            relative mx-4 group ${activeLink === nav.id ? 'text-secondary' : 'text-white'}`}
                                onClick={() => setActiveLink(nav.id)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </li>
                        ))}
                    </ul>

                    {/* منوی موبایل */}
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain cursor-pointer transform transition-transform duration-300 hover:rotate-90'
                            onClick={() => setToggle((previous) => !previous)}
                        />
                        <div
                            className={`${toggle ? 'flex' : 'hidden'} 
                                        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 
                                        min-w-[140px] rounded-xl sidebar z-10`}
                        >
                            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 
                                                    transition-colors duration-300 hover:text-secondary
                                                    ${activeLink === nav.id ? 'text-secondary' : 'text-white'}`}
                                        onClick={() => {
                                            setToggle(false);
                                            setActiveLink(nav.id);
                                        }}
                                    >
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;