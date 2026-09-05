"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Brain, HeartPulse, Gauge, Database } from "lucide-react";

const achievements = [
  {
    icon: Brain,
    title: "Faster Ticket Resolution",
    description:
      "Built a RAG pipeline with LangChain, pgvector, and Redis for LLM-backed support workflows.",
    metric: "40%",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: HeartPulse,
    title: "Faster Clinical Triage",
    description:
      "Shipped an AI Clinical Assistant with FastAPI at ReachLink, cutting manual assessment time.",
    metric: "20%",
    color: "rgba(216, 178, 242, 0.15)",
  },
  {
    icon: Gauge,
    title: "Faster Model APIs",
    description:
      "Redis caching for credit-scoring predictions at Kueski reduced peak API response times.",
    metric: "60%",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: Database,
    title: "Loan Approval Accuracy",
    description:
      "Partnered with data scientists to ship production AI features improving loan approval accuracy.",
    metric: "10%",
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
          Production results from AI systems, healthcare platforms, and fintech delivery.
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
