import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import CareerFilter from './CareerFilter';
import CareerList from './ui/CareerList';


const filters = ['all', 'experience', 'education'];
export default function CareerBackground() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <section 
            id='background' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'Career Background'} />
            <CareerFilter filters={filters} filter={filter} onFilterChange={setFilter} />
            <CareerList filter={filter} />
        </section>
    );
}

