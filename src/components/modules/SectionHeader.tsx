import React from "react";
import { Link } from "react-router";

type SectionHeaderPropsType = {
  title: string;
  href: string;
};

function SectionHeader(props: SectionHeaderPropsType) {
  const { title, href } = props;

  return (
    <div className="section-header container w-full max-[335px]:flex-wrap-reverse max-[335px]:gap-y-[1.5rem]
    max-[335px]:justify-center mx-auto flex items-center justify-between">
      <Link
        to={href}
        className="section-header__link text-[16px] font-medium border border-[#C2C2C2] py-[11px] px-[32px] rounded-[5px]"
      >
        همه
      </Link>
      <h4 className="section-header__title text-[28px] font-bold">{title}</h4>
    </div>
  );
}

export default SectionHeader;
