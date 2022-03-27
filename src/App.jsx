import './App.css'
import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="container mt-20">
      <div  className="bg-white p-5 rounded-lg">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
