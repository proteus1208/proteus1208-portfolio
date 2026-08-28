"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar, Mail, Phone } from "lucide-react";
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
                I am a Full Stack Engineer with over 8 years of experience building scalable, high-performance web and mobile applications across modern JavaScript, Java, and Python ecosystems.
              </p>
              <p>
                I specialize in designing distributed systems, backend APIs, and cloud-native architectures that support high-traffic production environments. I have strong hands-on experience in React, Node.js, Spring Boot, FastAPI, and AWS, with a focus on system performance, scalability, and reliability.
              </p>
              <p>
                I consistently deliver optimized, production-ready solutions that improve latency, throughput, and overall system efficiency.
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
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] border-2 border-sky-800 shadow-lg">
                  <div className="rounded-full overflow-hidden w-full h-full relative bg-black">
                    <Image
                      src="/me/me.png"
                      alt="Tymon Charles Blow"
                      fill
                      sizes="300px"
                      className="object-cover object-center scale-110"
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
