"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const TabBar = ({ onChange }) => {
  const t = useTranslations("TabBar");
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onChange(tab);
  };

  const tabs = [
    { key: "About", label: t("about") },
    { key: "Skill", label: t("skill") },
    { key: "Certificate", label: t("certificate") },
    { key: "Resume", label: t("resume") },
    { key: "Experience", label: t("experience") },
    { key: "Contact", label: t("contact") },
  ];

  return (
    <nav className="flex flex-wrap justify-around mt-[30px] max-w-[800px] mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`relative uppercase cursor-pointer text-[18px] font-bold text-black transition-all duration-300
              hover:text-black after:transition-all after:duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[4px]
              ${
                isActive
                  ? "after:w-full after:bg-black"
                  : "after:w-0 after:bg-black hover:after:w-full"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default TabBar;
