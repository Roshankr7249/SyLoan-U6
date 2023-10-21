import React from 'react'
import styles from "../Components/Signup.module.css"

const Signup = () => {
  return (
    <div id={styles.container}>
        <div className={styles.left}>
            <h1>Left Part</h1>
        </div>
        <div className={styles.right}>
            <h1>Right Part</h1>
        </div>
    </div>
    
  )
}

export default Signup