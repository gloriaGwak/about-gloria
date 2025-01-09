import React from 'react';
import About from './About';
import Projects from './Projects';
import CareerBackground from './CareerBackground';

export default function Main() {
    return (
        <main className='
            flex flex-col gap-16 pb-16
            lg:py-24 lg:gap-24
        '>
            <About />
            <Projects />
            <CareerBackground />
        </main>
    );
}

