import React from 'react'

function TodoSearch(props) {
	const handleChange = (e) => {
		props.onChange(e.target.value)
	}
	return (
		<form>
			<input type="text" name="searchQuery" placeholder="Search" value={props.query} autoComplete="false" onChange={handleChange}
				className="
				p-3
				w-full 
				text-lg sm:text-xl md:text-2xl
				rounded-lg 
				text-gray-800
				border-gray-200
				focus:border-gray-200 focus:bg-white focus:ring-0"/>
		</form>
	)
}

export default TodoSearch