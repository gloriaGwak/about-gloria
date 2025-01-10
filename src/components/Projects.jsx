import React from 'react';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
    return (
        <section>
            <SectionTitle text={'Projects'} />
            <ul>
                <li className='flex gap-4'>
                    <div className='w-[200px]'>
                        <img
                            className=''
                            src='https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='' 
                        />
                    </div>
                    <div>
                        <div>
                            <strong>Samyang Group Website Renewal</strong>
                            <span className='block'>10.2022 - 12.2023</span>
                            <p>설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 </p>
                        </div>
                        <dl>
                            <dt>Stack</dt>
                            <dd>
                                <ul className='flex gap-2'>
                                    <li className='px-2 border border-[#23424a] rounded-xl'>JS</li>
                                    <li className='px-2 border border-[#23424a] rounded-xl'>HTML5</li>
                                    <li className='px-2 border border-[#23424a] rounded-xl'>SCSS</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </section>
    );
}

