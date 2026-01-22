import React from 'react'
import Container from './Container'
import lamp from '../assets/lamp.png'
import bg from '../assets/bg1.png'
import chair from '../assets/chair.png'

const Banner = () => {
  return (
    <div className='bg-[#F2F0FF] py-10 md:py-15 relative overflow-hidden'>
        <div>
        <div>
            <img className='hidden lg:block w-24 lg:w-30 h-auto absolute top-0' src={lamp} alt="LampIamge" />
        </div>
        <Container>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
           
                <div className='pt-10 lg:pt-30 w-full lg:w-6/12 text-center lg:text-left'>
                <h4 className='font-lato text-[#FB2E86] text-[14px] md:text-[16px] font-bold'>Best Furniture For Your Castle....</h4>
                <h2 className='text-[26px] md:text-[32px] lg:text-[38px] font-bold font-josefin'>
                  New Furniture Collection 
                <br />
                Trends in 2020
                </h2>
                <p className='text-[#8A8FB9] text-[14px] md:text-[16px] font-bold font-lato py-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                </p>

              <div className='pt-6 lg:pt-10'>
              <button className='border bg-[#FB2E86] text-white font-josefin font-semibold px-4 py-2' type='submit'>Shop Now</button>
              </div>
                </div>
         
            <div className='w-full lg:w-6/12 relative flex justify-center'>
            <img className='w-full max-w-[420px] md:max-w-[500px] relative' src={bg} alt="" />
            <img className='z-10 w-[80%] md:w-[75%] lg:w-[70%] absolute top-16 md:top-24 lg:top-28' src={chair} alt="" />
            </div>
           
            
            </div>
       
         
        </Container>
        </div>
      

    </div>
  )
}

export default Banner
