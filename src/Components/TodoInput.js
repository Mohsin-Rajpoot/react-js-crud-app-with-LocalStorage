import React, { useState } from 'react';

function TodoInput({addTask}) {
 const[work,setWork] = useState(""); 
 
 function handleInput(e){
    setWork(e.target.value);
 }
 function handleSubmition(e){
 e.preventDefault();
 addTask(work);
//  console.log(work);
 }
    return (
      <form onSubmit = {handleSubmition}>
          <input value = {work}
           type = "text"
            onChange = {handleInput} />
      </form>
  )
}

export default TodoInput;
