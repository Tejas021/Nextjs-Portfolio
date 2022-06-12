import {useEffect,useState} from 'react'
import Project from './Project'
import styles from "./Project.module.css"
import {projects} from "../data"
import { useRef } from 'react' 
const ProjectList = () => {
    const [dProjects,setDProjects]=useState({text:"SHOW MORE",projects:projects.slice(0,6),state:true})

    const scrollRef = useRef()
    
    const scrollToBottom =()=>{
console.log("called")
        scrollRef.current.scrollIntoView({behavior: "smooth", block: "start"})

    }

    const changeView=()=>{
       
        if(dProjects.state){
            setDProjects({text:"SHOW LESS",projects:projects})
        }else{setDProjects({text:"SHOW MORE",projects:projects.slice(0,6),state:true})
        scrollToBottom()
    }
       
    }

    return (
        <div className={`${styles.pl} bg-black text-white dark:bg-white dark:text-black`} id="projects">
            <div className={styles.plTexts}>
                <div className={styles.plTitle}>Create & Build</div>
                <p className={styles.plDesc}>Following is the list of a few projects i have created and worked on so far in various techstacks including Reactjs, NodeJs, Express,Djano , MongoDb, Tailwind Css ,etc.All the projects have been deployed and are live</p>
            </div>
            <div ref={scrollRef} style={{width:"0%",margin:"0px"}}></div>
            <div className={styles.plList}>
            
            {dProjects.projects.map(item=><Project key={item.id} img={item.img} link={item.link} item={item}/>)}
            
            </div>
         
            <p className='m-5 text-red-500 cursor-pointer' onClick={()=>changeView()}>{dProjects.text}</p>
            
        </div>
    )
}

export default ProjectList
