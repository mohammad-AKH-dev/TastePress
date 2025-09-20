import React, { useState } from "react";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import PageHeader from "../components/modules/PageHeader";
import SelectionTabs from "../components/modules/SelectionTabs";
import OrderSection from "../components/modules/OrderSection";
import Blogs from "../components/blog/Blogs";

function Blog() {
  const [tabs, setTabs] = useState([
    "بین الملل",
    "سلامت",
    "ایرانی",
    "اخبار",
    "همه",
  ]);
  const [mainTab, setMainTab] = useState("ایرانی");
  return (
    <div className="blog-page ">
      <Navbar />
      <PageHeader
        title="وبلاگ ما"
        description="اینجا می‌تونی تازه‌ترین مقالات، نکات آشپزی و اخبار رستوران ما رو بخونی و از دنیای خوشمزه غذاها باخبر بشی"
      />
      <SelectionTabs mainTab={mainTab} placeholder="جستجو در لیست مقالات..." tabs={tabs} setMainTab={setMainTab}/>
      <Blogs/>
      <OrderSection/>
      <Footer />
    </div>
  );
}

export default Blog;
