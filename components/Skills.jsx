import Image from "next/image"
import {skills} from "../data1"
import styles from "./Skills.module.css"




const SkillCard = ({title,img}) => {
    return (
        <div className={[styles.flexer,"w-30   p-3  sm:p-5 sm:m-10 m-2 rounded border-solid border-2 border-red-500 items-center justify-center"].join(' ')}>
            <Image src={img} objectFit="contain" height={"200px"} width={"200px"} alt={title} className=""/>
            <h1 className={["text-center text-m sm:text-xl items-center ",styles.texter].join(" ")}>{title}</h1>
        </div>
    )
}




const Skills = () => {
    return (
        <div className="flex bg-white flex-col justify-center items-center md:p-20 p-5 ">
            <h1 className="text-3xl sm:text-5xl fontsize-400 m-15 font-medium" >Skills</h1>
            <p className=" p-3 sm:fontsize-200 fontsize-100">These are the technologies i have got hands dirty in so far .</p>
            <div className="flex flex-wrap items-center justify-center ">

               {skills.map(d=><SkillCard key={d.id} title={d.title} img={d.img}/>)}
             
            </div>
        </div>
    )
}

export default Skills
