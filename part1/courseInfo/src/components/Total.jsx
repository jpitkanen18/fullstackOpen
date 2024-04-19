export const Total = (props) => {
   let total = 0;
   props.course.parts.map(part => total += part.exercises)
   return(
        <p>Number of exercises {total}</p>
   )
}