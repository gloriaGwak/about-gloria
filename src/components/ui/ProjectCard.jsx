import React from 'react';
import { Link } from 'react-router-dom';
import ProjectContent from './ProjectContent';


export default function ProjectCard({project, path}) {
    return (
        <>
            {path !== '/projects' ? (
                project.show && (
                    <li className='
                        flex gap-2 mt-12 items-center first:mt-0 flex-wrap
                        md:flex-nowrap md:gap-4 md:mt-8
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
                                <strong>{project.title}</strong>
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
                    </li>
                )
            ) : (
                <li className={`mt-14 first:mt-0 lg:mt-8 ${!project.url ? 'flex gap-4 items-stretch flex-wrap rounded lg:border lg:border-mistyBlue lg:p-8' : 'duration-200 lg:hover:shadow-2xl'}
                `}>                    
                    {project.url ? (
                        <Link to={project.url} target='_balnk' title='Go to new window' className='
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

