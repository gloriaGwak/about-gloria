import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Form from './ui/Form';

export default function SectionContact({ref}) {

    return (
        <section 
            ref={ref}
            id='contact' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'Contact'} />
            <p className='
                md:text-balance
            '>
                <strong className='
                    block
                    md:text-xl
                    text-lg
                '>
                    Let's Work Together
                </strong>
                <span className='block'>
                    I'm always excited to collaborate on new projects and help others improve their project. Feel free to reach out, and let's create something amazing together!
                </span>
            </p>
            <Form />
        </section>
    );
}

