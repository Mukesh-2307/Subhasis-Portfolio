import React from 'react'
import './Navbar.css'

const navbarItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
]

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-10'>
            <div className='nav-item-border p-4 rounded-full flex gap-4 justify-evenly items-center'>
                <div className='h-12 w-12 bg-[var(--color-creame)] rounded-full'></div>
                <p>SUBU</p>
            </div>
            <div>
                <ul className='nav-item-border p-4 rounded-full list-none flex gap-16'>
                    {navbarItems.map((navItem, index) => {
                        return (
                            <ListItem navItem={navItem} key={index} />
                        )
                    })}
                </ul>
            </div>
            <div>
                <button className='nav-item-border p-4 rounded-full'>Contact Me</button>
            </div>
        </nav>
    )
}

const ListItem = ({ navItem }) => {
    return (
        <li className='cursor-pointer'>
            <a href={navItem.link} className='no-underline'>{navItem.label}</a>
        </li>
    )
}

export default Navbar