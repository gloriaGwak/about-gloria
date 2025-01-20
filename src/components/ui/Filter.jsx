import React from 'react';


export default function CareerFilter({filters, filter, onFilterChange}) {
    return (
        <ul className='flex items-center justify-start gap-3 mb-4'>
            {filters.map((value, index) => 
                <li key={index}>
                    <button
                        className={`capitalize text-opacity-70 ${filter === value && 'font-bold underline'}`}
                        type='button'
                        onClick={() => onFilterChange(value)}
                    >{value}</button>
                </li>
            )}
        </ul>
    );
}

