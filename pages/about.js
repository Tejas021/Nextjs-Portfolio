import React from 'react'
import styles from "../styles/About.module.css"
import Link from "next/link"
const About = () => {
    return (
        <div>
            <h1 className={styles.heading}>About</h1>
            <Link href="/">Home page</Link>
        </div>
    )
}

export default About
