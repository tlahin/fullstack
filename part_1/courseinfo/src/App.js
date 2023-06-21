
const Header = (props) => {
	return ( 
		<h1> {props.course} </h1>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part = {props.parts[0].title} exercises = {props.parts[0].exercises} />
			<Part part = {props.parts[1].title} exercises = {props.parts[1].exercises} />
			<Part part = {props.parts[2].title} exercises = {props.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	return (
		<p>
			Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
		</p>
	)
}

const App = () => {

	const course = {
		title: 'Half Stack application development',
		parts: [
			{
				title: 'Fundamentals of React',
				exercises: 10
			},
			{
				title: 'Using props to pass data',
				exercises: 7
			},
			{
				title: 'State of a component',
				exercises: 14
			}
		]
	}

	return (
		<div>
			<Header title = {course.title} />
			<Content parts = {course.parts} />
			<Total parts = {course.parts} />
		</div>
	)
}

export default App