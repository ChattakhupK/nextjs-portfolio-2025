import { Image } from "antd";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const certificateImages = [
  "https://i.ibb.co/tPDQnPt1/65b0c088385b4ab6d6baefdc-1.png",
  "https://i.ibb.co/jZMV305d/65b517eea5110bcf3ea7f223.png",
  "https://i.ibb.co/vvkKFdcB/65c5ed772dc2a137b58b1f8e.png",
  "https://i.ibb.co/VWnDJ5mS/65e8e8df5b0b14ee4ffd3894.png",
  "https://i.ibb.co/0jD930rn/66b07dbf60c10938b8cee257-1.png",
  "https://i.ibb.co/zWSVs9g9/6566b5304dc5627511a56a48-1.png",
  "https://i.ibb.co/DH8F7zc9/6578f263b7906fc7d0fa929f-1.png",
  "https://i.ibb.co/TxPC1SW0/66415f23f3c26f4d4a9b4a29.png",
  "https://i.ibb.co/6cNfcdtT/borntodev-acdemy-Git-Hub-for-Developer-certifiacte.png",
  "https://i.ibb.co/zHt5zHL5/borntodev-acdemy-Introduction-to-Computer-Science-certifiacte.png",
  "https://i.ibb.co/C5MSq7tQ/borntodev-acdemy-Introduction-to-Java-Script-certifiacte.png",
  "https://i.ibb.co/KzNXcWD3/borntodev-acdemy-Lite-Fundamental-Web-Dev-with-HTML5-CSS3-certifiacte.png",
  "https://i.ibb.co/VpCHtWKz/certificate.png",
  "https://i.ibb.co/MDbxW4R9/ey-Ju-YW1l-Ijoi-Q2hhd-HRha2h1c-CBLa-W5hd-WJvbi-IsIm-Nvd-XJz-ZSI6Im1j-Iiwi-ZG9ub3-Ii-Oi-JHb29nb-GUi.jpg",
];

const Certificate = () => {
  const t = useTranslations("Certificate");

  // จัดการการแสดงรูปแบบ paginate
  const [visibleCount, setVisibleCount] = useState(6); // แสดงเริ่มต้น 6 รูป

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // เพิ่มทีละ 6 รูป
  };

  return (
    <section className="container-box">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="title-header-box">{t("certificateTitle")}</h1>
          <p>{t("certificatep")}</p>
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
