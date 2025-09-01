"use client";
import About from "@/src/components/tab/About";
import Certificate from "@/src/components/tab/Certificate";
import Contact from "@/src/components/tab/Contact";
import Experience from "@/src/components/tab/Experience";
import Resume from "@/src/components/tab/Resume";
import Skill from "@/src/components/tab/Skill";
import TabBar from "@/src/components/TabBar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [tab, setTab] = useState("About");

  useEffect(() => {
    Aos.init();

    if (tabParam) {
      setTab(tabParam);
    }
  }, [tabParam]);

  const renderContent = () => {
    switch (tab) {
      case "About": {
        return <About />;
      }
      case "Skill": {
        return <Skill />;
      }
      case "Certificate": {
        return <Certificate />;
      }
      case "Resume": {
        return <Resume />;
      }
      case "Experience": {
        return <Experience />;
      }
      case "Contact": {
        return <Contact />;
      }
      default:
        return;
    }
  };

  return (
    <div className="container mx-auto my-10">
      <TabBar onChange={setTab} />
      <div className="mt-10 bg-[#e7e7e7] rounded-md max-w-[1280px] mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}
