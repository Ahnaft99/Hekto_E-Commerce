import React from 'react'
import Container from "../Compoents/Container"
import freeDelivery from '../assets/freeDelivery.png'
import cashBack from '../assets/cashBack.png'
import premium from '../assets/premium.png'
import hours from '../assets/24hours.png'

const ShopexOffer = () => {
    return (
        <div className='py-20'>
            <Container>
                <div>
                    <h2 className='font-josefin font-bold text-[42px] text-center'>What Shopex Offer!</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-20">
                    <div className="bg-white shadow">
                        <div className=" flex justify-center items-center  pt-8">
                            <img className="h-16 w-16" src={freeDelivery} alt="freeDelivery" />
                        </div>
                        <div>
                            <h2 className='font-josefin font-bold text-center'>24/7 Support</h2>
                            <p className='font-lato font-bold text-[#1A0B5B4D] text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                    </div>
                    <div className="">
                    <div className="bg-white shadow">
                        <div className=" flex justify-center items-center  pt-8">
                            <img className="h-16 w-16" src={cashBack} alt="cashBack" />
                        </div>
                        <div>
                            <h2 className='font-josefin font-bold text-center'>24/7 Support</h2>
                            <p className='font-lato font-bold text-[#1A0B5B4D] text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                    </div>
                    </div>
                    <div className="">
                    <div className="bg-white shadow">
                        <div className=" flex justify-center items-center  pt-8">
                            <img className="h-16 w-16" src={premium} alt="premium" />
                        </div>
                        <div>
                            <h2 className='font-josefin font-bold text-center'>24/7 Support</h2>
                            <p className='font-lato font-bold text-[#1A0B5B4D] text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                    </div>
                    </div>
                    <div className="">
                    <div className="bg-white shadow">
                        <div className=" flex justify-center items-center  pt-8">
                            <img className="h-16 w-16" src={hours} alt="24hours" />
                        </div>
                        <div>
                            <h2 className='font-josefin font-bold text-center'>24/7 Support</h2>
                            <p className='font-lato font-bold text-[#1A0B5B4D] text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                    </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default ShopexOffer