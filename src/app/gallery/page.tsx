"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryLink } from "@/components/ui/luxury-link";
import { GEMSTONES } from "@/lib/gemstones";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allImages = GEMSTONES.flatMap((gem) =>
    gem.gallery.map((img) => ({ src: img, name: gem.name, type: gem.type }))
  );

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Visual Archive"
            title="Interactive Gemstone Gallery"
            subtitle="Explore high-resolution imagery of museum-grade specimens in our collection."
          />
        </div>
      </section>

      <section className="section-padding !pt-0 bg-primary-black">
        <div className="container-luxury">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((item, i) => (
              <motion.button
                key={`${item.name}-${i}`}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                onClick={() => setSelectedIndex(i)}
                className="group relative w-full break-inside-avoid overflow-hidden luxury-card cursor-pointer"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary-black/0 group-hover:bg-primary-black/40 transition-colors flex items-center justify-center">
                    <ZoomIn
                      className="text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity"
                      size={32}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-luxury-gold/60">
                    {item.type}
                  </p>
                  <p className="font-heading text-sm text-ivory mt-1">{item.name}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <LuxuryLink href="/collection">View Full Collection</LuxuryLink>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 text-luxury-gold p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[selectedIndex].src}
                alt={allImages[selectedIndex].name}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary-black to-transparent">
                <p className="font-heading text-xl text-ivory">
                  {allImages[selectedIndex].name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
