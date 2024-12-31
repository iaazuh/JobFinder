import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Images/logologo-removebg-preview.png'

const Navbar = () => {

const linkClass = ({isActive})=> isActive ? ' bg-black text-white hover:bg-gray-900 hover:text-white rounded-full px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-full px-3 py-2'

  return (
    <nav className="fixed w-full backdrop-blur-sm z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-12 w-auto"
                src={Logo}
                alt="JobFinder"
              /> 
            </Link>
            <div className="md:ml-auto pt-5">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  >Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar