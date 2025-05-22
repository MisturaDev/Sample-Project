// import React from 'react'
// import Logo from "../assets/logo.png"

// export const Header = () => {
//   return (
//     <div>
// <img className="logo" src={Logo} alt="" />
//     </div>
//   )
// }


import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}


