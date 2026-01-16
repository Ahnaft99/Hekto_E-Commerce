import React from 'react'
import Container from './Container'
import bg1 from '../assets/bg1.png'
import chair2 from '../assets/chair2.png'

const UniqueOffer = () => {
    return (
        <div className='py-20'>
            <div className=' w-full bg-[#F1F0FF] py-10'>

                <Container>
                    <div className=" gap-4 w-full flex">
                        <div className="w-6/12 relative">
                            <img src={bg1} alt="" className="w-full h-auto " />
                            <img src={chair2} alt="" className='absolute top-0' />
                        </div>
                        <div className="w-6/12">
                            <div className='pt-10'>
                                <h2 className='font-josefin font-bold text-[35px]'>Unique Features Of leatest &
                                    Trending Poducts</h2>
                            </div>
                            <div className='pt-10'>
                                <ol className="list-none space-y-4">
                                    <li className="flex items-center text-[#ACABC3] font-lato font-medium">
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

                                <div className='flex items-center '>
                                <div className='w-40 text-center mt-5'>
                                    <p className='px-4 py-2 bg-pink-400 text-white'>Add To Cart</p>
                                </div>
                                <div className='ml-4 mt-4'>
                                    <p>B&B Italian Sofa </p>
                                    <p>$32.00</p>
                                </div>
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