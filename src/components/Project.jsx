import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './ui/SectionTitle';
import Filter from './ui/Filter';
import ProjectList from './ui/ProjectList';
import { IoArrowBackOutline } from "react-icons/io5";


const filters = ['all', 'Personal', 'Professional'];
export default function Project() {
    const [filter, setFilter] = useState(filters[0]);
    useEffect(() => {
        // put scroll on top once page is rendered
        window.scrollTo({top: 0});
    }, []);

    return (
        <section 
            className='py-16 lg:py-28'
        >
            <h1 className='mb-4 font-bangers font-bold md:text-lg text-xl tracking-wide'>
                <Link to='/' title='Back to home' className='
                    inline-block group
                    hover:text-tealGreen
                '>
                    <IoArrowBackOutline className='
                        inline-block
                        mr-1
                        transform translate-x-0
                        duration-200
                        group-hover:-translate-x-2
                    '/>
                    <span className='
                        border-b border-transparent
                        group-hover:border-tealGreen
                    '>
                        Gloria Gwak
                    </span>
                </Link>
            </h1>
            <SectionTitle text={'All Projects'} />
            <Filter filters={filters} filter={filter} onFilterChange={setFilter} />
            <ProjectList filter={filter} />
        </section>
    );
}

