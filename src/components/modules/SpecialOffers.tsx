import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import SpecialOfferBox from "./SpecialOfferBox";

export type SpecialOfferBoxPropsType = {
  id: number;
  title: string;
  description: string;
  img: string;
  href: string;
};

function SpecialOffers() {
  const [offers, setOffers] = useState<SpecialOfferBoxPropsType[]>([
    {
      id: 1,
      title: "پاستای ایتالیایی آلفردو",
      description: "طعمی لذیذ با سس‌های متنوع و تازه ایتالیایی",
      img: "/images/offers/pasta-alfredo.jpg",
      href: "/",
    },
    {
      id: 2,
      title: "تاکوی مکزیکی",
      description: "تاکوی ترد با گوشت مزه‌دار شده همراه باسبزیجات تازه",
      img: "/images/offers/tako.jpg",
      href: "/",
    },
    {
      id: 3,
      title: "فیش اند چیپس",
      description: "فیله ماهی سوخاری با سیب‌زمینی و سس تارتار",
      img: "/images/offers/fish-and-chips.jpg",
      href: "/",
    },
    {
      id: 4,
      title: "بیف استروگانف",
      description: "گوشت گوساله با سس خامه‌ای قارچ و سبزیجات",
      img: "/images/offers/bif-stroganof.jpg",
      href: "/",
    },
  ]);
  return (
    <section className="special-offers__section bg-[#f3f3f3] p-6 py-12">
      <SectionHeader title="پیشنهاد سرآشپز" href="/menu" />
      <div className="special-offers__wrapper container mx-auto pt-[42px] grid max-[570px]:grid-cols-1 
      grid-cols-2 gap-[25px] md:gap-[80px]">
        {
            offers.map((offer) => (
                <SpecialOfferBox {...offer} key={offer.id}/>
            ))
        }
      </div>
    </section>
  );
}

export default SpecialOffers;
