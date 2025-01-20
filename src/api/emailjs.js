
import emailjs from '@emailjs/browser';

export async function emailSend(inquirie, userTime){
    const templateParams = {
        name: inquirie.name,
        email: inquirie.email,
        message: inquirie.message,
        date: userTime
    };

    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        templateParams
    ).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text,templateParams);
        },
        (error) => {
        console.log('FAILED...', error);
        },
    );
}