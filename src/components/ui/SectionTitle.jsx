import React from 'react';

export default function SectionTitle({text}) {
    return (
        <h3 className='
            lg:hidden block
            font-bold text-2xl mb-3
        '>
            {text}
        </h3>
    );
}

