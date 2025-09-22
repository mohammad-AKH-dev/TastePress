import React from 'react'
import Navbar from '../components/modules/Navbar'
import Footer from '../components/modules/Footer'
import MainHeader from '../components/home/MainHeader'
import OurServices from '../components/home/OurServices'
import SpecialOffers from '../components/modules/SpecialOffers'
import SpecialMenu from '../components/home/SpecialMenu'
import CustomerReviews from '../components/home/CustomerReviews'
import MembershipForm from '../components/modules/MembershipForm'

function Home() {
  return (
    <div className='home-page '>
       <Navbar/>
       {/* هدر اصلی */}
       <MainHeader/>
       {/* سرویس های ما */}
       <OurServices/>
       {/* پیشنهادهای ویژه */}
       <SpecialOffers/>
       {/* منوی ویژه */}
       <SpecialMenu/>
       {/* نظرات مشتریان */}
       <CustomerReviews/>
       {/* فرم عضویت */}
       <MembershipForm/>
       <Footer/>
    </div>
  )
}

export default Home
