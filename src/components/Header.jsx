import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbBrandGithubFilled, TbBrandLinkedinFilled } from "react-icons/tb";


export default function Header() {
    return (
        <header className='
            flex 
            lg:flex-col lg:justify-between
            lg:w-[40%] lg:h-[100vh] lg:py-24 
            lg:sticky top-0 left-0
            relative py-16
        '>
            <div>
                <h1 className='font-bold md:text-5xl text-4xl'>Gloria Gwak</h1>
                <h2 className='
                    md:mt-3 md:text-xl text-lg
                    font-medium mt-2
                '>
                    Frontend Developer | UI Developer
                </h2>
                <p className='
                    md:mt-4 md:text-lg text-base
                    mt-2
                '>
                    I thrive on new challenges and <br className='lg:block hidden'/>find joy in turning creative ideas into reality.
                </p>
                <ul className='
                    flex gap-4 mt-4
                '>
                    <li className='
                        md:w-[35px] md:h-[35px]
                        w-[30px] h-[30px]
                    '>
                        <Link to='/' target='_blank' title='Go to new window' className='block w-full h-full'>
                            <TbBrandGithubFilled className='w-full h-full' /><span className='blind'>GitHub</span>
                        </Link>
                    </li>
                    <li className='
                        md:w-[35px] md:h-[35px]
                        w-[30px] h-[30px]
                    '>
                        <Link to='/' target='_blank' title='Go to new window' className='block w-full h-full'>
                            <TbBrandLinkedinFilled className='w-full h-full' /><span className='blind'>LinkedIn</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <nav className='
                lg:block
                hidden
            '>
                <ul>
                    <li>
                        <button type='button'>About</button>
                    </li>
                    <li>
                        <button type='button'>Projects</button>
                    </li>
                    <li>
                        <button type='button'>Career Background</button>
                    </li>
                    <li>
                        <button type='button'>Contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
