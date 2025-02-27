import { useState } from "react"
import './App.css'

import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import Search from "./components/Search"
import Filter from "./components/Filter"

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const addTodo = (text, category) =>{
    const newTodos = [...todos,{
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id)=>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id)=>{
    const newTodos = [...todos]
    newTodos.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }


  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

   

  return (

    <div className="app">
      
      <h2>Task list</h2>

      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter}/>

      <div className="todoList">
        {todos.filter((todo)=> todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
        .map((todo)=>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo}/>

    </div>
  )
}

export default App
