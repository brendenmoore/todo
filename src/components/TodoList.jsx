import React from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

function TodoList() {
  return (
	<div className="">
		<AddTodo/>
		<ul className="w-full space-y-5 mt-5">
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
		</ul>
	</div>
  )
}

export default TodoList