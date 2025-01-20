import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, get, set, ref } from "firebase/database"; 
import { v4 as uuid } from 'uuid';
import { emailSend } from "./emailjs";
import { logCustomEvent } from "./ga";

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
const analytics = getAnalytics(app);
const database = getDatabase();

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
    logEvent(analytics, "form_submission", {
        form_name: "Contact me",
        success: true,
    });
    return set(ref(database, `inquiries/${uuid()}`), {
        ...inquirie,
        id,
        name: inquirie.name,
        email: inquirie.email,
        message: inquirie.message,
        date: userTime
    });
}

export function handleClickLogEvent(target,section,time) {
    logEvent(analytics, "button_click", {
        target,
        section, 
        time
    });
};

// export function handleExitIntent() {
//     logCustomEvent(analytics, "exit_intent", {
//         page: window.location.pathname,
//         timestamp: new Date().toISOString(),
//     });
// }