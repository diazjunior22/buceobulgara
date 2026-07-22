"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, HeadphonesIcon, Anchor, Map, MessageCircle } from "lucide-react";
import Link from "next/link";

const reasons = [
  { icon: CheckCircle2, title: "Instructores certificados" },
  { icon: HeadphonesIcon, title: "Atención en español e inglés" },
  { icon: Users, title: "Grupos reducidos" },
  { icon: Anchor, title: "Equipos revisados y seguros" },
  { icon: Map, title: "Mejores inmersiones de Hurghada" },
  { icon: MessageCircle, title: "Asesoramiento durante tu estancia" },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", bounce: 0, duration: 0.6 } as any
    },
  };

  return (
    <section className="py-24 bg-bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
            className="lg:w-1/3"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-support/10 text-support font-semibold text-sm mb-6">
              Tu Seguridad es Primero
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6 leading-tight">
              ¿Por qué elegir <span className="text-primary">Buceo Hurgada</span>?
            </h2>
            <p className="text-text-muted text-lg mb-8">
              No somos un centro de buceo más. Somos tu familia en el Mar Rojo. Nos aseguramos de que cada detalle esté cuidado para que tú solo te preocupes de disfrutar.
            </p>
            <Link href="#contacto" className="btn-press inline-flex px-8 py-3 bg-text-dark text-bg-white rounded-full font-semibold hover:bg-gray-800 shadow-md">
              Hablemos
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group p-6 rounded-2xl border border-gray-100 bg-bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <div className="w-12 h-12 rounded-full bg-water/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-bg-white transition-colors duration-300 text-primary">
                  <reason.icon size={20} />
                </div>
                <h3 className="font-bold text-lg text-text-dark group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
