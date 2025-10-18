import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div id="hero-section">
        <div className='w-[calc(100vw-180px-290px)] h-[calc(100vh-140px-128px)] justify-self-center flex justify-center items-center'>
          <div>
            <h1 className='text-[72px]/[86px]'>Hi I’m subhasis,<br />a Software Engineer</h1>
            <p className='text-[var(--color-dark-gray)]'>I am an engineer with a passion for automation, data, and smart systems.<br />I’ve built tools that streamline operations and boost efficiency.<br />Skilled in Python, SQL, and front-end tech, I enjoy turning complex problems into simple, scalable solutions.</p>
          </div>
        </div>
      </div>
      <div className='about-section'>
        {/* todo-about section */}
      </div>
    </>
  )
}

export default Home