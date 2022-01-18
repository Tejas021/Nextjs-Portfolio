import React from 'react'
import Project from './Project'
import styles from "./Project.module.css"
import {projects} from "../data"
const ProjectList = () => {
    return (
        <div className={`${styles.pl} bg-black text-white dark:bg-white dark:text-black`} id="projects">
            <div className={styles.plTexts}>
                <div className={styles.plTitle}>Create & Build</div>
                <p className={styles.plDesc}>Following is the list of a few projects i have created and worked on so far in various techstacks including Reactjs, NodeJs, Express,Djano , MongoDb, Tailwind Css ,etc.All the projects have been deployed and are live</p>
            </div>

            <div className={styles.plList}>
            {projects.map(item=><Project key={item.id} img={item.img} link={item.link}/>)}
            </div>
            
        </div>
    )
}

export default ProjectList
