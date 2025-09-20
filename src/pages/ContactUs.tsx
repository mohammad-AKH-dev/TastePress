import React from "react";
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import PageHeader from "../components/modules/PageHeader";

function ContactUs() {
  return (
    <div className="contact-us__page ">
      <Navbar />
      <PageHeader
        title="تماس با ما"
        description="«برای هرگونه سوال، پیشنهاد یا همکاری، لطفاً از طریق فرم زیر باما در ارتباط باشید.
 ما در اسرع وقت پاسخگوی شما خواهیم بود."
      />
      <Footer />
    </div>
  );
}

export default ContactUs;
