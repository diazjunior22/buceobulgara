"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play, Pause, Sparkles } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

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

const rawImages = [
  { src: img1, title: "Arrecifes Vivos del Mar Rojo", category: "Arrecifes" },
  { src: img2, title: "Buceador en Aguas Cristalinas", category: "Inmersión" },
  { src: img3, title: "Jardines de Coral y Fauna Marina", category: "Arrecifes" },
  { src: img4, title: "Vida Marina en Hurghada", category: "Fauna" },
  { src: img5, title: "Inmersión Guiada en Aguas Abiertas", category: "Inmersión" },
  { src: img6, title: "Bautismo de Buceo en Hurghada", category: "Bautismos" },
  { src: img7, title: "Arrecifes de Coral Virgen", category: "Arrecifes" },
  { src: img8, title: "Exploración Submarina en Grupo", category: "Inmersión" },
  { src: img9, title: "Aventura en el Mar Rojo", category: "Experiencias" },
  { src: img10, title: "Fondos Marinos Turquesas", category: "Arrecifes" },
  { src: img11, title: "Biodiversidad de Hurghada", category: "Fauna" },
  { src: img12, title: "Jornada de Buceo en Barco", category: "Excursiones" },
  { src: img13, title: "Buceadores Certificados en Hurghada", category: "Cursos" },
  { src: img14, title: "Aguas Cristalinas de Hurghada", category: "Paisaje" },
  { src: img15, title: "Snorkel y Buceo en Arrecifes", category: "Snorkel" },
  { src: img16, title: "Fotografía Submarina Profesional", category: "Fauna" },
  { src: img17, title: "Encuentros Subacuáticos Únicos", category: "Experiencias" },
  { src: img18, title: "Instructores y Buceadores en Acción", category: "Equipo" },
  { src: img19, title: "Colores y Luces del Mar Rojo", category: "Arrecifes" },
  { src: img20, title: "Atardecer tras una Gran Inmersión", category: "Excursiones" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const current = selectedIndex !== null ? rawImages[selectedIndex] : null;

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % rawImages.length : 0));
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + rawImages.length) % rawImages.length : rawImages.length - 1
    );
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

  const toggleAutoplay = () => {
    if (!swiperInstance) return;
    if (isPlaying) {
      swiperInstance.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperInstance.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <section id="galeria" className="py-20 md:py-24 bg-bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with Title & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-support/10 text-support font-semibold text-sm mb-4"
            >
              <Sparkles size={16} />
              Nuestros Momentos
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-poppins font-bold text-3xl md:text-5xl text-text-dark leading-tight"
            >
              Galería del <span className="text-primary">Mar Rojo</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-base md:text-lg mt-3"
            >
              Desliza por nuestras fotos o haz clic en cualquiera para verla en pantalla completa.
            </motion.p>
          </div>

          {/* Interactive Controls Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 self-start md:self-end bg-bg-light border border-gray-200/80 p-1.5 rounded-full shadow-sm"
          >
            <span className="text-xs font-semibold text-text-muted px-3 select-none">
              {activeIndex + 1} / {rawImages.length}
            </span>

            <button
              type="button"
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pausar pase automático" : "Reanudar pase automático"}
              className="w-9 h-9 rounded-full bg-bg-white text-text-dark hover:text-primary shadow-sm hover:shadow flex items-center justify-center transition-all btn-press"
              title={isPlaying ? "Pausar pase automático" : "Reanudar pase automático"}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
            </button>

            <div className="w-[1px] h-4 bg-gray-200" />

            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Foto anterior"
              className="w-9 h-9 rounded-full bg-bg-white text-text-dark hover:text-primary shadow-sm hover:shadow flex items-center justify-center transition-all btn-press"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Siguiente foto"
              className="w-9 h-9 rounded-full bg-primary text-bg-white hover:bg-blue-700 shadow-sm hover:shadow-md flex items-center justify-center transition-all btn-press"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Swiper Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as any }}
          className="relative"
        >
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            speed={700}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-12 !overflow-visible"
          >
            {rawImages.map((image, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  onClick={() => setSelectedIndex(index)}
                  className="group relative h-[360px] md:h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-gray-100 bg-bg-light"
                >
                  <Image
                    src={image.src}
                    alt={`${image.title} - Buceo Hurgada Mar Rojo`}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-108"
                    loading={index < 4 ? "eager" : "lazy"}
                  />

                  {/* Gradient overlay on hover/active */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-40 group-hover:opacity-90 transition-opacity duration-400" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/10 shadow-sm">
                      {image.category}
                    </span>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-sm">
                    <ZoomIn size={16} />
                  </div>

                  {/* Bottom Info: Title & Action */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform transition-transform duration-400">
                    <p className="text-white text-base md:text-lg font-bold font-poppins drop-shadow leading-snug line-clamp-2">
                      {image.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-blue-200 mt-2 opacity-90 group-hover:opacity-100">
                      <span>Ver foto ampliada</span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center select-none p-4"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101] btn-press"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Cerrar vista completa"
            >
              <X size={22} />
            </button>

            {/* Counter pill */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[101] px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium border border-white/10">
              {selectedIndex + 1} / {rawImages.length}
            </div>

            {/* Prev Button */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101] btn-press"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 z-[101] btn-press"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Foto siguiente"
            >
              <ChevronRight size={26} />
            </button>

            {/* Modal Image Box */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", bounce: 0, duration: 0.45 } as any}
              className="relative w-full max-w-5xl max-h-[82vh] rounded-2xl overflow-hidden cursor-default shadow-2xl bg-black/40 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[75vh] flex items-center justify-center">
                <Image
                  src={current.src}
                  alt={`${current.title} - Buceo Hurgada`}
                  width={1920}
                  height={1080}
                  className="w-auto h-auto max-h-[75vh] max-w-full object-contain mx-auto"
                  quality={95}
                  priority
                />
              </div>

              {/* Caption Footer */}
              <div className="w-full p-4 md:p-5 bg-gradient-to-t from-black/80 to-black/30 backdrop-blur-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {current.category}
                  </span>
                  <p className="text-white text-base md:text-lg font-semibold mt-0.5">
                    {current.title}
                  </p>
                </div>
                <span className="text-xs text-white/50 hidden sm:inline-block">
                  Pulsa ESC o haz clic fuera para cerrar
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
