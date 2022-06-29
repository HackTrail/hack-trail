import React from "react"
import {getBadgesRecord} from "../utils/utils";

const Badges = ({props}) => {
    return (
        <div className={"badgeDisplayCase"}>
            <p>Badges Achieved So Far</p>
            <div class="badgeRow">
                {
                    getBadgesRecord().map((badge) => {
                        return (<div className="badge" key={uuidv4()} id={badge}>`${badge}`</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Badges