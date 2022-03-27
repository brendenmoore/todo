import React from 'react'

function AddTodo() {
	return (
		<form>
			<input type="text" name="todo" id="todo" placeholder="Search"
				className="
				mt-1
				p-5
				w-full 
				text-2xl
				sm:text-3xl
				md:text-5xl
				rounded-lg 
				text-gray-800
				border-gray-200
				focus:border-gray-200 focus:bg-white focus:ring-0"/>
		</form>
	)
}

export default AddTodo