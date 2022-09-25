import { addDoc, collection } from "firebase/firestore";
import { db } from '../main.js'


export async function addSomething(newTravel) {
    try {
        const docRef = await addDoc(collection(db, "destinations"), {
            country: country.value,
            description: decription.value,
            places: "Rome, Venice, Bologna",
            prices: "2000-3500"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
