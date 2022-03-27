import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

	return (
		<div>TodoDetails
			<p>{id}</p>
			<p>{todo ? todo.title : "Loading"}</p>
			<p>{user ? user.name : "Loading User"}</p>
		</div>
	)
}

export default TodoDetails