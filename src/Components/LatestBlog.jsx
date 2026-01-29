import React from "react";
import LB1 from "../assets/LB1.png"
import LB2 from "../assets/LB2.png"
import LB3 from "../assets/LB3.png"
import Container from "./Container";

const LatestBlog = () => {
  return (
    <div className="py-12">
        <Container>
                 {/* Title */}
      <h2 className="text-center text-[#151875] font-josefin font-bold text-2xl sm:text-3xl mb-10">
        Latest Blog
      </h2>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src={LB1}
            alt="blog"
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2">
              <span className="text-pink-500 font-semibold">SaberAli</span> • 21 August,2020
            </p>

            <h3 className="text-[#151875] font-semibold mb-2">
              Top essential trends in 2021
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>

            <a href="#" className="text-pink-500 text-sm font-semibold">
              Read More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src={LB2}
            alt="blog"
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2">
              <span className="text-pink-500 font-semibold">Surfauxion</span> • 21 August,2020
            </p>

            <h3 className="text-[#FB2E86] font-semibold mb-2">
              Top essential trends in 2021
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>

            <a href="#" className="text-pink-500 text-sm font-semibold">
              Read More
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src={LB3}
            alt="blog"
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <p className="text-sm text-gray-500 mb-2">
              <span className="text-pink-500 font-semibold">SaberAli</span> • 21 August,2020
            </p>

            <h3 className="text-[#151875] font-semibold mb-2">
              Top essential trends in 2021
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              More off this less hello samlande lied much over tightly circa horse taped mightly
            </p>

            <a href="#" className="text-pink-500 text-sm font-semibold">
              Read More
            </a>
          </div>
        </div>

      </div>
        </Container>
    </div>
  );
};

export default LatestBlog;
