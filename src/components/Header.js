import React from 'react'
import CustomLink from './CustomLink'

function Header() {
  return (
    <div className="bg-blue-50 text-blue-900 ">
        <div className='justify-between p-4 hidden md:flex'>
        <div className="font-semibold text-xl flex items-center">
           <span>Animal Image Classification</span>
        </div>
        <div className="flex justify-center items-center">
          <CustomLink className="mx-1 px-1" to='/'>Home</CustomLink>
          <CustomLink className="mx-1 px-1" to='/about'>About</CustomLink>
        </div>

      </div>
    </div>
  )
}

export default Header