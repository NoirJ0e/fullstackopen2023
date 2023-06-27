import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )

  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / sum
  const positive = props.good / sum * 100
  return (
    <div>
      <TableView text='good' value={props.good} />
      <TableView text='neutral' value={props.neutral} />
      <TableView text='bad' value={props.bad} />
      <TableView text='all' value={sum} />
      <TableView text='average' value={average} />
      <TableView text='positive' value={positive} />
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const TableView = (props) => {
  if (props.text == 'positive') {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{props.text}</td>
              <td>{props.value} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{props.text}</td>
              <td>{props.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default App;
