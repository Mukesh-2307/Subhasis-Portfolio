import React from 'react'

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
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                        <a href="#">Project</a>
                        <a href="#">Github</a>
                        <a href="#">Facebook</a>
                        <a href="#">About Me</a>
                        <a href="#">X</a>
                        <a href="#">Youtube</a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-2'>
                <p>subumohanty ©2025 - Privacy Policy</p>
                <p>Inspired by <a href="https://www.thegr8binil.me/" style={{color: `var(--color-light-teal)`}}>thegr8binil.me</a></p>
                <p>Odisha, India</p>
            </div>
        </div>
    )
}

export default Footer