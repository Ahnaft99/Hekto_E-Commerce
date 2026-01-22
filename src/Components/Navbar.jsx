import React, { useState } from 'react'
import Container from './Container'
import Hekto from '../assets/Hekto.png'
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa'

const Navbar = () => {
 const [menu, setMenu] = useState(false)

 return (
 <div className='pb-3'>
 <Container>
 <div className="grid grid-cols-2 lg:grid-cols-3 items-center mt-2 relative"> 

 {/* Logo */}
 <div>
 <img src={Hekto} alt="Logo" className="max-w-25 sm:max-w-full" />
 </div>

 <div className="hidden lg:flex justify-center">
 <ul className="flex gap-4 items-center"> 
 <li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Home
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
 <li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Page
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
<li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Product
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
 <li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Blog
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
 <li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Shop
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
 <li className="font-josefin text-[16px] hover:text-red-500 transition cursor-pointer flex items-center gap-1.5 group">
 Contact
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition text-[14px]" />
 </li>
 </ul>
 </div>

 {/* Search (desktop only) */}
 <div className="hidden lg:flex justify-end">
<input className="border border-[#FB2E86] px-2" type="text" />
 <div className="px-3 bg-[#FB2E86] flex items-center">
 <FaSearch className="text-white" />
 </div>
 </div>

 {/* Bar icon (sm & md) */}
 <div className="flex justify-end lg:hidden">
 <FaBars
 className="text-xl cursor-pointer"
 onClick={() => setMenu(!menu)}
 />
 </div>

 {/* Mobile Menu */}
{menu && (
 <div className="absolute top-14 left-0 w-full bg-white shadow-md lg:hidden z-10"> {/* Added z-10 for layering */}
<ul className="flex flex-col items-center gap-4 py-4">
                
                {/* Mobile Search Bar - Added for better UX on mobile */}
                <li className="w-11/12 mx-auto">
                    <div className="flex w-full">
                        <input 
                            className="border border-[#FB2E86] px-3 py-2 text-sm focus:outline-none w-full" 
                            type="text" 
                            placeholder="Search..."
                        />
                        <button className="px-4 bg-[#FB2E86] flex items-center justify-center transition hover:opacity-90">
                            <FaSearch className="text-white text-base" />
                        </button>
                    </div>
                </li>
                {/* End Mobile Search Bar */}

 <li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
 Home
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
<li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
 Page
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
 <li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
Product
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
 <li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
 Blog
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
 <li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
 Shop
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
 <li className="font-josefin hover:text-red-500 w-full text-center py-1 flex items-center justify-center gap-2 group cursor-pointer">
 Contact
 <FaChevronDown className="opacity-0 group-hover:opacity-100 transition" />
 </li>
 </ul>
 </div>
 )}

 </div>
 </Container>
 </div>
 )
}

export default Navbar