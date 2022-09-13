import React from "react";
import Header from "../components/shared/Header";
import TopHeader from "../components/shared/TopHeader";
import { News } from "../utils/News";
import Footer from "../components/shared/Footer";
import OurPartner from "../components/shared/OurPartner";
import HeaderShapeTitle from "../components/shared/HeaderShapeTitle";

const NewsMedia = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HeaderShapeTitle title="News and Media" />
      
      {/* News & Media section */}
      <section className="container mx-auto">
      
        {/* mapping  */}
        <div class="">
          {News.map((news) => (
            <div key={news.id}>
              <img src={news.img} alt="news-media" className="w-full mb-8"/>
            </div>
          ))}
        </div>
      </section>
      <OurPartner />
      <Footer />
    </>
  );
};

export default NewsMedia;
