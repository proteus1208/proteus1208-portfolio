import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Pablo Alejandro Sanchez Moncada",
  description:
    "Learn more about Pablo Alejandro Sanchez Moncada — Full Stack & AI Engineer with 9+ years of experience. BS Computer Science, The University of Hong Kong.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
        <Achievements />
      </div>
    </>
  );
}
