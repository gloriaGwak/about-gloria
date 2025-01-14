import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Filter from './ui/Filter';
import ProjectList from './ui/ProjectList';


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
        </section>
        
    );
}

