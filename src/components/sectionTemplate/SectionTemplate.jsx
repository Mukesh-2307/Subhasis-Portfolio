import React from 'react'
import './SectionTemplate.css'
import LoadMoreBtn from './LoadMoreBtn'

const SectionTemplate = ({ title, subText, MyComponent, MyIconComponent, loadMore, colorScheme, redirectTo }) => {
    return (
        <div className='px-10 my-10 flex flex-col'>
            <div className='border-b-[0.5px] border-[var(--color-light-gray)] pb-6 relative'>
                <h1 className={`title`} style={{ color: `var(${colorScheme})` }}>{title}</h1>
                <p className=' text-[var(--color-dark-gray)]'>{subText}</p>
                <div className='size-24 bg-[var(--color-creame)] absolute right-[100px] -bottom-[50px] rounded-full flex justify-center items-center' style={{color: `var(${colorScheme})`}}><MyIconComponent className="size-12" /></div>
            </div>
            <div className='pt-10'>
                <MyComponent/>
            </div>
            {
                loadMore &&
            <LoadMoreBtn colorScheme={colorScheme} redirectTo={redirectTo}/>
            }
        </div>
    )
}

export default SectionTemplate