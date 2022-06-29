import React from "react"
import Badges from "./Badges"
import { getQuestionAnswerTally } from '../db/firestore'

const Results = ({questions, resetGame}) => {
    const getTallies = async () => {
        let tallies = []
        for (const question of questions) {
            const index = question.id
            tallies[index] = []
    
            let dict = {}
            for (const option of question.question.options) {
                const tallyRes = await getQuestionAnswerTally(String(question.id), String(option.choiceId))
                const keyVal = option.choiceId
                dict[String(keyVal + "test")] = tallyRes
            }

            tallies[index].push(dict)
        }

        console.log(tallies)
        return tallies
      }


    const getDataMapping = async () => {
        let list = []
        let tallies = await getTallies()
        console.log(tallies)
        questions.forEach(question => {
            const talliesForQuestion = tallies[question.id]
            const questionMapping = {
                'text': question.question.text,
                'choices': [
                    question.question.options.map(option => {
                        const id = option.choiceId
                        console.log(talliesForQuestion['1test'])
                        return {
                            "text": option.option,
                            "tallies": talliesForQuestion
                        }
                    })
                ]
            }
            list.push(questionMapping)
        })
        console.log(list)
        return list
    }

    getDataMapping()

    return (
        <div className="wrapper">
            <h2>What did others choose?</h2>
            <Badges />
            <button onClick={resetGame}>Replay?</button>
        </div>
    )
}

export default Results