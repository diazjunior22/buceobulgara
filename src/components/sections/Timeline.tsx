"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckSquare, Car, Waves, Camera } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Paso 1", text: "Reserva fácilmente tu experiencia por WhatsApp o formulario." },
  { icon: CheckSquare, title: "Paso 2", text: "Confirmamos tu reserva y adaptamos todo a tu nivel." },
  { icon: Car, title: "Paso 3", text: "Te recogemos en tu hotel o punto de encuentro acordado." },
  { icon: Waves, title: "Paso 4", text: "Disfrutas del Mar Rojo de la mano de expertos." },
  { icon: Camera, title: "Paso 5", text: "Vuelves con recuerdos inolvidables y una sonrisa." },
];

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as any } },
  };

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Tu experiencia paso a paso
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            Hacemos que todo el proceso sea simple y sin estrés para que te concentres en disfrutar.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-bg-white shadow-md border-2 border-gray-100 flex items-center justify-center mb-6 relative group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon size={24} className="text-primary" />
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-bg-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-text-dark mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm px-2">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

