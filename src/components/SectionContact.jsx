import React from 'react';
import SectionTitle from './ui/SectionTitle';

export default function SectionContact({ref}) {
    return (
        <section 
            ref={ref}
            id='contact' 
            className='pt-16 lg:pt-24'
        >
            <SectionTitle text={'Contact'} />
            <strong>Let's Work Together</strong>
            <p>I'm always excited to collaborate on new projects and help others improve their project. Feel free to reach out, and let's create something amazing together!</p>
        </section>

    );
}

