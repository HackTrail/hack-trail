import React, { useState, useEffect } from "react"
import Badges from "./Badges"
import { getQuestionAnswerTally } from '../db/firestore'

const Results = ({questions, resetGame}) => {
    const [mappings, setMappings] = useState([])

    const getTallies = async () => {
        let tallies = []
        for (const question of questions) {
            const index = question.id
            tallies[index] = []
    
            let dict = {}
            for (const option of question.question.options) {
                const tallyRes = await getQuestionAnswerTally(String(question.id), String(option.choiceId))
                const keyVal = option.choiceId
                dict[keyVal] = tallyRes
            }

            tallies[index].push(dict)
        }

        return tallies
      }

    const getDataMappings = async () => {
        let list = []
        let tallies = await getTallies()
        questions.forEach(question => {
            const talliesForQuestion = tallies[question.id]
            const questionMapping = {
                'text': question.question.text,
                'choices': [
                    question.question.options.map(option => {
                        const id = option.choiceId
                        return {
                            "text": option.option,
                            "tallies": talliesForQuestion[0][id]
                        }
                    })
                ]
            }
            list.push(questionMapping)
        })
        return list
    }

    useEffect(() => {
        (async () => {
          const data = await getDataMappings();
          setMappings(data);
          console.log(mappings)
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className="wrapper">
            <h2>What did others choose?</h2>
            <div className="result-prompt">
                {
                    mappings.map((mapping) => {
                        return (
                            <div>
                                <p className="prompt">{mapping["text"]}</p>
                                <div className="choices">
                                {
                                    mapping.choices[0].map((choice) => {
                                        console.log(choice)
                                        return (
                                            <div className="choice-wrapper">
                                                <p className="choice">{choice["text"]}</p>
                                                <p className="tally">{choice["tallies"]}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Badges />
            <button onClick={resetGame}>Replay?</button>
        </div>
    )
}

export default Results