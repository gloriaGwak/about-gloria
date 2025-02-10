import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContent from './ProjectContent';
import { logCustomEvent, analytics } from '../../api/firebase';
import { GoArrowUpRight } from "react-icons/go";


export default function ProjectCard({project, path}) {
    return (
        <>
            {path !== '/projects' ? (
                project.show && (
                    <li className='
                        rounded group
                        flex gap-2 mt-10 items-center first:mt-0 flex-wrap
                        md:flex-nowrap md:gap-4 md:mt-6 duration-200 lg:hover:shadow-2xl
                    '>
                        <Link 
                        onClick={() => {logCustomEvent(analytics, `${project.category}_${project.title}`, { 'event_category': 'SectionProjects', 'event_type':'click' });}} 
                        to={project.url} target='_balnk' title='Go to new window' className='
                            lg:p-4
                            lg:border lg:border-mistyBlue lg:p-8 rounded
                            relative
                            flex gap-4 items-stretch
                            flex-wrap
                            lg:hover:border-transparent overflow-hidden
                        '>
                            <div className='
                                md:w-[35%]
                                w-full
                            '>
                                <img
                                    className='rounded'
                                    src={project.image}
                                    alt={project.title} 
                                />
                            </div>
                            <div className='
                                flex flex-col justify-between
                                md:w-[calc(65%-1rem)]
                                w-full
                            '>
                                <div>
                                    <strong>
                                        {project.title}
                                        <GoArrowUpRight className='
                                            inline-block h-5 w-5 transition-transform 
                                            group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 
                                            motion-reduce:transition-none ml-1 mb-[0.5px] translate-y-px
                                        ' />
                                    </strong>
                                    <span className='block text-sm opacity-7'>{project.date}</span>
                                    <p className='
                                        mt-2
                                        md:line-clamp-2 md:mt-4
                                        line-clamp-3
                                    '>
                                        {project.description}
                                    </p>
                                </div>
                                <dl className='
                                    mt-4
                                '>
                                    <dt className='hidden'>Stack</dt>
                                    <dd>
                                        <ul className='flex gap-1 flex-wrap'>
                                        {project.stack.map((stack, idx) => (
                                            <li key={idx} className="px-2 rounded-xl text-sm bg-charcoal text-ivory">{stack}</li>
                                        ))}
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </Link>
                    </li>
                )
            ) : (
                <li className={`mt-14 first:mt-0 lg:mt-8 ${!project.url ? 'flex gap-4 items-stretch flex-wrap rounded lg:border lg:border-mistyBlue lg:p-8' : 'duration-200 lg:hover:shadow-2xl'}
                `}>                    
                    {project.url ? (
                        <Link 
                        onClick={() => {logCustomEvent(analytics, `${project.category}_${project.title}`, { 'event_category': 'AllProjects', 'event_type':'click' });}} 
                        to={project.url} target='_balnk' title='Go to new window' className='
                            lg:border lg:border-mistyBlue lg:p-8 rounded
                            group
                            relative
                            flex gap-4 items-stretch
                            flex-wrap
                            lg:hover:border-transparent
                        '>
                            <ProjectContent project={project} />
                        </Link>
                    ) : (
                        <>
                            <ProjectContent project={project} />
                        </>
                    )}
                </li>
            )}
        </>
    );
}

