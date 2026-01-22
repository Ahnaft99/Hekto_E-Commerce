import React, { useEffect } from "react";
import Container from "./Container";
import "preline/preline";
import chair from "../assets/chair.png";
import chair2 from "../assets/chair2.png";

const Discount = () => {
  // Initialize Preline after DOM is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      window.HSStaticMethods?.autoInit();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20">
      {/* Add responsive padding to container for space both sides */}
      <Container className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-josefin text-center">
          Discount Item
        </h2>

        {/* Tab group */}
        <div data-hs-tab-group>
          {/* Tabs */}
          <div className="border-b border-gray-200 w-full mt-6">
            <nav className="flex justify-center gap-x-2 sm:gap-x-6" role="tablist">
              <button
                type="button"
                role="tab"
                data-hs-tab="#discount-tab-1"
                className="hs-tab-active:font-semibold hs-tab-active:text-pink-500 hs-tab-active:border-pink-500
                           py-2 sm:py-4 px-2 sm:px-4 border-b-2 border-transparent text-gray-500 text-sm sm:text-base"
                aria-selected="true"
              >
                Wood Chair
              </button>
              <button
                type="button"
                role="tab"
                data-hs-tab="#discount-tab-2"
                className="hs-tab-active:font-semibold hs-tab-active:text-pink-500 hs-tab-active:border-pink-500
                           py-2 sm:py-4 px-2 sm:px-4 border-b-2 border-transparent text-gray-500 text-sm sm:text-base"
                aria-selected="false"
              >
                Plastic Chair
              </button>
              <button
                type="button"
                role="tab"
                data-hs-tab="#discount-tab-3"
                className="hs-tab-active:font-semibold hs-tab-active:text-pink-500 hs-tab-active:border-pink-500
                           py-2 sm:py-4 px-2 sm:px-4 border-b-2 border-transparent text-gray-500 text-sm sm:text-base"
                aria-selected="false"
              >
                Sofa Collection
              </button>
            </nav>
          </div>

          {/* Panels */}
          <div className="mt-10 space-y-10">
            {/* TAB 1 */}
            <div
              id="discount-tab-1"
              role="tabpanel"
              className="hs-tab-active:block block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div className="px-2 sm:px-0 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151875] mb-3">
                    20% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 font-semibold mb-3">
                    Eams Sofa Compact
                  </p>
                  <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-gray-500 mb-8">
                    <li>✔ Material expose like metals</li>
                    <li>✔ Clear lines and geometric figures</li>
                    <li>✔ Simple neutral colours</li>
                    <li>✔ Material expose like metals</li>
                  </ul>
                  <button className="bg-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded">
                    Shop Now
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="w-40 sm:w-72 lg:w-80 h-40 sm:h-72 lg:h-80 bg-pink-100 rounded-full absolute"></div>
                  <img
                    src={chair}
                    alt="chair"
                    className="relative z-10 w-64 sm:w-72 lg:w-80"
                  />
                </div>
              </div>
            </div>

            {/* TAB 2 */}
            <div
              id="discount-tab-2"
              role="tabpanel"
              className="hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div className="px-2 sm:px-0 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151875] mb-3">
                    20% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 font-semibold mb-3">
                    Eams Sofa Compact
                  </p>
                  <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-gray-500 mb-8">
                    <li>✔ Material expose like metals</li>
                    <li>✔ Clear lines and geometric figures</li>
                    <li>✔ Simple neutral colours</li>
                    <li>✔ Material expose like metals</li>
                  </ul>
                  <button className="bg-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded">
                    Shop Now
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="w-40 sm:w-72 lg:w-80 h-40 sm:h-72 lg:h-80 bg-pink-100 rounded-full absolute"></div>
                  <img
                    src={chair2}
                    alt="chair"
                    className="relative z-10 w-64 sm:w-72 lg:w-80"
                  />
                </div>
              </div>
            </div>

            {/* TAB 3 */}
            <div
              id="discount-tab-3"
              role="tabpanel"
              className="hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div className="px-2 sm:px-0 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151875] mb-3">
                    20% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 font-semibold mb-3">
                    Eams Sofa Compact
                  </p>
                  <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-gray-500 mb-8">
                    <li>✔ Material expose like metals</li>
                    <li>✔ Clear lines and geometric figures</li>
                    <li>✔ Simple neutral colours</li>
                    <li>✔ Material expose like metals</li>
                  </ul>
                  <button className="bg-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded">
                    Shop Now
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="w-40 sm:w-72 lg:w-80 h-40 sm:h-72 lg:h-80 bg-pink-100 rounded-full absolute"></div>
                  <img
                    src={chair}
                    alt="chair"
                    className="relative z-10 w-64 sm:w-72 lg:w-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Discount;
