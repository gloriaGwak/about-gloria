import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import CareerFilter from './CareerFilter';
import CareerList from './ui/CareerList';


const filters = ['all', 'education', 'experience'];
export default function CareerBackground() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <section>
            <SectionTitle text={'Career Background'} />
            <CareerFilter filters={filters} filter={filter} onFilterChange={setFilter} />
            <CareerList filter={filter} />
        </section>
    );
}

