import React from "react"
import { StatisticsLine } from "./StatisticsLine";


export const Statistics = (props) => {
    const getAverage = React.useCallback((feedbacks) => {
        let numEntries = 0;
        let total = 0;
        let goodFeedbacks = 0;
        feedbacks.map(feedback => {
            numEntries += feedback.value
            switch(feedback.name){
                case "Good":
                    goodFeedbacks === 0 && (goodFeedbacks = feedback.value)
                    total += (1 * feedback.value)
                    break
                case "Bad":
                    total += (-1 * feedback.value)
                    break
                default:
                    return
            }
        })
        return {numEntries, average: total / (numEntries || 1), positivePercentage: `${(goodFeedbacks / numEntries) * 100} %`}
    }, [])

    if(!props.feedback.some(feedback => feedback.value > 0)){
        return <h3>No Feedbacks given</h3>
    }

    return(
        <table>
           <tbody>
                {props.feedback.map(feedback => (
                    <StatisticsLine key={feedback.name} text={feedback.name} value={feedback.value} />
                ))}
                <StatisticsLine text="All" value={getAverage(props.feedback).numEntries}/>
                <StatisticsLine text="Average" value={getAverage(props.feedback).average}/>
                <StatisticsLine text="Positive" value={getAverage(props.feedback).positivePercentage}/>
           </tbody>
        </table>
    )
}