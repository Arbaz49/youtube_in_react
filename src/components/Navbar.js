import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav style={{hight:"70px",width:"100%",border:"2px solid red"}}>
        <ul style={{display:"flex",listStyle:"none",justifyContent:"space-between"}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
