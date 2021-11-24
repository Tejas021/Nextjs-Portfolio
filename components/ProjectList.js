import React from 'react'
import Project from './Project'
import styles from "./Project.module.css"
import {projects} from "../data"
const ProjectList = () => {
    return (
        <div className={`${styles.pl} bg-black text-white dark:bg-white dark:text-black`}>
            <div className={styles.plTexts}>
                <div className={styles.plTitle}>Create & Inspire</div>
                <p className={styles.plDesc}>Come And Let me Create For you.Come And Let me Create For you.Come And Let me Create For you.Come And Let me Create For you.Come And Let me Create For you.Come And Let me Create For you.Come And Let me Create For you.</p>
            </div>

            <div className={styles.plList}>
            {projects.map(item=><Project key={item.id} img={item.img} link={item.link}/>)}
            </div>
            
        </div>
    )
}

export default ProjectList
