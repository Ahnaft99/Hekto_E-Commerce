import Container from "../Compoents/Container"
import React, { useEffect } from 'react'
import chair from '../assets/chair.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";


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


                </Container>
            </div>
        </div>
    )
}

export default TrendingProducts