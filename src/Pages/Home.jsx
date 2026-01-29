import React from 'react'
import TopNav from "../Components/TopNav"
import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import FeatureProduct from "../Components/FeatureProduct"
import LatestProduct from "../Components/LatestProduct"
import ShopexOffer from "../Components/ShopexOffer"
import UniqueOffer from "../Components/UniqueOffer"
import TrendingProducts from "../Components/TrendingProducts"
import Discount from "../Components/Discount"
import TopCatagories from '../Components/TopCatagories'
import NewsLetter from '../Components/NewsLetter'
import LatestBlog from '../Components/LatestBlog'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <TopNav/>
      <Navbar/>
      <Banner/>
      <FeatureProduct/>
      <LatestProduct/>
      <ShopexOffer/>
      <UniqueOffer/>
      <TrendingProducts/>
      <Discount/>
      <TopCatagories/>
      <NewsLetter/>
      <LatestBlog/>
      <Footer/>
    </div>
  )
}

export default Home
