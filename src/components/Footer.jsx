import React from 'react';

export default function Footer({path}) {
    return (
        <footer className={`py-8 text-center ${path === '/projects' ? 'block w-full' : 'lg:w-[calc(60%-1rem)] w-full ml-auto'}`}>
            <p className='text-center'>Designed & Developed by Gloria Gwak</p>
        </footer>
    );
}

