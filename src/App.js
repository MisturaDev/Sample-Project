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

import React from 'react'
import { useState } from 'react';
import './App.css'

export default function App() {
    const [count, setCount] = useState (0);

    function handleAdd(){
        setCount (count => count + 1);
        setCount (count => count + 1);
        setCount (count => count + 1);
    }

    function handleSub(){
      setCount (count - 1);
        }

        function hadleReset(){
          setCount (0);
        }
  return (

    <div className='App'>
        <div className='box'>
        <p>{count}</p>
            <button onClick={handleAdd}className='add'>ADD</button>
            <button onClick={handleSub}className='sub'>SUB</button>
            <button onClick={hadleReset}className='reset'>RESET</button>
        </div>
    </div>
  );
}

