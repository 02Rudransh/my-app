import React from 'react'
import classes from "../assests/css/Home.module.css"

const Home = () => {
  return (
    <>
    <nav>
        <div className={classes.brand}>
                <p>Clark</p>
        </div>
        <ul>
            <li><a href="">Home</a></li>  
            <li><a href="">About</a></li>              
            <li><a href="">Resume</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">My Blog</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
    <div className={classes.main_content}>
        <div className={classes.background_about}>
            <img className={classes.img} src="" alt="" />
            <div className={classes.text}>
                <span className={classes.subheading}>Hello!</span>
                <h1 >I'm <span className={classes.sub_2}>Clark <br /> Thompson</span></h1>
                <h2 className={classes.mb_4}>A Freelance Web Designer</h2>
                <p className={classes.button_1}>
                   <a href="#" className={`${classes.btn_1} ${classes.btn_primary_1} ${classes.py_3_1} ${classes.px_4_1}`}>Hire me</a>
                   <a href="#" className={`${classes.btn_1} ${classes.btn_outline_white} ${classes.py_3_1} ${classes.px_4_1}`}>My works</a>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home