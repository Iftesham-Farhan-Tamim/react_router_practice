import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import User from './User'

const Navbar = () => {

    return (
        <div className='bg-black'>
            <nav className='flex gap-[34px] list-none bg-black text-white p-[32px]'>
                <NavLink className={(e) => { return e.isActive ? "text-red-500" : "" }} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "text-red-500" : "" }} to="/about"><li>About</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "text-red-500" : "" }} to="/login"><li>Login</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "text-red-500" : "" }} to="/user"><li>User</li></NavLink>
                {/* <User /> */}
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar