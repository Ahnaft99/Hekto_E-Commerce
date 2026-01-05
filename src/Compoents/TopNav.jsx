import React from 'react'
import Container from './Container'
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'

const TopNav = () => {
  return (
    <>
   
    <div className='bg-[#7E33E0] w-full'>
    <Container>
    <div className='flex justify-between'>
    <div className='grid-cols-4 flex gap-8'>
        <h5 className='flex items-center gap-2 text-white font-josefin'><AiTwotoneMail className='text-white'/>mhhasanul@gmail.com</h5>
        <h5 className='flex items-center gap-2 text-white font-josefin'><FaPhoneAlt className='text-white'/>(12345)67890</h5>
    </div>
    <div className='grid-cols-8'>
        <ul className='flex gap-3 items-center'>
            <li className=' text-white font-josefin'>English</li>
            <li className='flex items-center gap-2  text-white font-josefin'>USd<FaChevronDown/></li>
            <li className='flex items-center gap-2 text-white font-josefin'>Login<FaChevronDown/></li>
            <li className='flex items-center gap-2 text-white font-josefin'>Wishlist<FaChevronDown/></li>
        </ul>
    </div>
    </div>
    </Container>
    </div>

   
    </>
  )
}

export default TopNav