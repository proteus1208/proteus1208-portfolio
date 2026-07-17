"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import {
  ScrollReveal,
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A bit about who I am, what I do, and where I&apos;m headed.
            </p>
          </motion.div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I am a Senior Full-Stack Developer with over 9 years of experience building web applications and software solutions for businesses.
              </p>
              <p>
                I work across both frontend and backend development, taking projects from planning and development to deployment and maintenance. My experience includes modern JavaScript frameworks, backend development, RESTful APIs, cloud platforms, databases, and microservices.
              </p>

              <p>
                I enjoy writing clean, maintainable code and building reliable applications that provide a great user experience and solve real business problems.
              </p>
              <p>
                In addition to full-stack development, I have hands-on experience with Blockchain and Artificial Intelligence (AI). I use these technologies when they are the right fit to create innovative and scalable solutions.
              </p>
              <p>
                I enjoy working with teams, solving challenging technical problems, and continuously learning new technologies to improve my skills and deliver high-quality software.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] border-2 border-sky-800 shadow-lg">
                  <div className="rounded-full overflow-hidden w-full h-full relative">
                    <Image
                      src="/me/me.png"
                      alt="Mark"
                      fill
                      sizes="300px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <br /><br /><br />

              <div className="pt-40 w-full space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
