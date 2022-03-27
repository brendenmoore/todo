import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="container my-0 sm:my-8">
      <div  className="bg-white p-5 rounded-none sm:rounded-lg max-w-3xl m-auto">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
