import React from 'react'
import classes from "../assests/css/Resume.module.css"

function Resume() {
  return (
    <>
        
<div className={classes.main_3}>
    <div className={classes.r_heading}>
        <h1 className={classes.big_3}>Resume</h1>
        <h2 className={classes.small_3} >Resume</h2>
        <p>A small river named Duden flows by their place 
            and supplies it with the necessary regelialia. It is a 
            paradisematic <br/> country, in which roasted parts of sentences fly into your mouth.
        </p>
    </div>
    <div className={classes.main_blocks}>
        <div className={`${classes.blocks} ${classes.fst}`}>
            <div className={classes.box}>
                <span className={classes.date}>2014-1015</span>
                <h2>Master Degree of Design</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
            <div className={classes.box}>
                <span className={classes.date}>2014-1015</span>
                <h2>Art & Creative Director</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
        </div>
        <div className={classes.blocks}>
            <div className={classes.box}>
                <span className={classes.date}>2014-1015</span>
                <h2>Bachelor's Degree of C.A</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
            <div className={classes.box}>
                <span className={classes.date}>2014-1015</span>
                <h2>Wordpress Developer</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
        </div>
        <div className={classes.blocks}>
            <div className={classes.box}>
                <span className={classes.date}>2014-1015</span>
                <h2>Wordpress Developer</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
            <div className={classes.box}>
                <span className={classes.date}>2017-1018</span>
                <h2>UI/UX Designer</h2>
                <span className={classes.univ}>Cambridge University</span>
                <p className={classes.mt_4}>A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                    It is a paradisematic country, in which roasted parts 
                    of sentences fly into your mouth.
                </p>
            </div>
        </div>
        <div className={classes.btn_div}>
            <p className={classes.button_3}>
                <a href="#" className={`${classes.btn_3} ${classes.btn_primary_3} ${classes.py_3_3} ${classes.px_4_3}`}>Download CV</a>
            </p>
        </div>
    </div>
</div>    
    </>
  )
}

export default Resume