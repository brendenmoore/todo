import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../todoService'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

function TodoList() {

	const [todos, setTodos] = useState([])
	const [sortDirection, setSortDirection] = useState("ASC")

	useEffect(async () => {
		setTodos((await getAllTodos()).slice(0, 10))
	}, [])

	const sortFunction = (a, b) => {
		const asc = sortDirection === "ASC"
		if (a.title > b.title) {
			return asc ? 1 : -1
		} if (a.title < b.title) {
			return asc ? -1 : 1
		}
		return 0;
	}

	const toggleSort = () => {
		setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC")
	}

	return (
		<div className="bg-white p-5 rounded-lg">
			<AddTodo />
			<button onClick={toggleSort} className="my-5 text-xl text-gray-600 pl-2">Sort {sortDirection === "DESC" ? "▼" : "▲"}</button>
			{todos && <ul className="w-full space-y-5">
				{todos.sort(sortFunction).map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>) }
			</ul> }
		</div>
	)
}

export default TodoList