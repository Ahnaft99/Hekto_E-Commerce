import React, { useEffect } from 'react';
import Container from './Container';
import 'preline/preline'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './Slice/ProductSlice';

const LatestProduct = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useSelector(state => state.product);

    // Fetch products on mount
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    // Initialize Preline after render
    useEffect(() => {
        if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit();
        }
    }, [data]); // Run again after products are loaded

    if (isLoading) return <h2>Loading Product....</h2>;
    if (isError) return <h2>Error loading products</h2>;

    return (
        <div className="py-10">
            <Container>
                <div>
                    <h2 className="text-[42px] font-bold font-josefin text-center">Latest Products</h2>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 w-full mt-6">
                    <nav
                        className="flex gap-x-1 justify-center"
                        aria-label="Tabs"
                        role="tablist"
                        aria-orientation="horizontal"
                    >
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none"
                            id="tabs-with-underline-item-1"
                            aria-selected="true"
                            data-hs-tab="#tabs-with-underline-1"
                            aria-controls="tabs-with-underline-1"
                            role="tab"
                        >
                            New Arrival
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none"
                            id="tabs-with-underline-item-2"
                            aria-selected="false"
                            data-hs-tab="#tabs-with-underline-2"
                            aria-controls="tabs-with-underline-2"
                            role="tab"
                        >
                           Best Seller
                        </button>
                        <button
                            type="button"
                            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-4 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none"
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
                <div className="mt-3">
                    <div
                        id="tabs-with-underline-1"
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-1"
                        className="hs-tab-active:block hidden"
                    >
                   <div className="text-gray-500 flex flex-wrap gap-6 justify-center">
  {data?.slice(0, 3).map(product => (
    <div
      key={product.id}
      className="border rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-60"
    >
      <img
        className="w-full h-48 object-cover rounded-lg mb-3"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
      <p className="mt-1 font-bold text-blue-600 text-lg">${product.price}</p>
    </div>
  ))}
</div>
                    </div>

                    <div
                        id="tabs-with-underline-2"
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-2"
                        className="hs-tab-active:block hidden"
                    >
                        <div className="text-gray-500 flex flex-wrap gap-6 justify-center">
  {data?.slice(4, 7).map(product => (
    <div
      key={product.id}
      className="border rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-60"
    >
      <img
        className="w-full h-48 object-cover rounded-lg mb-3"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
      <p className="mt-1 font-bold text-blue-600 text-lg">${product.price}</p>
    </div>
  ))}
</div>
                    </div>

                    <div
                        id="tabs-with-underline-3"
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-3"
                        className="hs-tab-active:block hidden"
                    >
                      <div className="text-gray-500 flex flex-wrap gap-6 justify-center">
  {data?.slice(8, 11).map(product => (
    <div
      key={product.id}
      className="border rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-60"
    >
      <img
        className="w-full h-48 object-cover rounded-lg mb-3"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
      <p className="mt-1 font-bold text-blue-600 text-lg">${product.price}</p>
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
