import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Aghamy</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-600' />
                </form>
                <ul className='flex gap-4'>
                    <NavLink to='/'>
                        <li className='hidden sm:inline hover:underline text-slate-700'>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to='about'>
                        <li className='hidden sm:inline hover:underline text-slate-700'>
                            About
                        </li>
                    </NavLink>
                    <NavLink to='sign-in'>
                        <li className='hover:underline text-slate-700'>
                            Sign in
                        </li>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}

export default Header