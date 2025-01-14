import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Filter from './ui/Filter';
import CareerList from './ui/CareerList';


const filters = ['all', 'experience', 'education'];
export default function SectionCareer({ref}) {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <section 
            ref={ref}
            id='background' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'Career Background'} />
            <Filter filters={filters} filter={filter} onFilterChange={setFilter} />
            <CareerList filter={filter} />
        </section>
    );
}

