
import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    // blockList: {
    //   list: ['foo@emailjs.com', 'bar@emailjs.com'], // 차단할 이메일
    //   watchVariable: 'userEmail', // 감시할 변수
    // },
    limitRate: {
        id: 'app',
        throttle: 10000, // request once per one sendond
    },
});

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
            // console.log('SUCCESS!', response.status, response.text,templateParams);
            console.log('SUCCESS!');
        },
        (error) => {
        console.log('FAILED...', error);
        },
    );
}