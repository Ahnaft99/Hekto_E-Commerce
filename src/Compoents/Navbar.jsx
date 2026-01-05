import React from 'react'
import Container from './Container'
import Hekto from '../assets/Hekto.png'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
  <>
  <div>
    <Container>
        

     
    <div className="grid grid-cols-3 items-center mt-2 ">
  
{/* Logo */}
  <div>
    <img src={Hekto} alt="Logo" />
  </div>

{/* menu item */}
  <div className="flex justify-center">
    <ul className="grid grid-cols-6 gap-4">
      <li>Home</li>
      <li>Page</li>
      <li>Product</li>
      <li>Blog</li>
      <li>Shop</li>
      <li>Contact</li>
    </ul>
  </div>

{/* search box */}
  <div className='grid grid-cols-3  ml-10 relative'>
<div className='flex'>
    <input className='border border-[#FB2E86] ' type="text" placeholder='...'  />
    <div className='px-3 bg-[#FB2E86]'>
    <FaSearch className='absolute left-47 top-1 text-white'/>
    </div>
    

</div>
  </div>

</div>

       
      
    </Container>
  </div>
  </>
  )
}

export default Navbar