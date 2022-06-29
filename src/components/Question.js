import React from "react";
import './Question.css';
import { v4 as uuidv4 } from 'uuid';
import { recordChoice } from '../utils/utils';

const Question = (props) => {
    const scoreAndContinue = (e) => {
        recordChoice(props.id, e.target.id)
        const choiceIndex = e.target.id - 1
        const densityEffect = props.options[choiceIndex].densityEffect
        const infrastructureEffect = props.options[choiceIndex].infrastructureEffect
        props.updateScores(densityEffect, infrastructureEffect)

        props.nextEvent(choiceIndex)

    }

    return (
        <div>
            <div className="question">{props.question}</div>
            <div className="options">
                {
                    props.options.map((each, index) => {
                        return (<button className="option" key={uuidv4()} id={each.choiceId} onClick={scoreAndContinue}>
                                {index+1 + ". " + each.option}
                            </button>)
                    })
                }
            </div>
        </div>
    );
}

export default Question
