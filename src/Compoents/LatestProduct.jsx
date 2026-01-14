import React, { useEffect } from 'react';
import Container from './Container';
import 'preline/preline';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './Slice/ProductSlice';

const LatestProduct = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(state => state.product);

  // Fetch products
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Initialize Preline after render
  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [data]);

  if (isLoading) return <h2>Loading Product....</h2>;
  if (isError) return <h2>Error loading products</h2>;

  return (
    <div className="py-10">
      <Container>
        {/* Title */}
        <h2 className="text-[42px] font-bold font-josefin text-center">
          Latest Products
        </h2>

        {/* Tabs */}
        <div className="border-b border-gray-200 w-full mt-6">
          <nav
            className="flex justify-center gap-x-6"
            aria-label="Tabs"
            role="tablist"
          >
            {/* TAB 1 (ACTIVE BY DEFAULT) */}
            <button
              type="button"
              className="active hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm text-gray-500 hover:text-blue-600 focus:outline-none"
              id="tabs-with-underline-item-1"
              aria-selected="true"
              data-hs-tab="#tabs-with-underline-1"
              aria-controls="tabs-with-underline-1"
              role="tab"
            >
              New Arrival
            </button>

            {/* TAB 2 */}
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm text-gray-500 hover:text-blue-600 focus:outline-none"
              id="tabs-with-underline-item-2"
              aria-selected="false"
              data-hs-tab="#tabs-with-underline-2"
              aria-controls="tabs-with-underline-2"
              role="tab"
            >
              Best Seller
            </button>

            {/* TAB 3 */}
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm text-gray-500 hover:text-blue-600 focus:outline-none"
              id="tabs-with-underline-item-3"
              aria-selected="false"
              data-hs-tab="#tabs-with-underline-3"
              aria-controls="tabs-with-underline-3"
              role="tab"
            >
              Featured
            </button>
          </nav>
        </div>

        {/* Tab Panels */}
        <div className="mt-6">
          {/* PANEL 1 (VISIBLE BY DEFAULT) */}
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
            className="hs-tab-active:block block"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {data?.slice(0, 6).map(product => (
                <div
                  key={product.id}
                  className="w-60 border rounded-lg p-4 text-center shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="mt-1 font-bold text-blue-600 text-lg">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 2 */}
          <div
            id="tabs-with-underline-2"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
            className="hs-tab-active:block hidden"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {data?.slice(6, 12).map(product => (
                <div
                  key={product.id}
                  className="w-60 border rounded-lg p-4 text-center shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="mt-1 font-bold text-blue-600 text-lg">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 3 */}
          <div
            id="tabs-with-underline-3"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
            className="hs-tab-active:block hidden"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {data?.slice(12, 18).map(product => (
                <div
                  key={product.id}
                  className="w-60 border rounded-lg p-4 text-center shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="mt-1 font-bold text-blue-600 text-lg">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestProduct;
