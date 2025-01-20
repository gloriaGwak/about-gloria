import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PiCertificate } from "react-icons/pi";
import { getCareers } from '../../api/firebase';


export default function CareerList({filter}) {
    const { data: careers } = useQuery({
        queryKey: ['career'],
        queryFn: getCareers,
        // staleTime: 1000 * 60 *5
    });

    const filtered = getFilteredItems(careers, filter);

    return (
        <ul>
            {careers && careers.length > 0 ? (
                filtered.map((career, idx) => (
                    <li key={idx} className='
                        flex gap-1 flex-wrap mt-12 items-start first:mt-0
                        lg:gap-4 lg:flex-nowrap
                    '>
                        <span className='
                            lg:w-[140px]
                            w-full
                            text-sm
                            opacity-7
                        '>
                            {career.date}
                        </span>
                        <div className='
                            lg:w-[calc(100%-140px-1rem)]
                            w-full
                        '>
                            <strong className="inline-block align-middle font-semibold text-[0]">
                                <span className="inline-block align-middle text-base"> 
                                    {career.category === "education" && (
                                        <PiCertificate className="inline-block w-[22px] h-[22px] mr-1" />
                                    )}
                                    {career.title}
                                    <span className="block text-[0px] leading-[0] mx-0 md:inline-block align-middle md:text-base md:mx-2">&#183;</span>
                                    <span className="inline-block align-middle font-normal text-sm">{career.careerName}</span>
                                </span>
                            </strong>
                            {/* <span className="block">{career.careerName}</span> */}
                            <p className='mt-4'>{career.description}</p>
                        </div>
                    </li>
                ))
            ) : (
                <li>
                    <p>No careers found</p>
                </li>
            )}
        </ul>
    );
}


function getFilteredItems(careers, filter){
    if(filter === 'all'){
        return careers;
    }
    return careers.filter((career) => career.category === filter);
}
