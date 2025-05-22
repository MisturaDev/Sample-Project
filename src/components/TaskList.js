import { useState } from "react";

export const TaskList = (props) => {
  const[tasks, setTasks] = useState([
      {id:2025, name: "Record React Lectures", completed: true},
      {id:2026, name: "Edit React Lectures", completed: false},
      {id:2027, name: "Watch React Lectures", completed: true},
      {id:2028, name: "Turah Rae React", completed: true},
      {id:2029, name: "Olanrewaju React", completed: false}
    ]);
  
    const [show, setShow] = useState(true);
  
    function handleDelete(id){
      setTasks (tasks.filter(task => task.id !== id));
    }
  
  return (
    <>
    <h1>Task List {props.title} {props.Subtitle}</h1>
    <ul>
      <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
      { show && tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : "incomplete" }>
          <span>{task.id} - {task.name} </span>
          <button onClick={() => handleDelete(task.id)}className='delete'>Delete</button>
          </li>
      )) }
    </ul>
  </>
);
}

