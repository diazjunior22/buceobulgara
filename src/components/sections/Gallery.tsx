"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

import img1 from "@/components/assets/galery/1_.jpg";
import img2 from "@/components/assets/galery/2_.jpg";
import img3 from "@/components/assets/galery/3_.jpg";
import img4 from "@/components/assets/galery/4_.jpg";
import img5 from "@/components/assets/galery/5_.jpg";
import img6 from "@/components/assets/galery/6_.jpg";
import img7 from "@/components/assets/galery/7_.jpg";
import img8 from "@/components/assets/galery/8_.jpg";
import img9 from "@/components/assets/galery/9.jpg";
import img10 from "@/components/assets/galery/10_.jpg";
import img11 from "@/components/assets/galery/11.jpg";
import img12 from "@/components/assets/galery/12.jpg";
import img13 from "@/components/assets/galery/13.jpg";
import img14 from "@/components/assets/galery/14.jpg";
import img15 from "@/components/assets/galery/15 (1).jpg";
import img16 from "@/components/assets/galery/16.jpg";
import img17 from "@/components/assets/galery/17.jpg";
import img18 from "@/components/assets/galery/18.jpg";
import img19 from "@/components/assets/galery/19_.jpg";
import img20 from "@/components/assets/galery/20_.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
].map((src) => ({ src, name: "Sin Nombre", span: "square" }));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const current = selectedIndex !== null ? images[selectedIndex] : null;

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev + 1) % images.length : 0);
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => prev !== null ? (prev - 1 + images.length) % images.length : images.length - 1);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleClose, goNext, goPrev]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0, duration: 0.8 } as any,
    },
  };

  return (
    <section id="galeria" className="py-24 bg-bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-support/10 text-support font-semibold text-sm mb-6"
          >
            Nuestros Momentos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Galería del <span className="text-primary">Mar Rojo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Explora los fondos marinos más espectaculares de Hurghada a través de nuestras imágenes
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {images.map((image, index) => {
            let colSpan = "md:col-span-1";
            let rowSpan = "md:row-span-1";

            if (image.span === "tall") rowSpan = "md:row-span-2";
            if (image.span === "wide") colSpan = "md:col-span-2";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${colSpan} ${rowSpan} relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 h-52 md:h-auto`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  loading={index < 4 ? undefined : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <span className="text-white text-sm font-medium drop-shadow-sm">{image.name}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <ImageIcon size={14} className="text-white" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center select-none"
            onClick={handleClose}
          >
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101]"
              onClick={(e) => { e.stopPropagation(); handleClose(); }}
            >
              <X size={22} />
            </button>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[101] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101] opacity-60 hover:opacity-100"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101] opacity-60 hover:opacity-100"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 } as any}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-auto rounded-xl overflow-hidden cursor-default shadow-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.name}
                width={1920}
                height={1080}
                className="w-full h-full object-contain max-h-[85vh]"
                quality={95}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/90 text-sm font-medium">{current.name}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
