import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useTranslations } from "next-intl";
import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaStripe,
  FaGithub,
  FaGitSquare,
} from "react-icons/fa";
import { SiDbeaver, SiMongodb } from "react-icons/si";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
  RiSupabaseFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPrisma,
  SiSequelize,
  SiXampp,
  SiExpress,
  SiJsonwebtokens,
  SiAntdesign,
  SiPostman,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiShadcnui,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Col, Row } from "antd";

// Skill data
const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JAVASCRIPT", icon: SiJavascript },
  { name: "TYPESCRIPT", icon: SiTypescript },
  { name: "REACT", icon: FaReact },
  { name: "NEXT.JS", icon: RiNextjsFill },
  { name: "NODE.JS", icon: FaNodeJs },
  { name: "TAILWIND", icon: RiTailwindCssFill },
  { name: "BOOTSTRAP", icon: FaBootstrap },
  { name: "FIREBASE", icon: RiFirebaseFill },
  { name: "MYSQL", icon: SiMysql },
  { name: "STRIPE", icon: FaStripe },
  { name: "GITHUB", icon: FaGithub },
  { name: "GIT", icon: FaGitSquare },
  { name: "PRISMA", icon: SiPrisma },
  { name: "SEQUELIZE", icon: SiSequelize },
  { name: "XAMPP", icon: SiXampp },
  { name: "EXPRESS.JS", icon: SiExpress },
  { name: "JSONWEBTOKENS", icon: SiJsonwebtokens },
  { name: "ANTDESIGN", icon: SiAntdesign },
  { name: "VSCODE", icon: VscVscode },
  { name: "Dbeaver", icon: SiDbeaver },
  { name: "Mongodb", icon: SiMongodb },
  { name: "Postman", icon: SiPostman },
  { name: "Shadcnui", icon: SiShadcnui },
  { name: "Supabase", icon: RiSupabaseFill },
  { name: "FIGMA", icon: FaFigma },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "PremierePro", icon: SiAdobepremierepro },
  { name: "Photoshop", icon: SiAdobephotoshop },
];

const Skill = () => {
  const t = useTranslations("Skill");
  return (
    <section data-aos="fade-up" className="container-box">
      <div>
        <Title level={1}>{t("skillTitle")}</Title>
        <Paragraph>{t("skillp")}</Paragraph>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-10 max-w-[920px] mx-auto">
          <Row justify="center" gutter={[24, 24]}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Col
                  key={index}
                  xs={12}
                  sm={8}
                  md={6}
                  lg={4}
                  className="flex flex-col items-center"
                >
                  <Icon
                    size={74}
                    className="text-primary hover:scale-110 transition-transform mx-auto"
                  />
                  <Title level={5} className="mt-2 text-center">
                    {skill.name}
                  </Title>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Skill;
