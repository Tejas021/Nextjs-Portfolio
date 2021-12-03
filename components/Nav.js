import {useEffect, useState} from 'react'
import Button from './Button'
import styles  from "./Nav.module.css"
const Nav = () => {

    const [nav, setNav] = useState(false)
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>200){
                setNav(true)
            }
            else{
                setNav(false)
            }
        })
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])

    return (
        <nav className={`${styles.nav} ${nav&&styles.darkNav}  ${show&&styles.navBlack}  `}>
            <div className={styles.navLogo}> <Button/></div>
       <div className={styles.burger} onClick={()=>setShow(!show)}>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
       </div>

            <div className={`${styles.navList } ${!show&& styles.disappear }`}>
                <div className={styles.navItems} onClick={()=>setShow(!show)}>
                    <a href="#intro">Home</a>
                </div>

                <div className={styles.navItems} onClick={()=>setShow(!show)}>
                <a href="#about">About</a>
                </div>

                <div className={styles.navItems} onClick={()=>setShow(!show)}>
                <a href="#projects">Projects</a>
                </div>

                <div className={styles.navItems} onClick={()=>setShow(!show)}>
                <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
