import Head from 'next/head'
import Intro from '../components/Intro'
import About from "../components/About"

import { Navbar } from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div >
 <Head>
   <title>HomePage</title>
 </Head>

<Nav/>
<Intro/>
<About/>
<ProjectList/>
<Contact/>
    </div>
  )
}
