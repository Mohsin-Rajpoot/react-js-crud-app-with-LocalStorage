import React from 'react';

function TodoItem({todo ,index,deleteItem,completedTasks,updateTodoItems }) {
    // console.log(todo);
  return (
      
    <div className="todo-list">

    <li style={{textDecoration: todo.completed ? "line-through" : ""}}>
        {todo.task}</li>
    
    <div className="btns"> 
    <button onClick={() => completedTasks(index)}>Completed</button>
    <button onClick={() => updateTodoItems(index)}>Update</button>
    <button onClick={() => deleteItem(index)}>X</button>
    </div>
    </div>
    
  )
}

export default TodoItem;
