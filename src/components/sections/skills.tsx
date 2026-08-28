"use client";

import Image from "next/image";
import { useState } from "react";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs&theme=light" },
  { name: "Redux", logo: "https://skillicons.dev/icons?i=redux" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express", logo: "https://skillicons.dev/icons?i=express" },
  { name: "Nest.js", logo: "https://skillicons.dev/icons?i=nest" },
  { name: "Java", logo: "https://skillicons.dev/icons?i=java" },
  { name: "Spring", logo: "https://skillicons.dev/icons?i=spring" },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  { name: "Django", logo: "https://skillicons.dev/icons?i=django" },
  { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgresql" },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Redis", logo: "https://skillicons.dev/icons?i=redis" },
  { name: "GraphQL", logo: "https://skillicons.dev/icons?i=graphql" },
  { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
  { name: "Docker", logo: "https://skillicons.dev/icons?i=docker" },
  { name: "Kubernetes", logo: "https://skillicons.dev/icons?i=kubernetes" },
  { name: "Kafka", logo: "https://skillicons.dev/icons?i=kafka" },
  { name: "Nginx", logo: "https://skillicons.dev/icons?i=nginx" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github" },
 ];


export function SkillsShowcase() {
  const rows = [
    skills.slice(0, 8),
    skills.slice(8, 16),
    skills.slice(16, 24),
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6">
      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          My Skills
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Skills I have mastered yet
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-12">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {row.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative z-10">
          {imgError ? (
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
              <span className="text-xs text-white text-center px-1">
                {skill.name}
              </span>
            </div>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </div>
  );
}
