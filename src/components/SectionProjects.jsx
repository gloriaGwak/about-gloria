import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './ui/SectionTitle';
import Filter from './ui/Filter';
import ProjectList from './ui/ProjectList';
import { IoArrowForwardOutline } from "react-icons/io5";


const filters = ['all', 'Personal', 'Professional'];
export default function SectionProjects({ref}) {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <section 
            ref={ref}
            id='projects' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'Projects'} />
            <Filter filters={filters} filter={filter} onFilterChange={setFilter} />
            <ProjectList filter={filter} />
            <div className='
                lg:mt-10
                mt-8
            '>
                <Link to='/projects' title='Go to all project list' className='
                    group inline-flex items-center font-semibold leading-tight 
                    hover:text-tealGreen
                '>  
                    <span className='
                        border-b border-transparent
                        text-lg
                        md:text-xl
                        group-hover:border-tealGreen
                    '>
                        View All Projects
                    </span>
                    <IoArrowForwardOutline className='
                        inline-block
                        ml-1
                        transform translate-x-0
                        duration-200
                        group-hover:-translate-x-[-0.5rem]
                    '/>
                </Link>
            </div>
        </section>
        
    );
}

