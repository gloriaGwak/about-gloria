import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, get, ref } from "firebase/database"; 


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

// export async function getProducts(){
//     return get(ref(database, 'products'))
//     .then((snapshot) => {
//         if(snapshot.exists()){
//             return Object.values(snapshot.val());
//         }
//         return [];
//     })
// }
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
