import React from 'react'
import Navbar from '../components/modules/Navbar'
import Footer from '../components/modules/Footer'
import MainHeader from '../components/home/MainHeader'
import OurServices from '../components/home/OurServices'
import SpecialOffers from '../components/home/SpecialOffers'
import SpecialMenu from '../components/home/SpecialMenu'
import CustomerReviews from '../components/home/CustomerReviews'
import MembershipForm from '../components/home/MembershipForm'

function Home() {
  return (
    <div className='home-page '>
       <Navbar/>
       <MainHeader/>
       <OurServices/>
       <SpecialOffers/>
       <SpecialMenu/>
       <CustomerReviews/>
       <MembershipForm/>
       <Footer/>
    </div>
  )
}

export default Home
