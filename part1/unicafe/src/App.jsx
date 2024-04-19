import { useState } from 'react'
import { Header, Buttons, Statistics } from './components'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = [
    {
      name: "Good",
      value: good,
      onClick: () => setGood(prevState => prevState + 1)
    },
    {
      name: "Neutral",
      value: neutral,
      onClick: () => setNeutral(prevState => prevState + 1)
    },
    {
      name: "Bad",
      value: bad,
      onClick: () => setBad(prevState => prevState + 1)
    }
  ]

  return (
    <div>
      <Header title="Give feedback"/>¨
      <Buttons feedback={feedback}/>
      <Header title="Statistics"/>
      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App