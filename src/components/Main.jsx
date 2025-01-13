import React from 'react';
import About from './About';
import Projects from './Projects';
import CareerBackground from './CareerBackground';

export default function Main() {
    return (
        <main className='
            pb-16
            lg:pb-24
        '>
            <About />
            <Projects />
            <CareerBackground />
        </main>
    );
}

