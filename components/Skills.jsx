import Image from "next/image"
import {skills} from "../data1"

const SkillCard = ({title,img}) => {
    return (
        <div className="w-30 p-3 sm:p-5 sm:m-10 m-2 rounded border-solid border-2 border-red-500 items-center justify-center">
            <Image src={img} objectFit="contain" height={"200px"} width={"200px"} alt={title} className=""/>
            <h1 className="text-center text-m sm:text-xl items-center ">{title}</h1>
        </div>
    )
}




const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center md:p-20 p-5 ">
            <h1 className="text-5xl fontsize-400 m-15 font-medium" >Skills</h1>
            <p className=" p-3 fontsize-200">These are the technologies i have got hands dirty in so far .</p>
            <div className="flex flex-wrap items-center justify-center ">

               {skills.map(d=><SkillCard key={d.id} title={d.title} img={d.img}/>)}
             
            </div>
        </div>
    )
}

export default Skills
