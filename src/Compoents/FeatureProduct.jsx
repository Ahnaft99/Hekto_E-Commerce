import React, { useEffect } from "react";
import Container from "../Compoents/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart, CiShoppingCart, CiZoomIn } from "react-icons/ci";


const FeatureProduct = () => {
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
    <div className="pt-5 py-10">
      <Container>
      <h1 className="font-josefin font-semibold text-[42px] md:text-4xl sm:text-3xl text-center">
  Featured Products
</h1>

<div className="mt-8">
  <Slider {...settings}>
    {data?.slice(1, 9).map((product) => (
      <div key={product.id} className="px-4">
        <div className="border-2 border-black hover:border-blue-800 transition duration-300 ease-in-out relative group">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 md:h-52 sm:h-40 object-cover"
          />
          <div className="z-10 ml-2 flex absolute top-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl md:text-lg sm:text-base">
            <CiShoppingCart />
            <CiHeart />
            <CiZoomIn />
          </div>
          <div className="transition duration-400 ease-in-out group-hover:bg-blue-800 p-4">
            <h1 className="text-center pt-2 font-lato text-[#FB2E86] group-hover:text-white text-lg md:text-base sm:text-sm transition duration-300">
              {product.title}
            </h1>
            <h2 className="text-center pt-1 group-hover:text-white text-md md:text-sm sm:text-xs transition duration-300">
              ${product.price}
            </h2>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
      </Container>

    </div>
  );
};

export default FeatureProduct;
