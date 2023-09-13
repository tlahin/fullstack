import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  function GetRandomInt(max) {
    return (Math.floor(Math.random() * Math.floor(max)));
  };

  function FindMostVoted() {
    const arr = Object.values({...points});
    const biggest = Math.max(...arr);
    return (Object.keys(points).find(key => points[key] === biggest));
  }

  const SetVote = () => {
    SetMostVoted(FindMostVoted());
    const PointsCopy = {...points};
    PointsCopy[selected] += 1;
    SetPoints(PointsCopy);
  }

  const [selected, SetSelected] = useState(0);
  const [points, SetPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0});
  const [MostVoted, SetMostVoted] = useState(0);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes.
      <div>
        <button onClick = {SetVote}>Vote</button>
        <button onClick = {() => SetSelected(GetRandomInt(anecdotes.length))}>Next anecdote</button>
      </div>
      <div>
        <h2>anecdote with most votes</h2>
        {anecdotes[MostVoted]}
        <br></br>
        has {points[MostVoted]} votes.
      </div>
    </div>
  )
}

export default App