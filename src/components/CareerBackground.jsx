import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { PiCertificate } from "react-icons/pi";


export default function CareerBackground() {
    return (
        <section>
            <SectionTitle text={'Career Background'} />
            <ul>
                <li className=''>
                    <div>
                        <strong className='block'><PiCertificate className='w-[25px] h-[25px]' />TAFE NSW, Sydney</strong>
                        <span className='block'>Diploma of Education, Information Technology</span>
                        <span className='block'>Jul.2024 - Dec.2024</span>
                        <p>I have successfully completed my Diploma of IT at TAFE NSW, where I focused on both front-end and back-end development. Throughout this program, I deepened my knowledge of previously learned technologies and explored new areas. I gained experience with MongoDB and NoSQL databases, as well as Node.js and its framework, Express.js, for server-side development. Additionally, I studied strategic planning and quality assurance (QA), which complement my technical skills and prepare me for advanced roles in IT.</p>
                    </div>
                </li>
                <li className='mt-12'>
                    <div>
                        <strong className='block'>The Uber Creative, Seoul</strong>
                        <span className='block'>UI Developer</span>
                        <span className='block'>Jan.2021 - Aug.2023</span>
                        <p>As a UI Developer, I have contributed to designing and developing innovative, award-winning websites across various industries. My expertise lies in creating responsive, user-focused interfaces using modern web technologies such as HTML5, CSS3, SCSS, and JavaScript to ensure seamless functionality across devices.
                        <br/>
                        Beyond development, I have worked closely with cross-functional teams to align technical solutions with project goals, enabling effective communication and efficient workflows. I have also taken on leadership responsibilities, such as managing schedules, coordinating efforts across departments, and ensuring timely delivery of high-quality digital solutions.
                        <br/>
                        I am passionate about crafting exceptional digital experiences that combine technical precision with a deep understanding of user needs.</p>
                    </div>
                </li>
                <li className='mt-12'>
                    <div>
                        <strong className='block'><PiCertificate className='w-[25px] h-[25px]' />Green Computer Art Academy, Seoul</strong>
                        <span className='block'>UI/UX Web Publisher & Front-End Developer Training Program</span>
                        <span className='block'>Jun.2020 - Dec.2020</span>
                        <p>I have completed a comprehensive front-end development training program, where I gained foundational skills in HTML5, CSS, SCSS, JavaScript, and React, along with experience in XML, JSON, and PHP. This program provided the essential knowledge to build responsive, interactive web applications and prepared me for more advanced roles in IT.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

