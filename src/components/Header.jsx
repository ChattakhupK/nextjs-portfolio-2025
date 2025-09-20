"use client";
import { Button, Space, Typography } from "antd";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

const { Title, Text } = Typography;

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="relative bg-[url('/header.png')] h-[700px] bg-center bg-no-repeat bg-cover flex justify-center items-center">
      {/* Overlay สีดำโปร่ง */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* เนื้อหา */}
      <div
        data-aos="fade-down"
        className="relative z-10 text-center text-white space-y-4 px-4"
      >
        {/* Subtext */}
        <Title level={3} className="!text-white">
          {t("sub")}
        </Title>

        {/* Main Title */}
        <Title
          level={2}
          className="!text-white text-4xl md:text-5xl lg:text-6xl"
        >
          {t("title")}
        </Title>

        {/* Subtitle / Highlighted Roles */}
        <div className="">
          <Title className="!text-white">
            {t("subtitle")}
            <span className="text-red-500"> Web Designer </span>
            {t("and")}
            <span className="text-red-500"> Web Development </span>
          </Title>
        </div>
      </div>
    </header>
  );
};

export default Header;
