import Container from "../Components/Container";
import React, { useEffect } from "react";
import bag from "../assets/bag.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";
import scale from "../assets/scale.png";

function TrendingProducts() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isLoading) return <h2>Loading Product....</h2>;
  if (isError) return <h2>Error loading products</h2>;

  return (
    <div className="py-[60px] md:py-[100px]">
      <Container>
        <h2 className="text-[28px] md:text-[42px] font-josefine text-center font-bold mb-10">
          Trending Products
        </h2>

        {/* Top products */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white">
          {data?.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-2xl flex flex-col"
            >
              <img
                className="w-full h-[220px] object-cover bg-[#F5F6F8]"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="py-6">
                <h1 className="text-center font-medium text-sm px-2">
                  {product.title}
                </h1>
                <p className="text-center">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 items-start">
          {/* Offer 1 */}
          <div className="w-full">
            <div className="w-full h-[320px] bg-[#FFF6FB] shadow-2xl p-4 relative">
              <h2 className="font-josefin text-[18px] md:text-[20px] font-semibold">
                23% off in all products
              </h2>
              <a
                className="text-[#FB2E86] font-semibold font-josefin inline-block mt-2"
                href="#"
              >
                Shop Now
              </a>
              <img
                className="absolute bottom-4 right-4 w-[120px] md:w-[160px]"
                src={bag}
                alt=""
              />
            </div>
          </div>

          {/* Offer 2 */}
          <div className="w-full">
            <div className="w-full h-[320px] bg-[#FFF6FB] shadow-2xl p-4 relative">
              <h2 className="font-josefin text-[18px] md:text-[20px] font-semibold">
                23% off in all products
              </h2>
              <a
                className="text-[#FB2E86] font-semibold font-josefin inline-block mt-2"
                href="#"
              >
                Shop Now
              </a>
              <img
                className="absolute bottom-4 right-6 w-[120px] md:w-[180px]"
                src={scale}
                alt=""
              />
            </div>
          </div>

          {/* Small product list */}
          <div className="w-full">
            {data?.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="w-full h-[100px] bg-white shadow-2xl mb-4 flex items-center gap-4 p-3"
              >
                <img
                  className="h-[70px] w-[70px] object-cover"
                  src={product.thumbnail}
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium">{product.title}</p>
                  <p className="text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TrendingProducts;
