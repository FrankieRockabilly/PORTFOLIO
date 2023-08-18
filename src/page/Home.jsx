import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Discover from '../component/Discover'
import About from '../component/About'
import Portfolio from '../component/Portfolio'
import Customized from '../component/Customized'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='bg-zinc-900 '>
      <Navbar />
      <Hero />
      <Discover />
      <About />
      <Portfolio />
      <Customized />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home