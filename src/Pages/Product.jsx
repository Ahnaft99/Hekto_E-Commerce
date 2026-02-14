import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import TopNav from "../Components/TopNav";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <TopNav />
      <Navbar />

    
      <div className="bg-[#F6F5FF] py-14">
        <Container>
          <h1 className="font-josefin text-[36px] font-bold text-[#101750]">
            Product Items
          </h1>

          
          <div className="flex items-center gap-2 mt-2 text-[14px] font-josefin">
            <Link to="/" className="hover:text-[#FB2E86] transition">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <span>Page</span>
            <span className="text-gray-400">•</span>
            <span className="text-[#FB2E86] font-medium">
              Shop List
            </span>
          </div>
        </Container>
      </div>

    
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 py-14">

      
          <aside className="w-full lg:w-3/12 bg-white p-6 border rounded-md shadow-sm">
            <h2 className="font-josefin text-[20px] font-semibold mb-4">
              Filters
            </h2>

            <ul className="space-y-3 text-[15px] font-josefin">
              <li className="hover:text-[#FB2E86] cursor-pointer transition">
                Category
              </li>
              <li className="hover:text-[#FB2E86] cursor-pointer transition">
                Price Range
              </li>
              <li className="hover:text-[#FB2E86] cursor-pointer transition">
                Brand
              </li>
              <li className="hover:text-[#FB2E86] cursor-pointer transition">
                Rating
              </li>
            </ul>
          </aside>

         
          <section className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

           
            {[1,2,3,4,5,6].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-md p-4 hover:shadow-lg transition"
              >
                <div className="h-[180px] bg-gray-100 rounded-md mb-4"></div>

                <h3 className="font-josefin text-[16px] font-semibold">
                  Product Name
                </h3>

                <p className="text-[#FB2E86] font-bold mt-1">
                  $99.00
                </p>

                <button className="mt-4 w-full py-2 bg-[#FB2E86] text-white rounded-md text-[14px] hover:opacity-90 transition">
                  Add to Cart
                </button>
              </div>
            ))}

          </section>
        </div>
      </Container>
    </>
  );
}

export default Product;
