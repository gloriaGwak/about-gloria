import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getProjects } from '../../api/firebase';
import ProjectCard from './ProjectCard';


export default function ProjectList({filter}) {
    const location = useLocation();
    // const { isLoading, error, data: projects } = useQuery({
    const { data: projects } = useQuery({
        queryKey: ['project'],
        queryFn: getProjects,
        // staleTime: 1000 * 60 *5
    });

    const filtered = getFilteredItems(projects, filter);

    return (
        <> 
            <ul className='
                
            '>
                {projects && projects.length > 0 && (
                    filtered.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                            path={location.pathname}
                        />
                    ))
                )}
            </ul>
        </>
    );
}


function getFilteredItems(projects, filter){
    if(filter === 'all'){
        return projects;
    }
    return projects.filter((project) => project.category === filter);
}