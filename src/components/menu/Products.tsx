import React from 'react'
import LargeProductBox from './LargeProductBox'
import SmallProductBox from './SmallProductBox'
import MediumProductBox from './MediumProductBox'
import PaginatedItems from '../modules/Pagination'


function Products() {
  return (
    <section className='products-section bg-[#f3f3f3]'>
       <div className="products-section__wrapper container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-end my-12 gap-y-[45px] md:gap-y-[76px] mx-auto">
         <LargeProductBox title='چیلی کان کارنه' price={145} path='/images/products/chili-karen.png' size='large'/>
         <SmallProductBox title='سویچه پرو' price={314} path='/images/products/savich-peru.png' size='small'/>
         <MediumProductBox title='رامن ژاپن' price={245} path='/images/products/japan-ramen.png' size='medium'/>
         <LargeProductBox title='پاستای ایتالیایی آلفردو' price={123} path='/images/products/italian-pasta.png' size='large'/>
         <SmallProductBox title='کیمچی کره جنوبی' price={213} path='/images/products/korea-kimchi.png' size='small'/>
         <MediumProductBox title='تاژین ژاپن' price={225} path='/images/products/japan-tazhin.png' size='medium'/>
         <LargeProductBox title='موساکا یونان' price={321} path='/images/products/greek-mosaka.png' size='large'/>
         <SmallProductBox title='پائیا اسپانیا' price={127} path='/images/products/spanish-paeea.png' size='small'/>
         <MediumProductBox title='اردک پکن چین' price={541} path='/images/products/china-duck.png' size='medium'/>
       </div>
       <PaginatedItems itemsPerPage={3}/>
    </section>
  )
}

export default Products
