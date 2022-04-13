import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './Components/TodoItem';
import './App.css';
import TodoInput from './Components/TodoInput';

function App() {
  const[todos,setTodos] = useState([
    {task:"first task",
     completed: false},
    {task:"second task",
    completed: false},
    {task:"third task",
    completed: false}
  ]);
  useEffect(()=>{
    const storedTodos = (JSON.parse(localStorage.getItem("Local")) || []);
     setTodos(storedTodos);
  },[]);

  useEffect(() => {
    localStorage.setItem("Local",JSON.stringify(todos));  
   },[todos]);
   //populating localStorage to ui
   
 
const completedTasks = (index) =>{
  const newTodos = [...todos];
  (newTodos[index].completed === false ?
     newTodos[index].completed = true :
      newTodos[index].completed = false);

      setTodos(newTodos);
    }

   const addTask = (newTask)=>{
    // console.log(newTask);
   setTodos([{task:newTask,completed:false},...todos]);
  }
  const deleteItem = (index) =>{ 
     const newTodos = [...todos];
         newTodos.splice(index,1);
         setTodos(newTodos);
  }

  const updateTodoItems = (index) =>{
    const newTodoItems = [...todos];
    const item = newTodoItems[index];
    let updatedVal = prompt("Enter updated value",item.task);
    let completeObj = {task:updatedVal,completed:false};
    newTodoItems.splice(index,1,completeObj);
    if(updatedVal === "" || updatedVal === null)
    return;
    else
      item.task = updatedVal;
      setTodos(newTodoItems);
  }

  return (
    <div className="app">
        <h2> todo List </h2>
        <TodoInput addTask = {addTask}/>
        {todos.map((todo, index) => (
<TodoItem 
key={index}
 index={index}
  todo={todo}
  deleteItem={deleteItem}
  completedTasks = {completedTasks}
  updateTodoItems = {updateTodoItems}
    />
))}
         {/* {
          todos.map(todo => (
             <TodoItem key = {uuidv4()}  todo = {todo} deleteItem = {deleteItem}/>
            ))
         } */}
    </div>
  );
}
export default App;
