import React from 'react'
import Styles from "./MobileVerification.module.css"
import leftimg from "./leftimg.avif"

const MobileVerification = () => {
  return (
    <div id={Styles.kkcont}>
        <div className={Styles.left}>
        <img src={leftimg} alt="" />
        </div>

        <div className={Styles.right}>
        <img src={leftimg} alt="" />
        </div>
    </div>
  )
}

export default MobileVerification