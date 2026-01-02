import React from 'react'
import Container from './Container'

const TopNav = () => {
  return (
    <>
   
    <div className='bg-[#7E33E0] w-full'>
    <Container>
    <div className='flex justify-between'>
    <div className='grid-cols-4 flex gap-8'>
        <h5> ahnaf.ent@gmail.com </h5>
        <h5>01689940198</h5>
    </div>
    <div className='grid-cols-8'>
        <ul className='flex gap-3'>
            <li>English</li>
            <li>USd</li>
            <li>Login</li>
            <li>Wishlist</li>
        </ul>
    </div>
    </div>
    </Container>
    </div>

   
    </>
  )
}

export default TopNav