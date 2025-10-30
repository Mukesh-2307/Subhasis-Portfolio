import React from 'react'
import './Navbar.css'
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineAssignment } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";


const navbarItems = [
    { label: "Home", link: "/", icon: <HiOutlineHome /> },
    { label: "Projects", link: "/projects", icon: <HiOutlineBriefcase /> },
    { label: "About", link: "/about", icon: <MdOutlineAssignment /> },
]

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-10'>
            <div className='nav-item-border p-4 rounded-full flex gap-4 justify-evenly items-center cursor-pointer'>
                <div className='h-12 w-12 bg-[var(--color-creame)] rounded-full'></div>
                <p>SUBU</p>
            </div>
            <div>
                <ul className='nav-item-border p-4 rounded-full list-none flex items-center gap-16 h-[82px]'>
                    {navbarItems.map((navItem, index) => {
                        return (
                            <ListItem navItem={navItem} key={index} />
                        )
                    })}
                </ul>
            </div>
            <div>

                <button className='nav-item-border p-4 rounded-full h-[82px] cursor-pointer flex gap-2 items-center justify-between'><HiOutlinePhone />Contact Me</button>
            </div>
        </nav>
    )
}

const ListItem = ({ navItem }) => {
    return (
        <li className='cursor-pointer flex gap-2 items-center justify-between'>
            {navItem.icon}
            <a href={navItem.link} className='no-underline'>{navItem.label}</a>
        </li>
    )
}

export default Navbar