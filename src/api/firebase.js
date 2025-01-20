import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, get, set, ref } from "firebase/database"; 
import { v4 as uuid } from 'uuid';
import { emailSend } from "./emailjs";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
export const analytics = getAnalytics(app);

export async function getProjects (){
    try {
        const snapshot = await get(ref(database, 'projects'));
        if (snapshot.exists()) {
            return Object.values(snapshot.val()); // Return value if data exists
        } else {
            return []; // Return empty array if data does not exists
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return empty array if error occured 
    }
}

export async function getCareers (){
    try {
        const snapshot = await get(ref(database, 'careers'));
        if (snapshot.exists()) {
            return Object.values(snapshot.val()); // Return value if data exists
        } else {
            return []; // Return empty array if data does not exists
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return empty array if error occured 
    }
}

export async function makeInquirie(inquirie){
    const id = uuid();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timestamp = new Date();
    const userTime = new Date(
        timestamp.toLocaleString("en-US", { timeZone: userTimeZone })
    );
    
    emailSend(inquirie, userTime);

    return set(ref(database, `inquiries/${uuid()}`), {
        ...inquirie,
        id,
        name: inquirie.name,
        email: inquirie.email,
        message: inquirie.message,
        date: userTime
    });
}

// export function handleExitIntent() {
//     logCustomEvent(analytics, "exit_intent", {
//         page: window.location.pathname,
//         timestamp: new Date().toISOString(),
//     });
// }


/**
 * Firebase Analytics에 커스텀 이벤트를 로깅하는 함수.
 *
 * @param {string} eventName - event name (e.g. "button_click").
 * @param {object} params - parameter in event (e.g. { target, section, time }).
 * @param {object} analytics - Firebase analytics instance.
 */
export function logCustomEvent(analytics, eventName, params = {}) {
    if (!analytics) {
        console.error("undefined Analytics Object");
        return;
    }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timestamp = new Date();
    const userTime = new Date(
        timestamp.toLocaleString("en-US", { timeZone: userTimeZone })
    );

    const clickTime = userTime.toISOString();

    // add click time in params
    params = {
        ...params,
        clickTime
    };
    try {
        logEvent(analytics, eventName, params);
        // console.log(`successed event logging: ${eventName}`, params);
    } catch (error) {
        // console.error(`failed event logging: ${eventName}`, error);
    }
}