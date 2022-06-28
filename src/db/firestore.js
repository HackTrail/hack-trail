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
        console.log("Outcome doesn't exist");
        return;
    }
    const currValue = outcomeSnapshot.data().value;

    await updateDoc(outcomeRef, {
        value: currValue + 1
    });
    return currValue;
};

async function questionRefAndSnapshot(questionId) {
    const questionRef = doc(db, 'questions', questionId);
    const questionSnapshot = await getDoc(questionRef);

    return [questionRef, questionSnapshot];
}

export const getQuestionAnswerTally = async (questionId, answerId) => {
    const [, questionSnapshot] = await questionRefAndSnapshot(questionId);
    if (questionSnapshot.exists()) {
        const data = questionSnapshot.data()
        let totalAnswers = 0;
        Object.keys(data).forEach(function(key,) {
            totalAnswers += data[key]
        })
        return [questionSnapshot.data()[answerId], totalAnswers];
    } else {
        console.log("Question doesn't exist");
    }
}

export const incrementQuestionAnswerTally = async (questionId, answerId) => {
    const [questionRef, questionSnapshot] = await questionRefAndSnapshot(questionId);

    if (questionSnapshot.exists()) {
        let currValue = questionSnapshot.data()[answerId];
        currValue++;
        await updateDoc(questionRef, {[answerId]: currValue})
        return currValue
    } else {
        console.log("Question doesn't exist");
    }
}
