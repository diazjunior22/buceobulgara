"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Por qué elegir buceo en Hurghada (Egipto) con Buceo Hurgada?",
    answer: "Somos el centro de buceo en español de referencia en Hurghada, Egipto. Ofrecemos grupos reducidos, instructores y guías hispanohablantes certificados, traslados incluidos desde tu hotel, barco espacioso con comida buffet recién hecha y la máxima seguridad en los arrecifes más bellos del Mar Rojo."
  },
  {
    question: "¿Necesito experiencia previa para bucear en Hurghada o Egipto?",
    answer: "No, no necesitas ninguna experiencia previa. Nuestro programa de Bautismo de Buceo está diseñado específicamente para principiantes. Incluye explicación teórica en español y 2 inmersiones personalizadas guiadas mano a mano por un instructor profesional."
  },
  {
    question: "¿Cuál es la mejor época para hacer buceo en Egipto y el Mar Rojo?",
    answer: "En Hurghada se bucea los 365 días del año. La visibilidad bajo el agua supera casi siempre los 30 metros y la temperatura oscila entre los 22°C en invierno y 29°C en verano, lo que convierte a Egipto en uno de los mejores destinos de buceo del mundo."
  },
  {
    question: "¿Qué vida marina se puede ver al bucear en Hurghada, Egipto?",
    answer: "El Mar Rojo alberga más de 1.200 especies de peces y 200 variedades de coral. Es muy habitual avistar delfines en libertad, tortugas marinas, peces payaso en sus anémonas, rayas de puntos azules, morenas gigantes, peces globo y espectaculares jardines de coral."
  },
  {
    question: "¿Qué incluye el precio de las excursiones de buceo en Hurghada?",
    answer: "Nuestros precios incluyen equipo completo de buceo de alta calidad revisado, instrucción en español, recogida y regreso en tu hotel en Hurghada, almuerzo buffet recién preparado a bordo y bebidas frías y calientes ilimitadas durante todo el día de navegación."
  },
  {
    question: "¿Qué cursos oficiales de buceo certifican en Hurghada (PADI y SSI)?",
    answer: "Impartimos cursos con certificación internacional oficial PADI y SSI: Open Water Diver (OWD), Advanced Open Water, cursos de especialidad y PADI Dive Master. Todo el material de estudio, manuales y exámenes están disponibles 100% en español."
  },
  {
    question: "¿Ofrecen servicio de recogida y transporte en hoteles de Hurghada?",
    answer: "Sí, disponemos de recogida y traslado de cortesía en todos los hoteles de Hurghada ciudad. Para zonas cercanas como El Gouna, Makadi Bay, Sahl Hasheesh o Soma Bay, organizamos el traslado con un pequeño suplemento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            Resolvemos tus dudas principales para que tu única preocupación sea disfrutar del Mar Rojo.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.23, 1, 0.32, 1] as any }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] border ${isOpen ? 'bg-bg-white border-primary/30 shadow-[0_8px_30px_rgba(40,116,252,0.08)]' : 'bg-bg-white border-transparent hover:border-gray-200 shadow-sm hover:shadow-md'}`}
                >
                  <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-text-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] } as any}
                      className="origin-top overflow-hidden"
                    >
                      <div className="p-6 pt-2 text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
