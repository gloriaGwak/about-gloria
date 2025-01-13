import React from 'react';

export default function SectionTitle({text}) {
    return (
        <h3 className='
            lg:text-3xl lg:mb-6
            font-bold text-2xl mb-3
        '>
            {text}
        </h3>
    );
}

