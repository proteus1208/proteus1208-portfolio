"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar, Mail, Phone } from "lucide-react";
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
                I am a Full-Stack Engineer with 10 years of experience building production web products in React, Next.js, and TypeScript.
              </p>
              <p>
                I work across Node.js backends, REST APIs, GraphQL, and data layers with PostgreSQL, MongoDB, and Redis, plus cloud delivery on AWS with Docker, Kubernetes, and CI/CD.
              </p>
              <p>
                I deliver scalable full-stack features for digital platforms, balancing frontend performance, API design, and maintainable architecture.
              </p>
              <div className="pt-2 space-y-2 text-base text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${SITE_CONFIG.links.email}`} className="hover:text-primary transition-colors">
                    {SITE_CONFIG.links.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+5564984322301" className="hover:text-primary transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>

            <div className="w-full space-y-4">
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
        </motion.div>
      </div>
    </section>
  );
}
