import React, { useState } from "react";

type SelectionTabsPropsType = {
  tabs: string[];
  placeholder: string;
  mainTab: string;
  setMainTab: React.Dispatch<React.SetStateAction<string>>;
};

function SelectionTabs(props: SelectionTabsPropsType) {
  const { tabs, placeholder, setMainTab, mainTab } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchValue,setSearchValue] = useState('')
  return (
    <div className="selection-tabs container flex flex-wrap-reverse gap-y-6 sm:flex-nowrap items-center 
   justify-center sm:justify-between px-[2rem] md:px-0 md:justify-center lg:justify-between gap-x-6 xl:justify-between mx-auto my-14 mb-16 xl:px-12">
      {/* tabs with 640px and more */}
      {/* left section */}
      <ul className="selection-tabs__left-section hidden md:flex flex-wrap justify-center lg:flex-nowrap gap-y-[18px] lg:gap-y-0 gap-x-[18px] items-center">
        {tabs.map((tab) => (
          <li
            onClick={() => setMainTab(tab)}
            key={tab}
            className={`text-[13px] px-7 ${
              mainTab === tab && "bg-orange text-white"
            }
             text-[#000000] rounded-[3px] transition-all cursor-pointer hover:bg-orange hover:text-white
              font-medium border border-[#CACACA] py-[7px]  text-center`}
          >
            <span>{tab}</span>
          </li>
        ))}
      </ul>
      {/* tabs less than 640px (mobile) */}
      <div className="dropdown-wrapper md:hidden relative text-white ">
        <span
          onClick={() => setShowDropDown((prevState) => !prevState)}
          className="selected-tab p-3 max-[461px]:min-w-[260px] min-w-[163px] cursor-pointer
          rounded-[5px]  max-w-[163px] text-nowrap text-center mx-auto block bg-orange"
        >
          {mainTab}
        </span>
        <ul
          className={`dropdown-list max-[461px]:min-w-[260px] min-w-[163px]  rounded-[5px]
        transition-all duration-500 ${
          showDropDown
            ? "h-[200px] opacity-100 visible"
            : "h-0 opacity-0 invisible"
        } text-center flex flex-col  bg-white text-black absolute top-[3.1rem]`}
        >
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setMainTab(tab)}
              className={`dropdown-list__item py-[.5rem] ${mainTab === tab && 'bg-orange text-white'} hover:bg-orange hover:text-white 
              transition-all text-nowrap cursor-pointer`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* right section */}
      <div className="selection-tab__right-section">
        <div className="selection-tab__search-input__wrapper flex  rounded-[5px] items-center justify-center border border-[#CACACA] py-[6px] sm:py-[9px] p-[6px] sm:p-[9px]">
          <div className="search-icon__wrapper cursor-pointer bg-[#EAEAEA] w-[36px] h-[36px] flex items-center justify-center">
            <img src="/images/icons/search.svg" />
          </div>
          <input
            dir="rtl"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder={placeholder}
            className="text-[#3333334D] border-none
              outline-none placeholder:text-[#3333334D] placeholder:15px sm:text-[18px] font-bold
             placeholder:text-[15px] sm:placeholder:text-[18px] pl-[.5rem] pr-[.5rem] sm:pl-[2rem] sm:pr-[2rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectionTabs;
