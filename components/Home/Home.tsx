import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Experience from './Experience/Experience'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default Home
