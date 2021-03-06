import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../todoService'
import TodoSearch from './TodoSearch'
import TodoItem from './TodoItem'
import Pagination from './Pagination'

function TodoList() {

	const [todos, setTodos] = useState([])
	const [sortDirection, setSortDirection] = useState("ASC")
	const [searchQuery, setSearchQuery] = useState("")

	useEffect(() => {
		getAllTodos().then(todos => setTodos(todos))
	}, [])

	const sortFunction = (a, b) => {
		const asc = sortDirection === "ASC"
		if (a.title > b.title) return asc ? 1 : -1
		if (a.title < b.title) return asc ? -1 : 1
		return 0
	}

	const toggleSort = () => {
		setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC")
	}

	return (
		<div>
			<TodoSearch query={searchQuery} onChange={setSearchQuery} />
			<button onClick={toggleSort} className="my-3 sm:my-5 text-md sm:text-lg text-gray-600 pl-2">Sort {sortDirection === "DESC" ? "▼" : "▲"}</button>
			{todos.length > 0 ? (
				<Pagination 
					RenderComponent={TodoItem} 
					wrapperClassName="w-full space-y-3 sm:space-y-5"
					dataLimit={10}
					siblingCount={2}
					data={todos
						.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))
						.sort(sortFunction)}
				/>
			) : (
				<h1>No Todos to display</h1>
			)}
		</div>
	)
}

export default TodoList