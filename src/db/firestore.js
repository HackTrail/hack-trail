import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


// Get the number of times players have recorded this outcome
export const getOutcomeTally = async (outcomeId) => {
    const outcomeSnapshot = await getDoc(doc(db, 'results', outcomeId));
    if (outcomeSnapshot.exists()) {
        return outcomeSnapshot.data()['value'];
    } else {
        console.log("Outcome doesn't exist");
    }
};

const setOutcome = async (outcomeId) => {
    let outcomeRef = doc(db, 'results', outcomeId)
    await setDoc(outcomeRef, {})
}

// Increment the tally for this outcome
export const incrementOutcomeTally = async (outcomeId) => {
    const outcomeRef = doc(db, "results", outcomeId);
    let outcomeSnapshot = await getDoc(outcomeRef);

    if (!outcomeSnapshot.exists()) {
        await setOutcome(outcomeId);
        outcomeSnapshot = await getDoc(outcomeRef);
    }

    let currValue = outcomeSnapshot.data()['value'];
    if (!currValue) {
        currValue = 1;
    } else {
        currValue++;
    }

    await updateDoc(outcomeRef, {
        value: currValue
    });

    return currValue
};

async function questionRefAndSnapshot(questionId) {
    const questionRef = doc(db, 'questions', questionId);
    const questionSnapshot = await getDoc(questionRef);

    return [questionRef, questionSnapshot];
}

// Get the number of times players have answered this question with this answer and the total number of times players have answered this question
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

export async function setQuestion(questionId) {
    let questionRef = doc(db, 'questions', questionId)
    await setDoc(questionRef, {})
}

// Increment the tally for this answer for this question
export const incrementQuestionAnswerTally = async (questionId, answerId) => {
    let [questionRef, questionSnapshot] = await questionRefAndSnapshot(questionId);

    if (!questionSnapshot.exists()) {
        await setQuestion(questionId);
        [questionRef, questionSnapshot] = await questionRefAndSnapshot(questionId);
    }

    let currValue = questionSnapshot.data()[answerId];
    if (!currValue) {
        currValue = 1;
    } else {
        currValue++;
    }

    await updateDoc(questionRef, {[answerId]: currValue});

    return currValue
}
