"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fish, Anchor, Navigation, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Bautismo de Buceo",
    description: "Tu primera experiencia bajo el agua. Ideal para quienes desean descubrir el buceo de forma segura y divertida.",
    icon: Anchor,
    image: "/experiencias/bautismo-buceo.webp",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Buceo Diario",
    description: "Explora los mejores arrecifes del Mar Rojo acompañado de instructores certificados.",
    icon: Navigation,
    image: "/experiencias/buceo-diario.jpg",
    color: "from-cyan-500 to-sky-400"
  },
  {
    title: "Día de Snorkel",
    description: "Una aventura perfecta para toda la familia disfrutando de aguas cristalinas y una impresionante vida marina.",
    icon: Fish,
    image: "/experiencias/dia-snorkel.jpg",
    color: "from-teal-400 to-emerald-400"
  },
  {
    title: "Cursos PADI",
    description: "Certificaciones internacionales desde Open Water hasta niveles avanzados.",
    icon: GraduationCap,
    image: "/experiencias/cursos-buceo.jpg",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Cursos SSI",
    description: "Formación profesional con certificación internacional adaptada a cada nivel.",
    icon: Award,
    image: "/experiencias/cursos-buceo.jpg",
    color: "from-purple-500 to-pink-500"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", bounce: 0, duration: 0.8 } as any
    },
  };

  return (
    <section id="experiencias" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            Nuestras Experiencias
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Aventuras Submarinas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Descubre todo lo que el Mar Rojo tiene para ofrecer. Desde tus primeros respiros bajo el agua hasta certificaciones avanzadas.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative bg-bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50`}></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1 group-hover:shadow-xl">
                  <service.icon size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-poppins font-bold text-xl text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-8 flex-1">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link href="#contacto" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-blue-800 transition-colors">
                    Ver más detalles
                    <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
