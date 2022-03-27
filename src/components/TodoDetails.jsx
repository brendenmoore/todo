import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTodoById, getUserById } from '../todoService'

function TodoDetails() {

	const {id} = useParams()

	const [{todo, user}, setState] = useState({todo: null, user: null})

	useEffect(() => {
		async function fetchData() {
			const todo = await getTodoById(id)
			const user = await getUserById(todo.userId)
			setState({todo: todo, user: user})
		}
		fetchData()
	}, [])

	return user ? (
		<div className="">
			<Link to="/" className="text-4xl">←</Link>
			<h1 className="text-2xl mb-5 font-bold">{todo.title}</h1>
			<p><b>Id:</b> {id}</p>
			<p><b>Completed:</b> {todo.completed.toString()}</p>
			<p><b>Created By:</b> {user.name}</p>
		</div>
	) : <p>Loading</p>
}

export default TodoDetails