import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandGithubFilled, TbBrandLinkedinFilled } from "react-icons/tb";


const navList = ['about', 'projects', 'background', 'contact'];
export default function Header({sectionRefs, currentSection, path}) {
    const [active, setActive] = useState(navList[0]);
    
    const scrollToSection = (target,index) => {
        if (sectionRefs.current[index]) {
            sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
            setActive(target);
        }
    };
    
    useEffect(() => {
    }, [active]);

    return (
        <header className={`${path !== '/projects' ? 'block flex flex-wrap lg:flex-col lg:justify-between lg:w-[35%] lg:h-[100vh] lg:py-24 lg:sticky top-0 left-0 relative pt-20' : 'hidden'}`}>
            {path !== '/projects' && (
                <>
                    <div>
                        <h1 className='font-bangers font-bold md:text-5xl text-4xl'>
                            <Link to='/'>Gloria Gwak</Link>
                        </h1>
                        <h2 className='
                            md:mt-3 md:text-xl text-lg
                            font-medium mt-2 
                            text-balance
                        '>
                            Frontend Developer | UI Developer
                        </h2>
                        <p className='
                            md:mt-4 md:text-lg text-base
                            mt-2
                            text-balance
                        '>
                            I thrive on new challenges and find joy in turning creative ideas into reality.
                        </p>
                        <ul className='
                            flex gap-4 mt-4
                        '>
                            <li className='
                                md:w-[35px] md:h-[35px]
                                w-[30px] h-[30px]
                            '>
                                <Link to='https://github.com/gloriaGwak' target='_blank' title='Go to new window' className='block w-full h-full'>
                                    <TbBrandGithubFilled className='w-full h-full' /><span className='blind'>GitHub</span>
                                </Link>
                            </li>
                            <li className='
                                md:w-[35px] md:h-[35px]
                                w-[30px] h-[30px]
                            '>
                                <Link to='https://www.linkedin.com/in/gloria-gwak-803667236' target='_blank' title='Go to new window' className='block w-full h-full'>
                                    <TbBrandLinkedinFilled className='w-full h-full' /><span className='blind'>LinkedIn</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <nav className='
                        lg:relative
                        fixed top-0 left-0 w-full
                    '>
                        <ul className='
                            lg:block
                            lg:bg-transparent
                            lg:px-0
                            lg:text-charcoal
                            md:px-12
                            text-ivory
                            flex w-full justify-between px-6
                            bg-charcoal
                        '>
                            {navList.map((value, index) => 
                                <li 
                                    key={value}
                                    onClick={() => scrollToSection(value,index)}
                                    className={`
                                        py-2 text-center text-sm
                                        lg:mt-1 first:mt-0 text-lg lg:text-left lg:text-base lg:p-0
                                        ${currentSection === value && 'font-bold'}
                                    `}
                                >
                                    <button 
                                        className='capitalize'
                                        type='button'
                                    >
                                        {value}
                                    </button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
}

