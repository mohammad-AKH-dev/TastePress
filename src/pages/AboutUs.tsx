import React from "react";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import PageHeader from "../components/modules/PageHeader";
import AboutUsHeader from "../components/about-us/AboutUsHeader";
import ActivityStatistics from "../components/about-us/ActivityStatistics";
import OrderSection from "../components/modules/OrderSection";
import ClientComments from "../components/about-us/ClientComments";

function AboutUs() {
  return (
    <div className="about-us__page ">
      <Navbar />
      <PageHeader
        title="درباره ی ما"
        description="رستوران ما متعهد به ارائه غذاهای باکیفیت و خدمات حرفه‌ای است تا تجربه‌ای لذت‌بخش و قابل اعتماد برای مشتریان خود فراهم آورد."
      />
      <AboutUsHeader/>
      <ActivityStatistics/>
      <OrderSection/>
      <ClientComments/>
      <Footer />
    </div>
  );
}

export default AboutUs;
