import React, { useState } from "react";
import { Link, useLocation } from "react-router";

type menuItemType = {
  path: string;
  title: string;
};

function Navbar() {
  const [menu, setMenu] = useState<menuItemType[]>([
    { path: "/", title: "خانه" },
    { path: "/menu", title: "منو" ,},
    { path: "/blog", title: "بلاگ" ,},
    { path: "/about-us", title: "درباره ما" , },
    { path: "/contact-us", title: "تماس با ما" , },
  ]);
  const mainPath = useLocation();

  return (
    <nav className={`navbar ${mainPath.pathname === '/' && 'bg-[#f3f3f3]'}`}>
      <ul
        className="menu-list flex items-center container mx-auto
       justify-center flex-row-reverse gap-[30px] text-black text-[18px] font-medium py-6 pt-10"
      >
        <div className="animation start-home"></div>
        {menu.map((item,index) => (
          mainPath.pathname === item.path ? (
            <li className={`menu-list__item text-white after:absolute after:-top-[2.5rem] after:bg-orange
            relative after:mx-auto  
            ${index === 0 && 'after:-left-3.5'} 
            ${index === 1 && 'after:-left-[1.3rem]'}
            ${index === 2 && 'after:-left-[.9rem]'}
            ${index === 3 && 'after:-left-[.1rem]'}
            ${index === 4 && 'after:-left-[0rem]'}
            after:right-0 after:block after:p-8 after:w-full after:h-[94px]
            after:rounded-b-full`} key={item.title}>
              <Link className="translate-y-[-2px] relative z-[1] inline-block" to={item.path}>{item.title}</Link>
            </li>
          ) : (
            <li className="menu-list__item" key={item.title}>
              <Link className="translate-y-[-2px] inline-block" to={item.path}>{item.title}</Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
