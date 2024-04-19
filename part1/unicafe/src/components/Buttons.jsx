
export const Buttons = (props) => {
    return(
        <div>
            {props.feedback.map(feedback => (
                <button key={feedback.name} onClick={feedback.onClick}>{feedback.name}</button>
            ))}
        </div>
    )
}