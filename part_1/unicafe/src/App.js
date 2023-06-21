import { useState } from 'react'

const StatisticLine = (props) => {
	return (
		<p>
			{props.text} {props.value}
		</p>
	)
}

const Stats = (props) => {
	if (props.data.stats[3].value) {
		return (
			<div>
				<StatisticLine text = {props.data.stats[0].text} value = {props.data.stats[0].value} />
				<StatisticLine text = {props.data.stats[1].text} value = {props.data.stats[1].value} />
				<StatisticLine text = {props.data.stats[2].text} value = {props.data.stats[2].value} />
				<StatisticLine text = {props.data.stats[3].text} value = {props.data.stats[3].value} />
				<StatisticLine text = {props.data.stats[4].text} value = {props.data.stats[4].value} />
				<StatisticLine text = {props.data.stats[5].text} value = {props.data.stats[5].value} />
			</div>
		)
	}
	return (
		<div>
			No feedback given
		</div>
	)
}

const Button = (props) => (
	<button onClick = {props.handleClick}>
		{props.text}
	</button>
)

const App = () => {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)

	const handleGoodClick = () => {
		setGood(good + 1)
		setTotal(total + 1)
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1)
		setTotal(total + 1)
	}

	const handleBadClick = () => {
		setBad(bad + 1)
		setTotal(total + 1)
	}

	const data = {
		stats: [
			{
				text: "Good",
				value: good
			},
			{
				text: "Neutral",
				value: neutral
			},
			{
				text: "Bad",
				value: bad
			},
			{
				text: "Total",
				value: total
			},
			{
				text: "Avg",
				value: (good - bad) / 3
			},
			{
				text: "Positive",
				value: good / total * 100
			}
		]
	}

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button handleClick = {handleGoodClick} text = "Good" />
			<Button handleClick = {handleNeutralClick} text = "Neutral" />
			<Button handleClick = {handleBadClick} text = "Bad" />
			<h1>Statistic</h1>
			<Stats data = {data} />
		</div>
	)
}

export default App