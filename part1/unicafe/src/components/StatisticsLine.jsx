
import { memo } from 'react'

const StatisticsLineFC = (props) => {
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

export const StatisticsLine = memo(StatisticsLineFC)