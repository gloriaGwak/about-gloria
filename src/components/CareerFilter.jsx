import React, { useState } from 'react';


export default function CareerFilter({filters, filter, onFilterChange}) {
    
    return (
        <ul>
            {filters.map((value, index) => 
                <li key={index}>
                    <button
                        className={`capitalize ${filter === value && 'font-bold'}`}
                        type='button'
                        onClick={() => onFilterChange(value)}
                    >{value}</button>
                </li>
            )}
        </ul>
    );
}

