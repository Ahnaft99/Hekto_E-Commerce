import React from 'react';
import Container from './Container';
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const TopNav = () => {
  return (
    <div className="bg-[#7E33E0] w-full hidden md:block">
      <Container>
        <div className="flex justify-between py-2">
          {/* Left Side */}
          <div className="flex gap-8 items-center">
            <h5 className="flex items-center gap-2 text-white font-josefin text-base">
              <AiTwotoneMail className="text-white" />
              mhhasanul@gmail.com
            </h5>
            <h5 className="flex items-center gap-2 text-white font-josefin text-base">
              <FaPhoneAlt className="text-white" />
              (12345)67890
            </h5>
          </div>

          {/* Right Side */}
          <ul className="flex gap-4 items-center text-white font-josefin text-base">
            <li>English</li>
            <li className="flex items-center gap-1">
              USD <FaChevronDown />
            </li>
            <li className="flex items-center gap-1">
              Login <FaChevronDown />
            </li>
            <li className="flex items-center gap-1">
              Wishlist <FaChevronDown />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
