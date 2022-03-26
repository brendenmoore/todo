import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-blue-300"> Hello World! </h1>
      </header>
      <TodoList></TodoList>

    </div>
  );
}

export default App;
