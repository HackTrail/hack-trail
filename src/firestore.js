import { db } from './firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";


export const getOutcome = async (id) => {
    const outcomeSnapshot = await getDoc(doc(db, 'results', id));
    if (outcomeSnapshot.exists()) {
        return outcomeSnapshot.data();
    } else {
        console.log("Outcome doesn't exist");
    }
};

export const incrementOutcome = async (id) => {
    const outcomeRef = doc(db, "results", id);
    const outcomeSnapshot = await getDoc(outcomeRef);
    if (!outcomeSnapshot.exists()) {
        console.log("Outcome doesn't exist")
        return;
    }
    const currValue = outcomeSnapshot.data().value

    await updateDoc(outcomeRef, {
        value: currValue + 1
    });
};