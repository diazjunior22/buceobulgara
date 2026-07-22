"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);
  return { count, nodeRef };
}

export default function Hero() {
  const clientsCount = useCounter(1500, 2.5);
  const spotsCount = useCounter(15, 2);
  const securityCount = useCounter(100, 2);

  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (el && el.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any } },
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-text-dark">
      {/* Background Video & Overlay with Parallax */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            poster="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2070&auto=format&fit=crop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <source src="/herobuceo.mp4" type="video/mp4" />
          </video>
        ) : null}
        {!videoLoaded && !videoError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#061220]" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20 pb-28 md:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl text-bg-white leading-tight tracking-tight mb-6"
          >
            Explora el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mar Rojo</span> como nunca imaginaste
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
          >
            Explora las maravillas del Mar Rojo con nuestro centro de buceo en Hurghada, Egipto. Disfruta de bautismos de buceo, cursos PADI y SSI, excursiones diarias y experiencias inolvidables para todos los niveles.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#contacto" className="btn-press w-full sm:w-auto px-8 py-4 bg-primary text-bg-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(40,116,252,0.4)] hover:shadow-[0_0_30px_rgba(40,116,252,0.6)] border border-primary">
              <Check size={20} /> Reservar experiencia
            </Link>
            <Link href="#experiencias" className="btn-press w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-bg-white border border-white/20 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              Ver actividades <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-bg-white to-transparent pt-16 pb-6">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-bg-white/80 backdrop-blur-xl saturate-150 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div ref={clientsCount.nodeRef} className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-1">+{clientsCount.count}</div>
              <div className="text-sm md:text-base text-text-muted font-medium">Clientes felices</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-gray-100">
              <div ref={spotsCount.nodeRef} className="font-poppins font-bold text-3xl md:text-4xl text-secondary mb-1">{spotsCount.count}+</div>
              <div className="text-sm md:text-base text-text-muted font-medium">Puntos inmersión</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:border-l border-gray-100 mt-4 md:mt-0">
              <div ref={securityCount.nodeRef} className="font-poppins font-bold text-3xl md:text-4xl text-support mb-1">{securityCount.count}%</div>
              <div className="text-sm md:text-base text-text-muted font-medium">Seguridad</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-gray-100 mt-4 md:mt-0">
              <div className="font-poppins font-bold text-3xl md:text-4xl text-yellow-400 mb-1">5★</div>
              <div className="text-sm md:text-base text-text-muted font-medium">Valoración</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
