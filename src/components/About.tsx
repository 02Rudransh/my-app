import React from 'react'
import classes from "../assests/css/About.module.css"
import pic from "../assests/img/bg_1.2.png"

function About() {
  return (
    <>
    <div className={classes.abt_main}>
        <div className={classes.imge}>
            <img src="../assests/img/bg_1.2.png" alt="" />
        </div>    
        <div className={classes.container_1}>
            <div className={classes.content}>
                <h1 className={classes.big_2}>About</h1>
                <h2 className={classes.small_2}>About Me</h2>
                <p>A small river named Duden flows by their place 
                and supplies it with the <br /> necessary regelialia.</p>
                <ul className={classes.about_info}>
                    <li className={classes.d_flex}><span>Name:</span> <span>Clark Thompson</span></li>
                    <li className={classes.d_flex}><span>Date of birth:</span> <span>January 01, 1987</span></li>
                    <li className={classes.d_flex}><span>Address:</span> <span>San Francisco CA 97987 USA</span></li>
                    <li className={classes.d_flex}><span>Zip code:</span> <span>1000</span></li>
                    <li className={classes.d_flex}><span>Email:</span> <span>clarkthomp@gmail.com</span></li>
                    <li className={classes.d_flex}><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>
                </ul>
            </div>
            <div className={classes.section}>
                <p className={classes.mb_4}>
                    <span>120</span>
                    <span>Projects complete</span>
                </p>
                <p className={classes.button_2}>
                    <a href="#" className={`${classes.btn_2} ${classes.btn_primary_2} ${classes.py_3_2} ${classes.px_4_2}`}>Download CV</a>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About