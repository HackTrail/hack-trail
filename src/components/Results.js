import React from "react"
import Badges from "./Badges"
import getQuestionAnswerTally from "../db/firestore"


const Results = ({data}) => {
    const getQuestionAnsTally = (e) => {
        const tally = getQuestionAnswerTally(1)
    }

    return (
        <div>
            <div>Result is {tally}
            </div>
            <Badges props={data}/>
        </div>
    )
}

export default Result