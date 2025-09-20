"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Button } from "antd";

const tabsData = [
  "About",
  "Skill",
  "Certificate",
  "Resume",
  "Experience",
  "Contact",
];

const TabBar = ({ onChange }) => {
  const t = useTranslations("TabBar");
  const [activeTab, setActiveTab] = useState("");

  // ตั้ง default tab หลังจาก mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab("About");
      onChange?.("About");
    }, 500);

    return () => clearTimeout(timer);
  }, [onChange]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <nav className="flex flex-wrap justify-around mt-8 max-w-3xl mx-auto">
      {tabsData.map((tabKey) => {
        const isActive = activeTab === tabKey;
        return (
          <Button
            key={tabKey}
            type="ghost"
            onClick={() => handleTabClick(tabKey)}
            className={`
              relative uppercase transition-all duration-300
              px-2 py-1 text-black hover:text-black
              after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:block after:bg-black after:transition-all after:duration-300
              ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="text-lg font-medium" data-aos="fade-up">
              {t(tabKey.toLowerCase())}
            </span>
          </Button>
        );
      })}
    </nav>
  );
};

export default TabBar;
