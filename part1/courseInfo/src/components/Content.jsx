import { Part } from "./Part"

export const Content = (props) => {
    return (
      <div>
        {props.course.parts && props.course.parts.map((part, index) => (
            <Part key={index} name={part.name} exercises={part.exercises}/>
        ))}
      </div>
    )
}