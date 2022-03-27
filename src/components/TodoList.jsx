import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../todoService'
import TodoSearch from './TodoSearch'
import TodoItem from './TodoItem'

function TodoList() {

	const [todos, setTodos] = useState([])
	const [sortDirection, setSortDirection] = useState("ASC")
	const [searchQuery, setSearchQuery] = useState("")

	useEffect(() => {
		async function fetchData() {
			setTodos((await getAllTodos()))
		}
		fetchData();
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

	const handleSearchChange = (query) => {
		setSearchQuery(query)
	}

	return (
		<div>
			<TodoSearch query={searchQuery} onChange={handleSearchChange}/>
			<button onClick={toggleSort} className="my-5 text-md sm:text-lg text-gray-600 pl-2">Sort {sortDirection === "DESC" ? "▼" : "▲"}</button>
			<ul className="w-full space-y-5">
				{todos
				.filter(todo => todo.title.includes(searchQuery))
				.sort(sortFunction)
				.map(todo => <TodoItem key={todo.id} todo={todo}></TodoItem>) }
			</ul>
		</div>
	)
}

export default TodoList