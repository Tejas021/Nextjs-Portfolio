import Head from 'next/head'
import Intro from '../components/Intro'
import About from "../components/About"
import Script from "next/script"
import { Navbar } from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import Nav from "../components/Nav"
import Footer from '../components/Footer'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div >
      
 <Head>

{/* <script defer data-domain="nextjs-portfolio-phi-rouge.vercel.app" src="https://plausible.io/js/plausible.js"></script> */}

   <title>HomePage</title>
 </Head>
 <Script
  defer data-domain="nextjs-portfolio-phi-rouge.vercel.app" src="https://plausible.io/js/plausible.js"
  strategy="beforeInteractive"
/>
    

<Nav/>
<Intro/>
<About/>
<ProjectList/>
<Skills/>
<Contact/>
<Footer/>
    </div>
  )
}
