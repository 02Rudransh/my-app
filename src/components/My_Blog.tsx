import React from 'react'
import classes from "../assests/css/My_Blog.module.css"

function My_Blog() {
  return (
    <>
        <div className={classes.main_5}>
    <div className={classes.m_heading}>
        <h1 className={classes.big_5}>Blog</h1>
        <h2 className={classes.small_5}>Our Blog</h2>
        <p>Far far away, behind the word mountains, 
            far from the countries Vokalia and <br/> Consonantia
        </p>
    </div>
    <div className={classes.main_blocks_3}>
        <div className={classes.blog_blocks}>
            <div className={classes.my_box}>
               <img src="../assests/img/image_1.jpg" alt="" />
                <div className={classes.content_5}>
                    <div className={classes.dates_5}>
                        <p className={classes.p_5}>
                         <span className={classes.s_5}>June 21, 2019</span>
                             <a href="">Admin</a>
                             <a href="">
                             <span>&</span>
                             3
                             </a>
                         </p>
                     </div>
                     <h3>
                        Why Lead Generation is Key for Business Growth
                     </h3>
                     <p className={classes.p_5_2}>
                        A small river named Duden flows by their place 
                        and supplies it with the necessary regelialia.
                     </p>
                </div>
            </div>
            <div className={classes.my_box}>
                <img src="../assests/img/image_2.jpg" alt="" />
                <div className={classes.content_5}>
                    <div className={classes.dates_5}>
                        <p className={classes.p_5}>
                         <span className={classes.s_5}>June 21, 2019</span>
                             <a href="">Admin</a>
                             <a href="">
                             <span>&</span>
                             3
                             </a>
                         </p>
                     </div>
                     <h3>
                        Why Lead Generation is Key for Business Growth
                     </h3>
                     <p className={classes.p_5_2}>
                        A small river named Duden flows by their place 
                        and supplies it with the necessary regelialia.
                     </p>
                </div>
            </div>
            <div className={classes.my_box}>
            <img src="../assests/img/image_3.jpg" alt="" />
                <div className={classes.content_5}>
                    <div className={classes.dates_5}>
                        <p className={classes.p_5}>
                         <span className={classes.s_5}>June 21, 2019</span>
                             <a href="">Admin</a>
                             <a href="">
                             <span>&</span>
                             3
                             </a>
                         </p>
                     </div>
                     <h3>
                        Why Lead Generation is Key for Business Growth
                     </h3>
                     <p className={classes.p_5_2}>
                        A small river named Duden flows by their place 
                        and supplies it with the necessary regelialia.
                     </p>
                </div>
            </div>
        </div>
    </div>
    <div className={classes.main_5_2}>
        <div className={classes.bg_img_2}>
            <div className={classes.b_blocks_2}>
                <div className={classes.m_box_2}>
                    <div className={classes.text_5}>
                        <h1>100</h1>
                        <p>
                            <span>
                                Awards
                            </span>
                        </p>
                    </div>
                </div>
                <div className={classes.m_box_2}>
                    <div className={classes.text_5}>
                        <h1>1,200</h1>
                        <p>
                            <span>
                                Complete projects
                            </span>
                        </p>
                    </div>
                </div>
                <div className={classes.m_box_2}>
                    <div className={classes.text_5}>
                        <h1>1,200</h1>
                        <p>
                            <span>
                                Happy Customers
                            </span>
                        </p>
                    </div>
                </div>
                <div className={classes.m_box_2}>
                    <div className={classes.text_5}>
                        <h1>500</h1>
                        <p>
                            <span>
                                Cups of coffee
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.cont_center}>
                <div className={classes.bg_img_desc}>
                    <h2>
                        I'm <span>Available</span> for freelancing
                    </h2>
                    <p>
                        A small river named Duden flows by their 
                        place and supplies it with the <br/>
                        necessary regelialia.
                    </p>
                    <p className={classes.button_4}>
                        <a href="#" className={`${classes.btn_4} ${classes.btn_primary_4} ${classes.py_3_4} ${classes.px_4_4}`}>Hire Me</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default My_Blog