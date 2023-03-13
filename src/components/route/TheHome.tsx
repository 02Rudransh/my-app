import React from 'react'
import { Link } from "react-router-dom";

const TheHome = () => {
  return (
    <div style={{color:"#fff" , width:"100%", height:"90vh"}}>
        <h1>Home page</h1>
        
        <div style={{marginTop:"40px"}}>
            <Link to="/about">
                read more
            </Link>
        </div>
    </div>
  )
}

export default TheHome