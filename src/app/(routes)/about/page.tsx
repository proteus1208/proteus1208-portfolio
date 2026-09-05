import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase} from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Walker Martins de Oliveira",
  description:
    "Learn more about Walker Martins de Oliveira — Full-Stack Engineer with 10 years of experience in React, Next.js, and TypeScript.",
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
