function Todo({ todo, removeTodo, completeTodo}) {
  return (
    <div className="todo">

        <div className="content" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <p>{todo.text}</p>
            <p className="category">
            ({todo.category})
            </p>
        </div>

        <div>
          <button className="complete" onClick={()=> completeTodo(todo.id)}>Complete</button>
          <button className="remove" onClick={()=> removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo