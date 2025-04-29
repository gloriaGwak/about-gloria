import React from 'react';
import SectionTitle from './ui/SectionTitle';

export default function SectionAbout({ ref }) {
    return (
        <section 
            ref={ref}
            id='about' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'About'} />
            <p>
                <span className='block'>
                    I am a Frontend Developer with 2 years and 8 months of experience building responsive, user-friendly, and accessible web interfaces. I specialize in HTML5, CSS3 (SCSS), JavaScript (ES6), and jQuery, with a strong focus on creating pixel-perfect UIs, ensuring cross-browser compatibility, and optimizing performance. I have collaborated closely with design teams to translate complex layouts into structured, maintainable code while adhering to web accessibility (WCAG) standards.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    While working at a digital agency in South Korea, I collaborated with major corporations on both maintenance tasks and large-scale projects. One of my key achievements was contributing to the development and renewal of 13 subsidiary websites over a 10-month period, where I focused on building scalable, reusable UI components to ensure consistency across the sites. In a separate project, I also took on a leadership role, coordinating cross-functional teams and managing schedules to deliver a cohesive, high-quality outcome.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    Recently, I completed a Diploma of Information Technology at TAFE NSW, where I expanded my expertise in modern frameworks like React, as well as backend technologies such as Node.js and MongoDB. While I have not yet applied these skills in real-world projects, I have gained hands-on experience through personal projects, focusing on React component-based architecture, API integration, and backend communication.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    I am passionate about building fast, scalable, and visually engaging web solutions while continuously growing as a developer. I thrive on new challenges, enjoy the process of building, and am committed to proposing and implementing better solutions. I am eager to contribute to impactful projects and further refine my skills across both frontend and backend development.
                </span>
            </p>
        </section>
    );
}

