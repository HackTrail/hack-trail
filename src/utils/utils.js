import {incrementQuestionAnswerTally} from "../db/firestore";

export function getChoicesRecord(){
	let choices = localStorage.getItem('choices');
	if (choices) {
	    return JSON.parse(choices);
    } else {
	    return null;
    }
}

function setChoicesRecord(choices) {
	localStorage.setItem('choices', JSON.stringify(choices));
}

export function clearChoicesRecord() {
	localStorage.removeItem('choices');
}

export function recordChoice(questionId, choiceId) {
    let choices = getChoicesRecord();
    if (!choices) {
        choices = []
    }
    choices.push({[questionId]: `${choiceId}`})
    setChoicesRecord(choices)

    incrementQuestionAnswerTally(`${questionId}`, `${choiceId}`)
}
