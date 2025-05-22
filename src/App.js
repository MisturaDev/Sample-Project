// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import './App.css';

//  function App() {
//   return (
//     <>
//     <Header />
//     <div>
//     <h1>Learning React</h1>
//     </div>
//     <Footer />
//       </>

//   );

// }
// export default App;

// import React from 'react'
// import { useState } from 'react';
// import './App.css'
// function App() {
//   const [count, setCount] = useState(0);

//   function handleAdd(){
//     setCount(count + 1);
//   }

//   function handleSub(){
//     setCount(count - 1);
//   }
// return (

//     <div className='App'>
//         <div className='box'>
//         <p>{count}</p>
//             <button onClick={handleAdd}className='add'>ADD</button>
//             <button onClick={handleAdd}className='sub'>SUB</button>
//         </div>
//     </div>
//   );
// }

// import React from 'react'
// import { useState } from 'react';
// import './App.css'

// export default function App() {
//     const [count, setCount] = useState (0);

//     function handleAdd(){
//         setCount (count => count + 1);
//         setCount (count => count + 1);
//         setCount (count => count + 1);
//     }

//     function handleSub(){
//       setCount (count - 1);
//         }

//         function hadleReset(){
//           setCount (0);
//         }
//   return (

//     <div className='App'>
//         <div className='box'>
//         <p>{count}</p>
//             <button onClick={handleAdd}className='add'>ADD</button>
//             <button onClick={handleSub}className='sub'>SUB</button>
//             <button onClick={hadleReset}className='reset'>RESET</button>
//         </div>
//     </div>
//   );
// }


// import React from 'react'
// import { useState } from 'react';
// import './App.css'

// export default function App() {
//   const[tasks, setTasks] = useState([
//     {id:2025, name: "Record React Lectures", completed: true},
//     {id:2026, name: "Edit React Lectures", completed: true},
//     {id:2027, name: "Watch React Lectures", completed: true},
//     {id:2028, name: "Turah Rae React", completed: true},
//     {id:2029, name: "Olanrewaju React", completed: true},
//   ]);

// return(
//   <div className='App'>
//     <h1>Task List</h1>
//     <ul>
//       { tasks.map((task) => (
//         <li key={task.id}>
//           <span>{task.id} - {task.name} </span>
//           <button className='delete'>DELETE</button>
//           </li>
//       )) }
//     </ul>
//   </div>
// )
// };

// import React from 'react'
// import { useState } from 'react';
// import './App.css'
// export default function App() {
//   const[tasks, setTasks] = useState([
//     {id:2025, name: "Record React Lectures", completed: true},
//     {id:2026, name: "Edit React Lectures", completed: false},
//     {id:2027, name: "Watch React Lectures", completed: true},
//     {id:2028, name: "Turah Rae React", completed: true},
//     {id:2029, name: "Olanrewaju React", completed: false}
//   ]);

//   const [show, setShow] = useState(false);

//   function handleDelete(id){
//     setTasks (tasks.filter(task => task.id !== id));
//   }

// return(
//   <div className='App'>
//     <h1>Task List</h1>
//     <ul>
//       <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
//       { show && tasks.map((task) => (
//         <li key={task.id} className={task.completed ? "completed" : "incomplete" }>
//           <span>{task.id} - {task.name} </span>
//           <button onClick={() => handleDelete(task.id)}className='delete'>Delete</button>
//           </li>
//       )) }
//     </ul>
//   </div>
// );
// }


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

