import React from "react"
import Badges from "./Badges"


const Results = ({resetGame}) => {

    // const tally = getQuestionAnswerTally(1)

    return (
        <div className="wrapper">
            {/*<div>Result is {tally}*/}
            {/*</div>*/}
            <Badges />
            <button onClick={resetGame}>Replay?</button>
        </div>
    )
}

export default Results