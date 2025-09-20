import Link from "next/link";
import React from "react";
import LangButton from "./ui/LangButton";
import { useTranslations } from "next-intl";

const Navbar = ({ params }) => {
  const t = useTranslations("Navbar");

  const menuItems = [{ label: t("home"), path: "#" }];

  return (
    <div className="px-20 py-5 flex justify-between items-center fixed w-full bg-gradient-to-b from-black to-transparent z-50">
      <span className="font-black text-[32px] select-none text-[#FFFFFF]">
        PORTFOLIO
      </span>

      <div className="flex">
        <div className="flex flex-wrap justify-center items-center">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <span className="px-4 text-[#FFFFFF] hover:text-[#c5c5c5] transition uppercase font-bold">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <LangButton currentLocale={params} />
      </div>
    </div>
  );
};

export default Navbar;
