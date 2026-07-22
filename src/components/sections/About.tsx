"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", bounce: 0, duration: 0.8 } as any
    },
  };

  const features = [
    "Experiencias personalizadas",
    "Atención en español e inglés",
    "Equipos certificados de alta calidad",
    "Años de experiencia en Hurghada",
  ];

  return (
    <section id="nosotros" className="py-24 bg-bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0, duration: 1 } as any}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-gray-100 bg-bg-light flex items-center justify-center p-8 md:p-12">
              <Image
                src="/logo.png"
                alt="Buceo Hurgada"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.3 } as any}
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-poppins font-bold text-2xl text-primary">+10</span>
                </div>
                <div>
                  <div className="font-bold text-text-dark">Años de</div>
                  <div className="text-text-muted">Experiencia</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 w-max">
              Sobre Nosotros
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark mb-6 leading-tight"
            >
              Buceo en español en el corazón del <span className="text-primary">Mar Rojo</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-text-muted text-lg leading-relaxed mb-8"
            >
              Nuestra pasión es compartir la magia del mundo submarino. Ofrecemos experiencias personalizadas, atención cálida en español e inglés, equipos certificados de la más alta calidad y muchos años de experiencia explorando los mejores y más vibrantes arrecifes de Hurghada.
            </motion.p>

            <motion.ul variants={containerVariants} className="flex flex-col gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-water/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-water" />
                  </div>
                  <span className="text-text-dark font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <a href="#contacto" className="btn-press inline-flex px-8 py-3 bg-text-dark text-bg-white rounded-full font-semibold hover:bg-gray-800 shadow-md transition-colors">
                Conócenos mejor
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
