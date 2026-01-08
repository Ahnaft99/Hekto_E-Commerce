import React from 'react'
import Container from './Container'
import lamp from '../assets/lamp.png'
import bg from '../assets/bg1.png'
import chair from '../assets/chair.png'

const Banner = () => {
  return (
    <div className='bg-[#F2F0FF] py-15 relative'>
        <div>
        <div>
            <img className='w-30 h-70.5 absolute top-0  ' src={lamp} alt="LampIamge" />
        </div>
        <Container>
            <div className='flex justify-between'>
           
                <div className='pt-30 w-6/12'>
                <h4 className='font-lato text-[#FB2E86] text-[16px] font-bold'>Best Furniture For Your Castle....</h4>
                <h2 className='text-[38px] font-bold font-josefin'>New Furniture Collection 
                Trends in 2020</h2>
                <p className='text-[#8A8FB9] text-[16px] font-bold font-lato py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>

              <div className='pt-10'>
              <button className='border bg-[#FB2E86] text-white font-josefin font-semibold px-4 py-2' type='submit'>Shop Now</button>
              </div>
                </div>
         
            <div className='w-6/12'>
            <img className='w-145 h-120 relative' src={bg} alt="" />
            <img  className='z-10 w-135 h-90 absolute top-28 ' src={chair} alt="" />
            </div>
           
            
            </div>
       
         
        </Container>
        </div>
      

    </div>
  )
}

export default Banner