import React from 'react'
import Container from './Container'
import bg1 from '../assets/bg1.png'
import chair2 from '../assets/chair2.png'

const UniqueOffer = () => {
    return (
        <div className='py-20'>
            <div className='w-full bg-[#F1F0FF] py-10'>
            <Container className="px-4 sm:px-6 lg:px-20">
  <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
    {/* Left Image */}
    <div className="w-full lg:w-1/2 relative">
      <img src={bg1} alt="" className="w-full h-auto rounded-lg" />
      <img src={chair2} alt="" className='absolute top-0 left-1/4 lg:left-0 w-3/4 lg:w-auto' />
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2">
      <h2 className='font-josefin font-bold text-2xl sm:text-3xl lg:text-[35px]'>
        Unique Features Of Latest & Trending Products
      </h2>

      <ol className="list-none space-y-4 mt-6">
        <li className="flex items-center text-[#ACABC3] font-lato font-medium ">
          <span className="h-4 w-4 rounded-full bg-red-500 inline-block mr-3"></span>
          All frames constructed with hardwood solids and laminates
        </li>
        <li className="flex items-center text-[#ACABC3] font-lato font-medium">
          <span className="h-4 w-4 rounded-full bg-blue-500 inline-block mr-3"></span>
          Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails
        </li>
        <li className="flex items-center text-[#ACABC3] font-lato font-medium">
          <span className="h-4 w-4 rounded-full bg-green-300 inline-block mr-3"></span>
          Arms, backs and seats are structurally reinforced
        </li>
      </ol>

      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row items-center lg:items-start mt-5 gap-4 text-center lg:text-left'>
  {/* Button */}
  <div className='w-full sm:w-40 text-center'>
    <button className='px-4 py-2 bg-pink-400 text-white rounded-lg w-full sm:w-auto'>
      Add To Cart
    </button>
  </div>

  {/* Product Info */}
  <div>
    <p className='font-bold'>B&B Italian Sofa</p>
    <p className='text-lg'>$32.00</p>
  </div>
</div>
    </div>
  </div>
</Container>

            </div>
        </div>
    )
}

export default UniqueOffer
