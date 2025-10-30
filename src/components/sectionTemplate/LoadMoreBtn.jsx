import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";


const LoadMoreBtn = ({ colorScheme, redirectTo }) => {
    return (
        <button className='border-[0.5px] border-[var(--color-light-gray)] rounded-full p-4 cursor-pointer self-center'>
            <a href={redirectTo} className='flex gap-4 justify-between items-center '>
                Load More
                <div className='size-12 bg-[var(--color-creame)] rounded-full flex justify-center items-center text-black'>
                    <HiArrowSmRight className='size-6' style={{ color: `var(${colorScheme})` }} />
                </div>
            </a>
        </button>
    )
}

export default LoadMoreBtn