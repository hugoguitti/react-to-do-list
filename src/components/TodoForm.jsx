import { useState } from "react"

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return
        addTodo(title, category)
        setTitle('')
        setCategory('')
    }
  return (
    <div className='todo-form'>
        <h2>Create a task:</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter a title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            >
                <option value="">Choose a category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
            </select>
            <button type='submit'>Create task</button>
        </form>
    </div>
  )
}

export default TodoForm