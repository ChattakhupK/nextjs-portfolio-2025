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
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
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
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
  { name: "FIGMA", icon: FaFigma },
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
];

const Skill = () => {
  const t = useTranslations("Skill");
  return (
    <section className="container-box">
      <div>
        <h1 className="title-header-box">{t("skillTitle")}</h1>
        <p>{t("skillp")}</p>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-10 max-w-[920px] mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon
                  size={80}
                  className="text-primary hover:scale-110 transition-transform"
                />
                <span className="mt-2 text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
