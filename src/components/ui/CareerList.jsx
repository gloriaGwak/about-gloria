import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PiCertificate } from "react-icons/pi";
import { getCareers } from '../../api/firebase';


export default function CareerList({filter}) {
    const { isLoading, error, data: careers } = useQuery({
        queryKey: ['career'],
        queryFn: getCareers,
        // staleTime: 1000 * 60 *5
    });

    const filtered = getFilteredItems(careers, filter);

    return (
        <ul>
            {careers && careers.length > 0 ? (
                filtered.map((career, idx) => (
                    <li key={idx} className="mt-12 first:mt-0">
                        <div>
                            <strong className="inline-block align-middle">
                                {career.filter === "education" && (
                                    <PiCertificate className="inline-block w-[25px] h-[25px] mr-1 align-middle" />
                                )}
                                {career.careerName}
                            </strong>
                            <span className="block">{career.title}</span>
                            <span className="block">{career.date}</span>
                            <p>{career.description}</p>
                        </div>
                    </li>
                ))
            ) : (
                <p>No careers found</p>
            )}
        </ul>
    );
}


function getFilteredItems(careers, filter){
    if(filter === 'all'){
        return careers;
    }
    return careers.filter((career) => career.filter === filter);
}
