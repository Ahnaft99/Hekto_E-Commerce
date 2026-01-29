import React from 'react'
import Container from './Container'

const NewsLetter = () => {
    return (
        <div className='py-6 sm:py-8 md:py-10'>
            <div className="bg-[url('./Rectangle.png')] bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-25">
                <Container>
                    <div className='w-full'>

                        <h3 className='text-center  font-josefin text-[#151875]  font-bold text-[22px]  sm:text-[26px] md:text-[30px] lg:text-[35px] leading-tight'>
                            Get Leatest Update By Subscribe <br className="hidden sm:block" />
                            0ur Newslater
                        </h3>

                        <p className='   px-4   py-2   border    bg-[#FB2E86]   w-[120px]  sm:w-[130px]    text-white   text-center  mx-auto   mt-4   sm:mt-5  cursor-pointer text-sm  sm:text-base '>
                            Shop Now
                        </p>

                    </div>
                </Container>
            </div>
        </div>
    )
}

export default NewsLetter
