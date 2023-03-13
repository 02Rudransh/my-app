import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{color:"#fff"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <Link to="/">Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact-us">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar