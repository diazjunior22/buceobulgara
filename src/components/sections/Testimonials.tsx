"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos M.",
    country: "España",
    text: "Hicimos el curso PADI Open Water y la experiencia fue increíble. Instructores súper pacientes y un equipo de primera. ¡Volveremos seguro!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Laura G.",
    country: "Argentina",
    text: "El bautismo de buceo superó todas mis expectativas. Ver tortugas y esos arrecifes tan coloridos fue mágico. La seguridad que transmiten es total.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David y Elena",
    country: "México",
    text: "Días de snorkel perfectos. Nos llevaron a los mejores puntos lejos de las multitudes. Atención inmejorable en nuestro idioma.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Javier R.",
    country: "Chile",
    text: "Organización de 10. Desde la recogida en el hotel hasta el último momento en el barco. El mejor centro de buceo de todo Hurghada.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as any }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-600 font-semibold text-sm mb-6">
              Reseñas de Clientes
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6 leading-tight">
              Lo que dicen <br />nuestros buceadores
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-md">
              Miles de sonrisas bajo el agua avalan nuestro trabajo. Lee las experiencias de quienes ya descubrieron el Mar Rojo con nosotros.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-white overflow-hidden relative">
                    <Image src={t.image} alt={t.name} fill sizes="48px" loading="lazy" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-text-dark">4.9/5 en Google y TripAdvisor</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0 } as any}
            className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full max-w-[340px] md:max-w-[400px] !pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                    <Quote size={40} className="text-primary/20 mb-4" />
                    
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-text-dark text-lg mb-8 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-100">
                        <Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" loading="lazy" className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-dark">{testimonial.name}</h4>
                        <p className="text-sm text-text-muted">{testimonial.country}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
