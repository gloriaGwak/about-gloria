import React from 'react';
import SectionTitle from './ui/SectionTitle';

export default function About() {
    return (
        <section 
            id='about' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'About'} />
            <p>
                <span className='block'>
                    I am a frontend developer passionate about creating fast, user-friendly, visually appealing, and accessible websites. I embrace new challenges, enjoy the process of building, and collaborate effectively to propose better solutions.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    With 2 years and 8 months of commercial experience at a web agency in South Korea, I've had the opportunity to collaborate with major companies. During this time, I worked on everything from maintenance tasks to large-scale projects, including the 10-month renewal and development of websites for 13 subsidiaries. In some projects, I also took on a leadership role, helping to coordinate teams and manage schedules to ensure smooth project execution.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    Recently, I completed the Diploma of Information Technology at TAFE NSW, where I deepened my frontend development skills and expanded my expertise in modern frameworks like React and backend technologies such as Node.js.
                </span>
                <span className='block lg:mt-10 mt-6'>
                    I'm passionate about delivering user-friendly, visually engaging web solutions while continually growing my skills in both frontend and backend development. I'm eager to contribute to impactful projects and take on new challenges to further grow as a developer.
                </span>
            </p>
        </section>
    );
}

