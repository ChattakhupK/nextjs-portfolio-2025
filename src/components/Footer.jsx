import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const menuItems = [
  {
    label: <FaFacebook color="#000000" size={24} />,
    path: "https://www.facebook.com/MosT5140",
  },
  {
    label: <FaInstagram color="#000000" size={24} />,
    path: "https://www.instagram.com/f.kykie/",
  },
  {
    label: <FaGithub color="#000000" size={24} />,
    path: "https://github.com/ChattakhupK/",
  },
];

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer>
      <div className="bg-[url(https://i.ibb.co/dwhcf5n5/7011.jpg)] h-[330px] bg-center bg-no-repeat bg-cover flex justify-center items-center">
        {/* เนื้อหา */}
        <div className="relative z-10 text-center text-white">
          <h1 className="font-bold text-[36px]">{t("title")}</h1>
          <span className="font-light text-[18px]">{t("subtitle")}</span>
        </div>
      </div>
      <div className="bg-white h-[70px] flex text-black justify-between items-center px-20">
        <div>
          © 2025 Portfolio Design By{" "}
          <span className="font-bold">ChattakhupK</span>
        </div>
        <div className="flex">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <span className="mx-[30px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
