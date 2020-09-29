import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState("All")
  const [filtered, setFiltered] = useState([])

  const filterHandler = () => {
    switch (filter){
      case 'completed':
        setFiltered(todo.filter(i => i.completed === true))
        break
      case 'uncompleted':
        setFiltered(todo.filter(i => i.completed === false))
        break
      default:
        setFiltered(todo)
        break
    }
  }

  useEffect(()=>{
    getLocal()
  },[])

  useEffect(()=>{
    filterHandler()
    saveToLocal()
  }, [filter, todo])

  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }

  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodo(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To Do</h1>
      </header>
      <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} setfilter={setFilter} />
      <Todo settodo={setTodo} todo={filtered} filter={filter}/>
    </div>
  );
}

export default App;
