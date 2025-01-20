import React from 'react';
import { logCustomEvent, analytics } from '../../api/firebase';


export default function CareerFilter({filters, filter, onFilterChange, category}) {
    return (
        <ul className='flex items-center justify-start gap-3 mb-4'>
            {filters.map((value, index) => 
                <li key={index}>
                    <button
                        className={`capitalize text-opacity-70 ${filter === value && 'font-semibold underline'}`}
                        type='button'
                        onClick={() => {
                            onFilterChange(value)
                            logCustomEvent(analytics, `${category}_${value}`, { 'event_category': `${category}`, 'event_type':'click' });
                        }}
                    >{value}</button>
                </li>
            )}
        </ul>
    );
}

