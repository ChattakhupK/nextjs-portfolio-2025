import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="bg-[url(https://i.ibb.co/5WfNBM3R/o0-AHAfo-WBACzi-A2-A9yip-VUEv2-CCIMFhg3sek-NA-noop.jpg)] h-[700px] bg-center bg-no-repeat bg-cover flex justify-center items-center">
      {/* Overlay สีดำแบบโปร่ง */}
      <div className="absolute inset-0 bg-black opacity-20 z-0 h-[700px]"></div>

      {/* เนื้อหา */}
      <div className="relative z-10 text-center text-white">
        <span className="font-light text-[20px]">{t("sub")}</span>
        <h1 className="font-bold text-[36px]">{t("title")}</h1>
        <h2 className="font-bold text-[36px]">
          {t("subtitle")} <span className="text-[#FF0000]">Web Designer </span>
          {t("and")} <span className="text-[#FF0000]">Web Development</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
