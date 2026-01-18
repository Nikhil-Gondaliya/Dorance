import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const colRef = collection(db, "products");

export const addProduct = async (productData) => {
    await addDoc(colRef, {
        ...productData,
        createdAt: serverTimestamp(),
    });
};

export const getProducts = async () => {
    const snap = await getDocs(colRef);

    return snap.docs.map((d) => ({
        docId: d.id,          // ✅ Firestore document ID
        ...d.data(),          // may include numeric `id`
    }));
};

export const updateProduct = async (docId, productData) => {
    await updateDoc(doc(db, "products", docId), productData);
};

export const deleteProduct = async (docId) => {
    await deleteDoc(doc(db, "products", docId)); // ✅ correct
};
