import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { PiCertificate } from "react-icons/pi";
import { getProjects } from '../../api/firebase';


export default function ProjectList({filter}) {
    const { isLoading, error, data: projects } = useQuery({
        queryKey: ['project'],
        queryFn: getProjects,
        // staleTime: 1000 * 60 *5
    });

    const filtered = getFilteredItems(projects, filter);

    return (
        <>
            <ul>
                {projects && projects.length > 0 ? (
                    filtered.map((project, idx) => (
                        project.show && (
                            <li key={idx} className='flex gap-4'>
                                <div className='w-[200px]'>
                                    <img
                                        className=''
                                        src='https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        alt='' 
                                    />
                                </div>
                                <div className='w-[calc(100%-200px-1rem)]'>
                                    <div>
                                        <strong>{project.title}</strong>
                                        <span className='block'>{project.date}</span>
                                        <p>{project.description}</p>
                                    </div>
                                    <dl>
                                        <dt>Stack</dt>
                                        <dd>
                                            <ul className='flex gap-2 flex-wrap'>
                                            {project.stack.map((stack, idx) => (
                                                <li key={idx} className="px-2 border border-[#23424a] rounded-xl">{stack}</li>
                                            ))}
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        )
                    ))
                ) : (
                    <li><p>No projects found</p></li>
                )}
            </ul>
            
            <div className='mt-20'>
                <Link 
                    to='/projects'
                    className='
                        block px-16 py-2 mx-auto bg-mistyBlue rounded-md text-center
                        hover:bg-charcoal hover:text-gray duration-300
                        lg:w-auto
                        md:w-1/2
                        sm:w-full
                '>
                    More
                </Link>
            </div>
        </>
    );
}


function getFilteredItems(projects, filter){
    if(filter === 'all'){
        return projects;
    }
    return projects.filter((project) => project.category === filter);
}