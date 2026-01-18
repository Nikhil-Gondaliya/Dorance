import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp
} from "firebase/firestore"
import { db } from "../firebase"

const colRef = collection(db, "items")

export const addItem = async (name) => {
    await addDoc(colRef, {
        name,
        isActive: true,
        createdAt: serverTimestamp()
    })
}

export const getItems = async () => {
    const snap = await getDocs(colRef)
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const disableItem = async (id) => {
    await updateDoc(doc(db, "items", id), { isActive: false })
}

export const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id))
}
