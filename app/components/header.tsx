import React from 'react'

const Header = () => {
  return (
   <div className='bg-black h-18'> 
    <div className='text-blue-400 flex justify-between items-center'>
    <h1 className='text-4xl m-2 cursor-pointer'>Header</h1>
    <ul className='flex gap-4 mr-4 text-2xl cursor-pointer'>
        <a className='hover:text-white' href="">Home</a>
        <a className='hover:text-white' href="">Contact</a>
        <a className='hover:text-white' href="">About</a>
    </ul>
    </div>
   </div>
  )
}

export default Header