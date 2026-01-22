import React from 'react'
import Container from "../Components/Container"
import freeDelivery from '../assets/freeDelivery.png'
import cashBack from '../assets/cashBack.png'
import premium from '../assets/premium.png'
import hours from '../assets/24hours.png'

const ShopexOffer = () => {
    return (
        <div className='py-20'>
            <Container>
                <div>
                    <h2 className='font-josefin font-bold text-[42px] text-center sm:text-3xl md:text-4xl lg:text-[42px]'>
                        What Shopex Offer!
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                    {/* Card 1 */}
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                        <img className="h-16 w-16 mb-4" src={freeDelivery} alt="freeDelivery" />
                        <h2 className='font-josefin font-bold mb-2'>24/7 Support</h2>
                        <p className='font-lato text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                        <img className="h-16 w-16 mb-4" src={cashBack} alt="cashBack" />
                        <h2 className='font-josefin font-bold mb-2'>Cash Back</h2>
                        <p className='font-lato text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                        <img className="h-16 w-16 mb-4" src={premium} alt="premium" />
                        <h2 className='font-josefin font-bold mb-2'>Premium Quality</h2>
                        <p className='font-lato text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                        <img className="h-16 w-16 mb-4" src={hours} alt="24hours" />
                        <h2 className='font-josefin font-bold mb-2'>Fast Delivery</h2>
                        <p className='font-lato text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ShopexOffer
