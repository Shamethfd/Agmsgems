"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuxuryLink } from "@/components/ui/luxury-link";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-blue-diamond-4026-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <Image
          src="https://images.unsplash.com/photo-1617038260897-41a89fa42ca0?w=1920&q=80"
          alt=""
          fill
          className="object-cover -z-10"
          priority
          aria-hidden
        />
      </div>

      <div className="container-luxury relative z-10 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-luxury-gold mb-6"
        >
          Rare Gemstone Asset Management
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[1.1] max-w-5xl mx-auto"
        >
          Rare Gemstones.
          <br />
          <span className="gold-gradient-text">Extraordinary Assets.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base md:text-lg text-text-primary/70 max-w-2xl mx-auto leading-relaxed"
        >
          AGMS specializes in sourcing and managing museum-grade natural
          gemstones for collectors, investors, and wealth preservation clients
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LuxuryLink href="/collection">Explore Collection</LuxuryLink>
          <LuxuryLink href="/contact" variant="outline">
            Request Consultation
          </LuxuryLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/60 to-luxury-gold/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
