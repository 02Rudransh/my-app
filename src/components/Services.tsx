import React from 'react'
import classes from "../assests/css/Services.module.css"

function Services() {
  return (
    <>
        <div className={classes.main_4}>
    <div className={classes.s_heading}>
        <h1 className={classes.big_4}>Services</h1>
        <h2 className={classes.small_4}>Services</h2>
        <p>Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia
        </p>
    </div>
    <div className={classes.main_blocks_2}>
        <div className={classes.serv_blocks}>
            <div className={classes.s_box}>
               <span className={classes.icon}>Icon</span>
               <div className={classes.s_desc}>
                    <h3>Web Design</h3>
                    <div className={classes.line}></div>
               </div>
            </div>
            <div className={classes.s_box}>
                <span className={classes.icon}>Icon</span>
                <div className={classes.s_desc}>
                     <h3>Photography</h3>
                     <div className={classes.line}></div>
                </div>
             </div>
             <div className={classes.s_box}>
                <span className={classes.icon}>Icon</span>
                <div className={classes.s_desc}>
                     <h3>Web Development</h3>
                     <div className={classes.line}></div>
                </div>
            </div>
        </div>
        <div className={classes.serv_blocks}>
            <div className={classes.s_box}>
               <span className={classes.icon}>Icon</span>
               <div className={classes.s_desc}>
                    <h3>App Development</h3>
                    <div className={classes.line}></div>
               </div>
            </div>
            <div className={classes.s_box}>
                <span className={classes.icon}>Icon</span>
                <div className={classes.s_desc}>
                     <h3>Branding</h3>
                     <div className={classes.line}></div>
                </div>
             </div>
             <div className={classes.s_box}>
                <span className={classes.icon}>Icon</span>
                <div className={classes.s_desc}>
                    <h3>Product strategy</h3>
                    <div className={classes.line}></div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Services