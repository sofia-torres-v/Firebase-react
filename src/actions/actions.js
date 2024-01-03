import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const saveDocument = async (document, data) => {
    try {
        const docRef = await addDoc(collection(db, document), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
