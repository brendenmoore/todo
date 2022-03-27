import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function TodoItem({ todo: { title, completed, id } }) {
	const [completedState, setCompleted] = useState(completed)
	const toggleCompleted = () => {
		setCompleted(!completedState)
	}
	return (
		<li className={`
		w-full 
		p-3 md:p-4
		bg-gray-200 
		text-gray-800 
		text-lg sm:text-xl md:3xl
		flex 
		items-center 
		rounded-lg 
		shadow 
		${completedState ? "line-through" : ""}`}>
				<input onChange={toggleCompleted} checked={completedState} className="mr-7 w-9 h-9 rounded cursor-pointer border-gray-300 focus:ring-1 focus-ring-offset-2 focus:ring-gray-500 focus:border-transparent text-green-400" type="checkbox" name="done" id="done" />
				<Link to={`/${id}`}>
				{title || "No title"}
		</Link>
			</li>
	)
}

export default TodoItem