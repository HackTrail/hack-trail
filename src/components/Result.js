import React from "react"
import Badges from "./Badges"
import getQuestionAnswerTally from "../db/firestore"

const Result = ({props}) => {
    return (
        <div>
            <div>

            </div>
            Result
            <Badges props={props}/>
        </div>
    )
}

export default Result