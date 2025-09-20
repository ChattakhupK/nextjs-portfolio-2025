import { Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useTranslations } from "next-intl";
import React from "react";

const Resume = () => {
  const t = useTranslations("Resume");

  return (
    <section data-aos="fade-up" className="container-box">
      <div className="flex gap-10">
        <div>
          <Title className="title-header-box">{t("resumeTitle")}</Title>
          <Paragraph>{t("resumep")}</Paragraph>
          <div className="flex flex-wrap justify-center items-center gap-4 my-10">
            <Image src="/resume/resume(1)_page-0001.jpg" width={300} />
            <Image src="/resume/resume(1)_page-0002.jpg" width={300} />
          </div>
          <Paragraph>{t("resumep1")}</Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Resume;
