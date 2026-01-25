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
    </div>
  )
}

export default Home
