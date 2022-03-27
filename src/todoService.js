export async function getTodoById(id) {
	return await (await fetch('https://jsonplaceholder.typicode.com/todos/' + id)).json()
}

export async function getAllTodos() {
	return await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
}