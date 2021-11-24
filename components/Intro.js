
import styles from "./Intro.module.css"
const Intro = () => {
    return (
 <div className={styles.introWrapper}>

<div className={ `${styles.iLeft} text-white bg-black dark:bg-white dark:text-black`}>

<div className={styles.leftDiv}>
         <div className={styles.firstLine}><span className="">Hello there I am</span></div>
         <h1 className={styles.name}>Tejas <span >Kolwankar</span></h1>
         <div className={styles.intro}>
         <div className={styles.titlesWrapper}>
             <div className={styles.introItems}><p className="text-blue-600 ">React Developer</p></div>
                 <div className={styles.introItems}><p className="text-yellow-600">Full Stack Developer</p></div>
                 <div className={styles.introItems}><p className="text-gray-600">ML Enthusiast</p></div>
                 <div className={styles.introItems}><p className="text-green-600">NodeJs Developer</p></div>
                 <div className={styles.introItems}><p className="text-indigo-600" >FrontEnd Developer</p></div>
             </div>
            
        </div>
   
           <div className={styles.desc}>Hello there Hello thereHello thereHello there Hello there Hello there Hello there Hello there Hello there</div>
     </div>
       
</div>


<div className={`${styles.iRight} bg-black dark:bg-white`}>
     <div className={`${styles.iBg} bg-white dark:bg-black `}></div>
     <img className={styles.iImg} src="/img/Me-modified.png"></img>
     </div>

  

      

 </div>
    )
}

export default Intro
