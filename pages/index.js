import Head from 'next/head'
import Intro from '../components/Intro'
import About from "../components/About"

import { Navbar } from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div >
 <Head>
   <title>HomePage</title>
 </Head>

<Navbar/>
<Intro/>
<About/>
<ProjectList/>
<Contact/>
    </div>
  )
}
