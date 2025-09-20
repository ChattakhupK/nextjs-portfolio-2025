import { Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const certificateImages = [
  "cer/65b0c088385b4ab6d6baefdc-1.png",
  "cer/65b517eea5110bcf3ea7f223.png",
  "cer/65c5ed772dc2a137b58b1f8e.png",
  "cer/65e8e8df5b0b14ee4ffd3894.png",
  "cer/66b07dbf60c10938b8cee257-1.png",
  "cer/6566b5304dc5627511a56a48-1.png",
  "cer/6578f263b7906fc7d0fa929f-1.png",
  "cer/66415f23f3c26f4d4a9b4a29.png",
  "cer/borntodev-acdemy_GitHub for Developer _certifiacte.png",
  "cer/borntodev-acdemy_Introduction to Computer Science_certifiacte.png",
  "cer/borntodev-acdemy_Introduction to JavaScript_certifiacte.png",
  "cer/borntodev-acdemy_Lite _ Fundamental Web Dev with HTML5 & CSS3_certifiacte.png",
  "cer/certificate.png",
  "cer/eyJuYW1lIjoiQ2hhdHRha2h1cCBLaW5hdWJvbiIsImNvdXJzZSI6Im1jIiwiZG9ub3IiOiJHb29nbGUifQ==.jpg",
];

const Certificate = () => {
  const t = useTranslations("Certificate");

  // จัดการการแสดงรูปแบบ paginate
  const [visibleCount, setVisibleCount] = useState(6); // แสดงเริ่มต้น 6 รูป

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // เพิ่มทีละ 6 รูป
  };

  return (
    <section data-aos="fade-up" className="container-box">
      <div className="flex flex-col gap-6">
        <div>
          <Title level={1}>{t("certificateTitle")}</Title>
          <Paragraph>{t("certificatep")}</Paragraph>
        </div>

        {/* Flex แสดงรูป */}
        <div className="mx-auto flex flex-wrap justify-center gap-4">
          {certificateImages.slice(0, visibleCount).map((src, index) => (
            <Image
              priority="true"
              key={index}
              src={src}
              width={300}
              height={200}
              preview={{ maskClassName: "bg-black/40" }}
              className="object-center shadow-md"
            />
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < certificateImages.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-[#5c5c5c] transition"
            >
              {t("loadMore") || "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificate;
