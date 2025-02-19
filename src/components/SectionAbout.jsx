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
                    I am a Frontend Developer with 2 years and 8 months of experience in building responsive, user-friendly, and accessible web interfaces. I specialize in HTML5, CSS3 (SCSS), JavaScript (ES6), and jQuery with a strong focus on creating pixel-perfect UIs, ensuring cross-browser compatibility, and optimizing performance. I have worked closely with design teams to transform complex layouts into structured, maintainable code while adhering to web accessibility (WCAG) standards.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    During my time at a web agency in South Korea, I collaborated with major companies, working on both maintenance tasks and large-scale projects. Notably, I contributed to a 10-month project developing and renewing websites for 13 subsidiaries. In some projects, I also took on a leadership role, coordinating teams and managing schedules to ensure smooth project execution.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    Recently, I completed the Diploma of Information Technology at TAFE NSW, expanding my expertise in modern frameworks like React and Next.js, as well as backend technologies such as Node.js and MongoDB. While I have yet to use these in client projects, I have applied them in personal projects, gaining hands-on experience with React component-based architecture, API integration, and backend communication.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    I am passionate about building fast, scalable, and visually engaging web solutions while continuously growing as a developer. I thrive on new challenges, enjoy the process of building, and collaborate effectively to propose better solutions. I am eager to contribute to impactful projects and further refine my skills in both frontend and backend development.
                </span>
            </p>
        </section>
    );
}

