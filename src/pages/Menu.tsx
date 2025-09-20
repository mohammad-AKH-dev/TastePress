import React, { useState } from "react";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import PageHeader from "../components/modules/PageHeader";
import SelectionTabs from "../components/modules/SelectionTabs";
import Products from "../components/menu/Products";
import OrderSection from "../components/modules/OrderSection";

function Menu() {
  const [tabs,setTabs] = useState(["ایرانی","دسر","بین الملل","دریایی","رژیمی"])
  const [mainTab,setMainTab] = useState('بین الملل')
  return (
    <div className="menu-page">
      <Navbar />
      <PageHeader
        title="منوی ما"
        description='"در این بخش لیست غذا های مارو مشاهده می کنید؛غذاهای تازه و باکیفیت ما، تجربه‌ای خوشمزه و لذت‌بخش را برای شما فراهم می‌کنند.'
      />
      <SelectionTabs mainTab={mainTab} placeholder="جستجو در لیست غذاها..." tabs={tabs} setMainTab={setMainTab}/>
      <Products/>
      <OrderSection/>
      <Footer />
    </div>
  );
}

export default Menu;
