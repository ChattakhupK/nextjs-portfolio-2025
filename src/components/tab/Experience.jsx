import { useTranslations } from "next-intl";
import React from "react";
import { Divider, Typography } from "antd";
import Cardexp from "../Cardexp";
import CardexpHot from "../CardexpHot";

const { Title, Paragraph } = Typography;

const Experience = () => {
  const t = useTranslations("Experience");

  const experienceDataHot = [
    {
      title: "New Portfolio",
      description: "ย้ายไปลงที่ใหม่",
      imageUrl: "/exp/exp2.png",
      demoLink: "https://modern-portfolio-sand-gamma.vercel.app/",
      githubLink: "",
    },
  ];

  return (
    <section data-aos="fade-up" className="container-box">
      <div className="flex flex-col gap-6">
        <div className="text-start">
          <Title level={1}>{t("experienceTitle")}</Title>
          <Paragraph>{t("experiencep")}</Paragraph>
        </div>

        {/* Highlight Projects */}
        <div className="flex flex-col items-center">
          {experienceDataHot.map((item, index) => (
            <CardexpHot key={index} {...item} />
          ))}
        </div>
        <Divider />
        {/* Other Projects */}
        {/* <div className="flex w-full justify-center">
          <div className="flex flex-wrap gap-5 mt-2 justify-start max-w-6xl w-full">
            {experienceData.map((item, index) => (
              <Cardexp key={index} {...item} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
