import { Image } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import Cardexp from "../Cardexp";

const Experience = () => {
  const t = useTranslations("Experience");

  const experienceData = [
    {
      title: "Figma UI Portfolio",
      description: t("e1"),
      imageUrl: "https://i.ibb.co/BVTQ0HSQ/Screenshot-2025-05-22-034402.png",
      demoLink:
        "https://www.figma.com/design/p16NahD5wuksoWpnDNdVlV/portfolio---2025?node-id=0-1&t=9SBMgoOtwvxy5MAC-1",
      githubLink: "",
    },
    {
      title: "FrontEnd Web e1",
      description: t("e2"),
      imageUrl: "https://i.ibb.co/QvxwTNsr/Screenshot-2025-05-22-063900.png",
      demoLink: "",
      githubLink: "",
    },
    {
      title: "FrontEnd Web e2",
      description: t("e3"),
      imageUrl: "https://i.ibb.co/rKcndDnV/Screenshot-2025-05-22-063428.png",
      demoLink: "",
      githubLink: "",
    },
    {
      title: "Game Quiz",
      description: t("e4"),
      imageUrl: "https://i.ibb.co/pr6CzMwr/Screenshot-2025-05-22-033731.png",
      demoLink: "https://quiz-react-4-q.vercel.app/",
      githubLink: "https://github.com/ChattakhupK/QUIZ-REACT-4Q",
    },
    {
      title: "Old Web Portfolio",
      description: t("e5"),
      imageUrl: "https://i.ibb.co/xqx6c8xF/Screenshot-2025-05-22-061640.png",
      demoLink:
        "https://portfolio-web-react-18n3ciysb-chattakhupks-projects.vercel.app/",
      githubLink: "https://github.com/ChattakhupK/PORTFOLIO-WEB-REACT",
    },
    {
      title: "E-commerce",
      description: t("e6"),
      imageUrl: "https://i.ibb.co/XZzfSDYm/imagell.png",
      demoLink: "https://ecom-client-web-vercel.vercel.app/",
      githubLink:
        "https://github.com/ChattakhupK/ECOM-CLIENT-WEB-VERCEL/tree/main",
    },
    {
      title: "Figma UI Design Mobile",
      description: t("e7"),
      imageUrl: "https://i.ibb.co/zhzJTyQC/image-5-Cm-ZKG5-QT.png",
      demoLink:
        "https://www.figma.com/proto/ucgxJ2WNQtmOaykdQA9NVU/LINE-MAN-by-Vat?node-id=25-1754&starting-point-node-id=25%3A914",
      githubLink: "",
    },
    {
      title: "Static Page Info",
      description: t("e8"),
      imageUrl: "https://i.ibb.co/TxNwDVCH/image-11-Cz8-S970-A.png",
      demoLink:
        "https://www.figma.com/proto/ucgxJ2WNQtmOaykdQA9NVU/LINE-MAN-by-Vat?node-id=25-1754&starting-point-node-id=25%3A914",
      githubLink: "https://github.com/ChattakhupK/STATIC-PAGE-INFO-SPACE-HTML",
    },
    {
      title: "Web Board",
      description: t("e9"),
      imageUrl: "https://i.ibb.co/HfByXCW9/image-3-Dxv-UGM6y.png",
      demoLink: "",
      githubLink: "https://github.com/ChattakhupK/WEBBOARD-HBS-MYSQL",
    },
    {
      title: "Figma UI Design Web",
      description: t("e10"),
      imageUrl: "https://i.ibb.co/qYDjgSQ8/image-4-Do-Tnv-ZPw.png",
      demoLink:
        "https://www.figma.com/proto/GCkUVVkyGJbLA6y0RGekCY/Web-Primus-Test?node-id=0-1&node-type=canvas&t=3qRC90leUBoqD0uO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      githubLink: "",
    },
    {
      title: "Chat Auth Realtime",
      description: t("e11"),
      imageUrl: "https://i.ibb.co/dsWYWWC1/image-10-Cyih-Lb-YA.png",
      demoLink: "",
      githubLink:
        "https://github.com/ChattakhupK/CHAT-FIREBASE-REACT?tab=readme-ov-file",
    },
  ];

  return (
    <section data-aos="fade-up" className="container-box">
      <div className="flex gap-10">
        <div>
          <h1 className="title-header-box">{t("experienceTitle")}</h1>
          <p>{t("experiencep")}</p>
          <div className="flex flex-wrap gap-5 mt-6 justify-center">
            {experienceData.map((item, index) => (
              <Cardexp
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                demoLink={item.demoLink}
                githubLink={item.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
