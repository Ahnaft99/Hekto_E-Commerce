import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slice/ProductSlice";

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

  return (
    <div className="pt-5 py-10">
      <h1 className="font-josefin font-semibold text-[42px] text-center">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-primary-soft max-w-sm border rounded-base shadow-xs"
          >
            <img
              className="rounded-t-base"
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="p-6 text-center">
              <h5 className="mt-3 mb-4 text-xl font-semibold">
                {product.title}
              </h5>
              <p className="text-sm mb-4">${product.price}</p>
              <button className="text-white bg-brand px-4 py-2 rounded">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
