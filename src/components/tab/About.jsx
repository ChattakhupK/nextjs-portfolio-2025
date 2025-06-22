import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

// รูปภาพสำหรับ gallery
const galleryImages = [
  "https://i.ibb.co/mCX673DM/IMG-1448.jpg",
  "https://i.ibb.co/LD5W7Tpr/IMG-2651.jpg",
  "https://i.ibb.co/B5SZvG8n/IMG-2756.jpg",
];

const About = () => {
  const t = useTranslations("About");

  return (
    <section data-aos="fade-up" className="container-box">
      {/* ส่วนหัวและรูปโปรไฟล์ */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="flex-shrink-0">
          <Image
            alt={"Profile Image"}
            priority
            src="https://i.ibb.co/ZPwCNbQ/S-6774787-1.jpg"
            width={250}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="max-w-[560px] text-center md:text-left">
          <h1 className="title-header-box">{t("aboutTitle")}</h1>
          <p className="mt-4">{t("aboutp")}</p>
        </div>
      </div>

      {/* ย่อหน้าแรก */}
      <div className="my-10 text-justify leading-relaxed text-gray-700">
        {t("aboutp1")}
      </div>

      {/* แกลเลอรีภาพ */}
      <div className="flex flex-wrap justify-center items-center gap-5">
        {galleryImages.map((src, index) => (
          <Image
            key={index}
            alt={`Gallery image ${index + 1}`}
            src={src}
            width={250}
            height={300}
            className="object-cover rounded-md w-[250px] h-[300px] shadow-md transition-transform hover:scale-105"
            priority={index === 0}
          />
        ))}
      </div>

      {/* ย่อหน้าสุดท้าย */}
      <div className="my-10 text-justify leading-relaxed text-gray-700">
        {t("aboutp2")}
      </div>
    </section>
  );
};

export default About;
