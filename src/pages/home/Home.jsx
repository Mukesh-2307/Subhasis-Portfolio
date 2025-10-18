import React from 'react'
import './Home.css'
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialsLink = [
  { label: 'twitter', link: '#' },
  { label: 'github', link: '#' },
  { label: 'linkedin', link: '#' },
  { label: 'instagram', link: '#' },
]

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
      <div className='px-10'>

        <div className='flex items-center justify-between h-[calc(100vh-140px-650px)]'>
          <div>
            <p className='w-[140px]'>// Eat, Code, Sleep and Repeat</p>
          </div>

          <div>
            <ul className='flex gap-4 p-4 border-[0.5px] border-[var(--color-light-gray)] rounded-full'>
              {socialsLink.map((social, index) => {
                return (
                  <ListItem social={social} key={index} />
                )
              })}
            </ul>
          </div>

          <div>
            <button className='flex items-center justify-between gap-4 p-4 border-[0.5px] border-[var(--color-light-gray)] rounded-full cursor-pointer'>
              <div className='size-12 bg-[var(--color-creame)] rounded-full'></div>
              send an Email
            </button>
          </div>
        </div>

        <div className='flex items-center justify-between h-[calc(100vh-140px-650px)] my-16'>
          <p className='title w-[840px]'>curious and driven individual who thrives on solving problems and learning new things.</p>
          <p className='title-s w-[440px] text-right'>What sets me apart is my ability to blend technical expertise with product and operational insight</p>
        </div>
      </div>
    </>
  )
}

const ListItem = ({ social }) => {
  return (
    <li className='cursor-pointer size-12 bg-[var(--color-creame)] text-[var(--color-black)] flex justify-center items-center rounded-full'>
      <a href={social.link} className='no-underline'>{social.label === 'twitter' ?
        <FaXTwitter /> : social.label === 'github' ? <FaGithub /> : social.label === 'linkedin' ? <FaLinkedinIn /> : <FaInstagram />}</a>
    </li>
  )
}

export default Home