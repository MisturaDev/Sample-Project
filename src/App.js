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

import React from 'react'
import './App.css'

export default function App() {
    let count = 0;

    function handleAdd(){
        count+=1;
        console.log(count);
    }
  return (

    <div className='App'>
        <div className='box'>
        <p>{count}</p>
            <button onClick={handleAdd}className='add'>ADD</button>
            <button className='sub'>SUB</button>
        </div>
    </div>
  );
}
