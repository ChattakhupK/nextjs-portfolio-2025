import { Image } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

const Resume = () => {
  const t = useTranslations("Resume");

  return (
    <section data-aos="fade-up" className="container-box">
      <div className="flex gap-10">
        <div>
          <h1 className="title-header-box">{t("resumeTitle")}</h1>
          <p>{t("resumep")}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 my-10">
            <Image src="/resume/resume(1)_page-0001.jpg" width={300} />
            <Image src="/resume/resume(1)_page-0002.jpg" width={300} />
          </div>
          <p>{t("resumep1")}</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
