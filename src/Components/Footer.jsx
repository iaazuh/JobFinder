import React from 'react'
import Logo from '../assets/Images/logologo-removebg-preview.png'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 p-3 bg-white text-sm">
            <div>
                <img className='w-40 mb-5 pl-10' src={Logo} alt="" />
                <div className="grid grid-cols-3 gap-15 w-full md:w-2/3">
                
                <ul className='flex flex-col gap-2 text-indigo-600'>
                <h4 className='text-l bold font-medium text-indigo-600'>NEED HELP?</h4>
                  <li>Contact Center</li>
                  <li>Chat With us</li>
                  <li>Service Center</li>
                </ul>

                <ul className='flex flex-col gap-1 text-indigo-600'>
                <h4 className='text-l bold font-medium text-indigo-600'>COLLABORATE WITH US</h4>
                  <li>Paid partnerships</li>
                  <li>JobFinder Careers</li>
                  <li>Corporate partnerships</li>
                </ul>

                <ul className='flex flex-col gap-1 text-indigo-600 pl-8 m-0'>
                <p className='text-indigo-600 underline'>Our International locations are </p>
                  <li>Accra</li>
                  <li>Benin </li>
                  <li>United States </li>
                  <li>Cairo</li>
                  <li>Canada</li>
                  <li>Uk</li>
                </ul>
                </div>
            </div>

            <div>
              <p className="text-xl font-medium mb-5">
                COMPANY
              </p>
              <ul className='flex flex-col gap-1 text-indigo-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div>
              <p className='text-xl font-medium mb-5'> GET IN TOUCH </p>
              <ul className='flex flex-col gap-1 text-indigo-600'>
                <li>+555-5555</li>
                <li>info@jobfinder.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr />
          <p className='text-center text-sm py-5 bg-indigo-400'>
            Copyright &copy; JobFinder 2024 All Rights Reserved
          </p>
        </div>   
    </div>
  )
}

export default Footer