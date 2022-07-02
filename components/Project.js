import React from 'react'
import styles from "./Project.module.css"
const Project = ({link,img,item}) => {
    return (<div className={styles.pContainer}>

<div className={styles.p}>
            <div className={styles.pBrowser}>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
                <div className={styles.pCircle}></div>
                
            </div>
            <a href={link}>
            <h2 className={styles.proTitle}>{item.title}</h2>
            <img src={img} className={styles.pImg}></img>
           

            </a>
            
           
        </div>
       <div className={styles.stackBody}>{item.stack.map(s=><div key={s} className={styles.stackInner}>{s}</div>)}</div>
    </div>
        
    )
}

export default Project
