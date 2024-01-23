import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const saveDocument = async (document, data) => {
    try {
        const docRef = await addDoc(collection(db, document), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const getDocumentByProperty = async (document, property, value) => {
    const documents = [];
    const q = query(collection(db, document), where(property, "==", value));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        documents.push(doc);
        console.log(doc.id, " => ", doc.data());
    });
    return documents;
};
