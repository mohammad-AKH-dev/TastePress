import React, { useState } from "react";
import SectionHeader from "../modules/SectionHeader";
import BranchBox from "../modules/BranchBox";

export type BranchBoxPropsType = {
  id: number;
  title: string;
  address: string;
  activeTime: string;
  image: string;
};

function OurBranches() {
  const [branchs, setBranchs] = useState([
    {
      id: 1,
      title: "شعبه سعادت آباد",
      address: "سعادت آباد خیابان شمالی روبه روی پارک دولت",
      activeTime: "9:00-24:00",
      image: "/images/branchs/saadat-abad.jpg",
    },
    {
      id: 2,
      title: "شعبه تجریش",
      address: "تجریش,خیابان غفاری,روبه روی بیمارستان جم تهران",
      activeTime: "9:00-24:00",
      image: "/images/branchs/tajrish.jpg",
    },
    {
      id: 3,
      title: "شعبه پونک",
      address: "پونک,خیابان امام حسین,روبه روی متروی پونک",
      activeTime: "9:00-24:00",
      image: "/images/branchs/punak.jpg",
    },
    {
      id: 4,
      title: "شعبه جردن",
      address: "جردن,خیابان ولیعصر,روبه روی خیابان بهارستان ",
      activeTime: "9:00-24:00",
      image: "/images/branchs/jordan.jpg",
    },
  ]);
  return (
    <section className="our-branches__section my-9 py-9 bg-[#f2f2f2]">
      <div dir="rtl" className="our-branches__content container mx-auto px-[1rem]">
        <h4 className="our-branches__content-title text-[28px] font-bold">
          شعبات ما
        </h4>
        <div className="our-branches__wrapper mt-12 grid grid-cols-1 sm:grid-cols-2 pb-[1rem] gap-y-[45px] sm:gap-[60px]">
            {
                branchs.map(branch => <BranchBox key={branch.id} {...branch}/>)
            }
        </div>
      </div>
    </section>
  );
}

export default OurBranches;
