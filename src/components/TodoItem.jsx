import React from 'react'

function TodoItem() {
  return (
	<li className="w-full bg-gray-200 text-gray-800 text-4xl p-6 flex items-center rounded-lg shadow">
		<input className="mr-7 w-9 h-9 rounded border-gray-300 focus:ring-1 focus-ring-offset-2 focus:ring-gray-500 focus:border-transparent focus:bg-gray-200 text-green-400" type="checkbox" name="done" id="done" />
		Todo Item
	</li>
  )
}

export default TodoItem