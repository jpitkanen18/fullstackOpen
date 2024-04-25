import { useCallback, useState, useMemo } from 'react'

const App = () => {
  const anecdotes = useMemo(() => (
    [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      'The only way to go fast, is to go well.'
    ]
  ), [])

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const [highest, setHighest] = useState(-1);
   
  const [selected, setSelected] = useState(0)

  const getRandomIndex = useCallback(() => {
    return Math.floor(Math. random() * ((anecdotes.length - 1) - 0 + 1)) + 0
  }, [anecdotes.length])

  const getPseudoRandomIndex = useCallback((lastIndex) => {
    let pseudoIndex = getRandomIndex();
    while(pseudoIndex === lastIndex){
      pseudoIndex = getRandomIndex();
    }
    return pseudoIndex
  }, [getRandomIndex])
 
  return (
    <div style={styles.container}>
      <h1>Anecdote of the day</h1>
      <span>{anecdotes[selected]}</span>
      <span>{`has ${votes[selected]} votes`}</span>
      <div>
        <button style={{width: 'fit-content'}} onClick={() => setVotes(prevState => {
          let newState = [...prevState];
          newState[selected] += 1
          if(highest === -1 || newState[highest] < newState[selected]){
            setHighest(selected);
          }
          return newState
        })}>Vote</button>
        <button style={{width: 'fit-content'}} onClick={() => setSelected(lastSelected => getPseudoRandomIndex(lastSelected))}>Next anecdote</button>
      </div>
      <h1>Anecdote with the highest votes:</h1>
      <span>{highest !== -1 ? `${anecdotes[highest]} has ${votes[highest]} votes` : 'No votes'}</span>
    </div>
  )
} 

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    
  }
}

export default App