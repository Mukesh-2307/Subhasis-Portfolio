import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";


const LoadMoreBtn = ({colorScheme}) => {
    return (
        <button className='flex gap-4 justify-between items-center border-[0.5px] border-[var(--color-light-gray)] rounded-full p-4 cursor-pointer self-center'>
            Load More
            <div className='size-12 bg-[var(--color-creame)] rounded-full flex justify-center items-center text-black'>
                <HiArrowSmRight className='size-6' style={{color: `var(${colorScheme})`}}/>
            </div>
        </button>
    )
}

export default LoadMoreBtn