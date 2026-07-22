"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "¿Necesito experiencia previa?", answer: "No, ofrecemos programas como el Bautismo de Buceo diseñados específicamente para principiantes sin experiencia previa." },
  { question: "¿Puedo hacer bautismo sin certificado?", answer: "Sí, el bautismo no requiere ninguna certificación. Estarás acompañado por un instructor en todo momento." },
  { question: "¿Qué incluye el precio?", answer: "Nuestros precios incluyen equipo completo, instrucción, traslados desde/hacia el hotel y, en excursiones de día completo, comida y bebidas en el barco." },
  { question: "¿Qué debo llevar?", answer: "Solo necesitas tu bañador, toalla, protector solar y muchas ganas de disfrutar. Del resto nos encargamos nosotros." },
  { question: "¿Es seguro?", answer: "Totalmente. El buceo recreativo es muy seguro cuando se siguen las normas. Contamos con equipos de alta calidad revisados constantemente e instructores experimentados." },
  { question: "¿Hablan español?", answer: "¡Por supuesto! Todo nuestro equipo habla español e inglés fluidamente para garantizar tu comodidad y seguridad." },
  { question: "¿Hay transporte?", answer: "Sí, ofrecemos recogida gratuita en todos los hoteles de Hurghada. Para zonas alejadas como Makadi o El Gouna, aplicamos un pequeño suplemento." },
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
