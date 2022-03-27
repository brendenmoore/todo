import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function TodoItem({ todo: { title, completed, id } }) {
	const [completedState, setCompleted] = useState(completed)
	const toggleCompleted = () => {
		setCompleted(!completedState)
	}
	return (
		<li className={"w-full bg-gray-200 text-gray-800 text-2xl sm:text-3xl md:text-4xl p-6 flex items-center rounded-lg shadow " + (completedState ? "line-through" : "")}>
				<input onChange={toggleCompleted} checked={completedState} className="mr-7 w-9 h-9 rounded cursor-pointer border-gray-300 focus:ring-1 focus-ring-offset-2 focus:ring-gray-500 focus:border-transparent text-green-400" type="checkbox" name="done" id="done" />
				<Link to={`/${id}`}>
				{title || "No title"}
		</Link>
			</li>
	)
}

export default TodoItem