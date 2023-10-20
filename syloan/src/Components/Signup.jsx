import React from 'react'
import styles from "../Components/Signup.module.css"

const Signup = () => {
  return (
    <div id={styles.container}>
        <div className={styles.left}>
            <h1>Left Part</h1>
        </div>
        <div className={styles.right}>
            <h2>Right Part</h2>
        </div>
    </div>
    
  )
}

export default Signup