import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './ui/SectionTitle';
import Filter from './ui/Filter';
import ProjectList from './ui/ProjectList';
import { IoArrowForwardOutline } from "react-icons/io5";
import { logCustomEvent, analytics } from '../api/firebase';


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
            <Filter filters={filters} filter={filter} onFilterChange={setFilter} category={'SectionProjects'} />
            <div className='
                lg:my-4
                my-2
                text-right
            '>
                <Link 
                    onClick={() => {logCustomEvent(analytics, 'btn_AllProjects', { 'event_category': 'SectionProjects', 'event_type':'click' });}}
                    to='/projects' title='Go to all project list' className='
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
            <ProjectList filter={filter} />
        </section>
        
    );
}

