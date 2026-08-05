"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const reels = [
  { id: "DaLq30nsazU", title: "Buceo con tortugas" },
  { id: "DV9FzAGjLEC", title: "Arrecifes del Mar Rojo" },
  { id: "DbERSJHhO7A", title: "Aventura Submarina" },
];

function ReelCard({ reel }: { reel: typeof reels[0] }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", bounce: 0, duration: 0.8 } as any,
        },
      }}
      className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-900"
    >
      {!inView && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {inView && (
        <>
          <iframe
            src={`https://www.instagram.com/p/${reel.id}/embed`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            frameBorder="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-800">
              <Loader2 size={24} className="text-white/40 animate-spin" />
              <span className="text-white/30 text-xs">Cargando...</span>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

export default function Videos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            Multimedia
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Experiencias <span className="text-primary">Únicas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Sumérgete en las maravillas del Mar Rojo a través de nuestros videos
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reels.map((reel, index) => (
            <ReelCard key={index} reel={reel} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
