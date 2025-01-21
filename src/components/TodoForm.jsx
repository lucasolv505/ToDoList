import { useState } from "react"
import Todo from "./Todo"

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!value || !category){
            return
        }

        addTodo(value,category)
        setCategory('')
        setValue('')
    }


    return (
        <div className="todoForm">
            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Task Title" onChange={(e)=> setValue(e.target.value)} value={value}/>

                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="job">Job</option>
                    <option value="personal">Personal</option>
                    <option value="study">Study</option>
                </select>

                <button type="submit">Create Task</button>
            </form>

        </div>
  )
}

export default TodoForm