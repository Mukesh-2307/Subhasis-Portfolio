import React from 'react'
import { FaLinkedin, FaSquareInstagram, FaSquareGithub, FaSquareFacebook, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='px-10 mt-10'>
            <div className='h-[350px] border-[0.5px] border-[var(--color-light-gray)] rounded-xl'>
                <div className='px-20 py-10 flex justify-between items-start w-[1550px]'>
                    <p className='w-[150px]'>Design that <span className='text-(--color-orange)'>thinks</span>, code that <span className='text-(--color-teal)'>charms</span>.</p>
                    <div className='grid grid-cols-3 gap-8'>
                        <p className='text-(--color-red)'>Explore</p>
                        <p className='col-span-2 text-(--color-purple)'>Follow Me</p>
                        <a href="#">Home</a>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaLinkedin className='size-6'/>
                            <a href="#">LinkedIn</a>
                        </div>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaSquareInstagram className='size-6'/>
                            <a href="#">Instagram</a>
                        </div>
                        <a href="#">Project</a>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaSquareGithub className='size-6'/>
                            <a href="#">Github</a>
                        </div>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaSquareFacebook className='size-6'/>
                            <a href="#">Facebook</a>
                        </div>
                        <a href="#">About Me</a>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaSquareXTwitter className='size-6'/>
                            <a href="#">X</a>
                        </div>
                        <div className='flex gap-4 items-center justify-start'>
                            <FaSquareYoutube className='size-6'/>
                            <a href="#">Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-2'>
                <p>subumohanty ©2025 - Privacy Policy</p>
                <p>Inspired by <a href="https://www.thegr8binil.me/" style={{ color: `var(--color-light-teal)` }}>thegr8binil.me</a></p>
                <p>Odisha, India</p>
            </div>
        </div >
    )
}

export default Footer