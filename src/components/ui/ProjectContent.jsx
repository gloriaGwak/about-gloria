import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectContent({project}) {
    return (
        <>
            <div className='
                md:w-[200px]
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
                md:w-[calc(100%-200px-1rem)] 
                w-full
            '>
                <div> 
                    <strong className='
                        md:text-xl
                        text-lg
                    '>
                        {project.title}
                        {project.url && (
                            <GoArrowUpRight className='
                                inline-block h-5 w-5 transition-transform 
                                group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 
                                motion-reduce:transition-none ml-1 mb-[0.5px] translate-y-px
                            ' />
                        )}
                    </strong>
                    <span className='block'>{project.date}</span>
                    <div className='
                        md:mt-4
                        mt-2
                    '>
                        <p className='
                            
                        '>
                            {project.description}
                        </p>
                        {project.features &&(
                            <dl>
                                <dt className='
                                    mt-2
                                    font-bold
                                '>
                                    Features
                                </dt>
                                <dd>
                                    <ul className=''>
                                    {project.features.map((value, idx) => (
                                        <li key={idx} className='
                                            indent-[-0.5rem]
                                            pl-[1rem]
                                        '>
                                            <span className="inline-block leading-[0] mr-2 align-middle md:text-base md:mr-2">&#183;</span>
                                            {value}
                                        </li>
                                    ))}
                                    </ul>
                                </dd>
                            </dl>
                        )}
                    </div>
                </div>
                <dl className='mt-4'>
                    <dt className='hidden'>Stack</dt>
                    <dd>
                        <ul className='flex gap-2 flex-wrap'>
                        {project.stack.map((stack, idx) => (
                            <li key={idx} className="px-2 border border-[#23424a] rounded-xl">{stack}</li>
                        ))}
                        </ul>
                    </dd>
                </dl>
            </div>
        </>
    );
}

