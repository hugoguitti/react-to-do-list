import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Create login screen",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Create API to validate user",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Go to the gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Study React",
      category: "Study",
      isCompleted: false,
    },
  ])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('asc')

  const addTodo = (title, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
      isCompleted: false
    }]
    setTodos(newTodos.sort((a, b) =>
    sort === 'asc'
    ? a.title.localeCompare(b.title)
    : b.title.localeCompare(a.title)
  ))
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    )
    console.log(filteredTodos)
    setTodos(filteredTodos)
    
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    })

    setTodos(newTodos)
  }
  

  return (
    <div className='app'>
      <h1>To-do list</h1>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
      />
      <div className='todo-list'>
        {todos
          .filter((todo) =>
            filter === 'all'
              ? true
              : filter === 'completed'
                ? todo.isCompleted
                : !todo.isCompleted)
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
          )
          .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm
        addTodo={addTodo}
      />
    </div>
  )
}

export default App
