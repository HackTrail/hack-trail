import React from "react"
import Badges from "./Badges"
import getQuestionAnswerTally from "../db/firestore"


const Result = ({props}) => {
    const getQuestionAnsTally = (e) => {
        const tally = getQuestionAnswerTally(1)
    }

    return (
        <div>
            <div>Result is {tally}
            </div>
            <Badges props={props}/>
        </div>
    )
}

export default Result