import React from "react"
import "./Badges.css"
import { v4 as uuidv4 } from 'uuid';
import {getBadgesRecord} from "../utils/utils";

const Badges = ({props}) => {
    return (
        <div className="badgeDisplayCase">
            <p>Badges Achieved So Far</p>
            <div className="badgeRow">
                {
                    getBadgesRecord().map((badge) => {
                        return (<div className="badge" key={uuidv4()} id={badge}>{badge}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Badges