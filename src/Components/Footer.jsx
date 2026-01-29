import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#F2F0FF] pt-14">
        <Container>
             
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-[#000] mb-4">Hekto</h2>

          <div className="flex mb-4">
            <input 
              type="email"
              placeholder="Enter Email "
              className="px-3 py-2 w-full text-sm outline-none"
            />
            <button className="bg-[#FB2E86] text-white px-4 w-[150px] text-sm">
              Sign Up
            </button>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Contact Info <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-[#151875] mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold text-[#151875] mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-[#151875] mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E7E4F8] mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>©Webecy - All Rights Reserved</p>

          <div className="flex gap-3 mt-3 sm:mt-0">
            <span className="w-8 h-8 rounded-full bg-[#151875]"></span>
            <span className="w-8 h-8 rounded-full bg-[#151875]"></span>
            <span className="w-8 h-8 rounded-full bg-[#151875]"></span>
          </div>
        </div>
      </div>
   
        </Container>
         </footer>
    </div>
   
  );
};

export default Footer;
