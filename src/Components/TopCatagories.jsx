import React, { useEffect } from 'react'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './Slice/ProductSlice';
import Slider from 'react-slick';
import { CiHeart, CiShoppingCart, CiZoomIn } from 'react-icons/ci';

const TopCatagories = () => {
    const dispatch = useDispatch();

    const { data, isLoading, isError } = useSelector(
      (state) => state.product
    );
  
    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);
  
    if (isLoading) return <h2>Loading Product....</h2>;
    if (isError) return <h2>Error loading products</h2>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1280, // laptops
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1024, // tablets landscape
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // tablets portrait / large mobiles
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // small mobiles
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
  return (
    <div className='py-15'>
        <Container>
            <div className='w-full font-josefin text-[42px] font-bold'>
                <h1 className='text-center'>Top Catagories</h1>
            </div>
            <div>
            <div className="mt-8">
  <Slider {...settings}>
    {data?.slice(1, 9).map((product) => (
   <div key={product.id} className="px-4 h-full">
   <div className=" border-black relative group h-full flex flex-col ">
 
     {/* IMAGE */}
     <div className="w-full h-64 md:h-52 sm:h-44 overflow-hidden shadow-[#F6F7FB] shadow-2xl rounded-[50%] border-2  hover:border-[#31208A] transition duration-300 ease-in-out ">
       <img
         src={product.thumbnail}
         alt={product.title}
         className="w-full h-full object-cover"
       />
     </div>
     <div>
        <h1 className='text-center font-josefin text-[#151875]'>{product.title}</h1>
        <h2 className='text-center font-josefin text-[#151875] '>${product.price  }</h2>
     </div>
 
 
 
  
   </div>
 </div>
 
    ))}
  </Slider>
</div>
            </div>
        </Container>
    </div>
  )
}

export default TopCatagories