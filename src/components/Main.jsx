import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SectionAbout from './SectionAbout';
import SectionProjects from './SectionProjects';
import SectionCareer from './SectionCareer';
import SectionContact from './SectionContact';

export default function Main() {
    const { sectionRefs } = useOutletContext();

    return (
        <main className='
            lg:w-[calc(60%-1rem)] lg:pb-24
            pb-16 w-full
            
        '>
            <SectionAbout ref={(el) => (sectionRefs.current[0] = el)} id="about" />
            <SectionProjects ref={(el) => (sectionRefs.current[1] = el)} id="projects" />
            <SectionCareer ref={(el) => (sectionRefs.current[2] = el)} id="career" />
            <SectionContact ref={(el) => (sectionRefs.current[3] = el)} id="contact" />
        </main>
    );
}

