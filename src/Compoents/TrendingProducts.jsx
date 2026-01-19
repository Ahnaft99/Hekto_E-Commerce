import Container from "../Compoents/Container"
import React, { useEffect } from 'react'
import bag from '../assets/bag.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";
import scale from '../assets/scale.png'


function TrendingProducts() {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useSelector(state => state.product);


    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    if (isLoading) return <h2>Loading Product....</h2>;
    if (isError) return <h2>Error loading products</h2>;
    return (
        <div>
            <div className="py-[100px] ">
                <Container>


                    <div>
                        <h2 className='text-[42px] font-josefine text-center font-bold'>Trending Products</h2>
                    </div>

                    <div className="w-full flex gap-4 bg-white shadow-2xl ">
                        {data?.slice(0, 4).map((product) => (
                            <div
                                key={product.id}
                                className="w-62.5 bg-white shadow-2xl flex flex-col"
                            >
                                <img
                                    className="w-full h-55 object-cover bg-[#F5F6F8]"
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                    <div className="py-10">
                                    <h1 className="mt-2 text-center font-medium text-sm ">
                                    {product.title}
                                </h1>
                                <p className="text-center">{product.price}</p>
                                    </div>
                             
                            </div>
                        ))}
                    </div>
                            <div className="w-full flex gap-4 py-25 items-center">

                           
                    <div className="w-4/12  ">
                        <div className="w-82.5 h-80 bg-[#FFF6FB] shadow-2xl">
                            <h2 className="font-josefin text-[20px] font-semibold py-2 ml-4">23% off in all products</h2>
                           <a className="text-[#FB2E86] font-semibold ml-4 font-josefin" href="#">Shop Now</a>
                           <div className="w-full ml-37">
                           <img className="text-right" src={bag} alt="" />
                           </div>
                          
                        </div>
                    
                        </div> 
                            <div className="w-4/12">
                            <div className="w-82.5 h-80 bg-[#FFF6FB] shadow-2xl">
                            <h2 className="font-josefin text-[20px] font-semibold py-2 ml-4">23% off in all products</h2>
                           <a className="text-[#FB2E86] font-semibold ml-4 font-josefin" href="#">Shop Now</a>
                           <div className="w-full ">
                           <img className="w-62.5 ml-20 mt-10" src={scale} alt="" />
                           </div>
                          
                        </div>
                            </div>
                            <div className="w-4/12 ">
                            {data?.slice(0,3).map(product=>(
                                <>
                                   <div className="w-82.5 h-26 bg-white shadow-2xl mb-2 flex items-center ">
                                    <img className="h-18" src={product.thumbnail} alt="" />
                                    <div className="">
                                        <p>{product.title}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                                {/* <div className="w-82.5 h-20 bg-white shadow-2xl mb-2">
                                    <img className="h-18" src={product.thumbnail} alt="" />
                                </div>
                                <div className="w-82.5 h-20 bg-white shadow-2xl ">
                                    <img className="h-18" src={product.thumbnail} alt="" />
                                </div> */}
                                </>
                             
                                
                            ))}
                                
                            </div>
                        </div>
                     
                        
                    


                </Container>
            </div>
        </div>
    )
}

export default TrendingProducts