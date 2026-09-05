"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Gauge, Server, Timer, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Gauge,
    title: "Lighthouse Gains",
    description:
      "Led 8 customer-facing React and Next.js modules, improving Lighthouse performance scores by 28 percent.",
    metric: "28%",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: Timer,
    title: "Faster TTFB",
    description:
      "Shipped SSR and ISR flows for 6 high-traffic pages, reducing median TTFB by 35 percent for 50,000 monthly users.",
    metric: "35%",
    color: "rgba(216, 178, 242, 0.15)",
  },
  {
    icon: Server,
    title: "Daily Auth Requests",
    description:
      "Implemented REST and GraphQL APIs backed by PostgreSQL and MongoDB, serving 80,000 daily authenticated requests.",
    metric: "80K",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: Rocket,
    title: "Release Cycle",
    description:
      "Owned CI/CD pipelines with Docker on AWS, shortening release cycle time from 4 days to 1 day across 3 squads.",
    metric: "1 day",
    color: "rgba(216, 178, 242, 0.15)",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white py-20"
    >
      <ShootingStars />
      <StarsBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold gradient-text drop-shadow-lg"
        >
          Impact Highlights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Production results focused on performance, APIs, and delivery speed.
        </motion.p>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                rotateY: -30,
                scale: 0.85,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="flex"
              style={{ perspective: 1000 }}
            >
              <Card className="relative group bg-gradient-to-b from-neutral-900/70 to-neutral-800/30 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_25px_rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-between w-full h-full hover:border-white/20 transition-all duration-500 min-h-[360px] overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}, transparent 60%)`,
                  }}
                />

                <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                  <motion.div
                    className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: achievement.color }}
                    />
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <Icon className="h-7 w-7 text-white/90" />
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      {achievement.metric}
                    </h3>
                    <p className="font-semibold text-lg mb-2">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
