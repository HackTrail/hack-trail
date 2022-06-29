import React from "react"
import Badges from "./Badges"
import getQuestionAnswerTally from "../db/firestore"


const Results = () => {

    // const tally = getQuestionAnswerTally(1)

    return (
        <div>
            {/*<div>Result is {tally}*/}
            {/*</div>*/}
            <Badges />
        </div>
    )
}

export default Results