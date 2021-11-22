import React from 'react'
import styles from "./Project.module.css"
const Project = ({link,img}) => {
    return (
        <div className={styles.p}>
            <div className={styles.pBrowser}>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
                
            </div>
            <a href={link}>
            <img src={img} className={styles.pImg}></img>
            </a>
           
        </div>
    )
}

export default Project
