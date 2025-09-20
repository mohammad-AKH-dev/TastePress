import React from "react";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import PageHeader from "../components/modules/PageHeader";

function AboutUs() {
  return (
    <div className="about-us__page container mx-auto">
      <Navbar />
      <PageHeader
        title="درباره ی ما"
        description="رستوران ما متعهد به ارائه غذاهای باکیفیت و خدمات حرفه‌ای است تا تجربه‌ای لذت‌بخش و قابل اعتماد برای مشتریان خود فراهم آورد."
      />
      <Footer />
    </div>
  );
}

export default AboutUs;
