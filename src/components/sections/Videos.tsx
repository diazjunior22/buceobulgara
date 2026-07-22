"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const videos = [
  {
    src: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342154/GX011916_idmdep.mp4",
    poster: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342154/GX011916_idmdep.jpg",
    title: "Buceo con tortugas",
  },
  {
    src: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342155/GX011900_azswty.mp4",
    poster: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342155/GX011900_azswty.jpg",
    title: "Arrecifes del Mar Rojo",
  },
  {
    src: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342152/GX011908_yatyfy.mp4",
    poster: "https://res.cloudinary.com/dmtqsct7k/video/upload/vc_h264/v1784342152/GX011908_yatyfy.jpg",
    title: "Aventura Submarina",
  },
];

function VideoCard({ video, onClick }: { video: typeof videos[0]; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
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
      className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-video shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-900"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <Maximize2 size={20} className="text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
        <h3 className="text-white font-semibold text-lg drop-shadow-sm">{video.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [lightboxLoading, setLightboxLoading] = useState(true);
  const [lightboxError, setLightboxError] = useState(false);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoOpen = (src: string) => {
    setSelectedVideo(src);
    setLightboxLoading(true);
    setLightboxError(false);
  };

  const handleClose = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
      lightboxVideoRef.current.currentTime = 0;
    }
    setLightboxLoading(true);
    setLightboxError(false);
    setSelectedVideo(null);
  };

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
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              onClick={() => handleVideoOpen(video.src)}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 } as any}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                  <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
              {lightboxError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-2">No se pudo cargar el video</p>
                    <p className="text-white/40 text-xs">Intenta de nuevo más tarde</p>
                  </div>
                </div>
              ) : null}
              <video
                ref={lightboxVideoRef}
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                playsInline
                onLoadedData={() => setLightboxLoading(false)}
                onError={() => { setLightboxLoading(false); setLightboxError(true); }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
