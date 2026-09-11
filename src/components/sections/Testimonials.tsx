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
    name: "Niko G",
    country: "TripAdvisor",
    text: "Una experiencia increíble de buceo en el Mar Rojo. Desde el primer momento, Maged y Patri nos hicieron sentir muy cómodos y bien acompañados. El barco estaba muy bien equipado y la organización fue excelente.",
    rating: 5,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/73/default-avatar-2020-13.jpg?w=300&h=-1&s=1",
    link: "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html"
  },
  {
    name: "German O",
    country: "TripAdvisor",
    text: "Uno de los mejores buceos de mi vida, la experiencia fue INCREIBLE. Destaco la AMABILIDAD de los responsables, me explicaron todo con paciencia, se adaptaron a mi ritmo. RECOMIENDO AL 100%.",
    rating: 5,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/59/default-avatar-2020-24.jpg?w=300&h=-1&s=1",
    link: "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html#/media/34587487/877127610:p/?albumid=107&type=0&category=107"
  },
  {
    name: "Cristina R",
    country: "TripAdvisor",
    text: "Maged y Patri fueron súper simpáticos, atentos y cercanos; nos cuidaron muchísimo y fueron muy profesionales. Fue una experiencia súper bonita e inolvidable para el recuerdo!",
    rating: 5,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/11/default-avatar-2020-41.jpg?w=300&h=-1&s=1",
    link: "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html#/media-atf/34587487/877645566:p/?albumid=-160&type=0&category=-160"
  },
  {
    name: "María Gabriela S",
    country: "TripAdvisor",
    text: "Una experiencia fantástica de principio a fin. El equipo fue muy profesional, amable y atento en todo momento. Nos hicieron sentir seguros y disfrutamos muchísimo. ¡Sin duda repetiríamos!",
    rating: 5,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f0/48/default-avatar-2020-15.jpg?w=100&h=100&s=1",
    link: "https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html#/media-atf/34587487/876956278:p/?albumid=-160&type=0&category=-160"
  }
];

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-24 bg-bg-white relative overflow-hidden">
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
                
                <div className="text-sm font-semibold text-text-dark">5/5 Excelente en TripAdvisor</div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://www.tripadvisor.es/Attraction_Review-g297549-d34587487-Reviews-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#34E0A1] text-[#000a12] font-bold rounded-full hover:bg-[#2CBF89] transition-colors shadow-md text-center">
                Leer opiniones
              </a>
              <a href="https://www.tripadvisor.es/UserReviewEdit-g297549-d34587487-Buceo_Hurgada-Hurghada_Red_Sea_and_Sinai.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#34E0A1] text-text-dark font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm text-center">
                Escribir una opinión
              </a>
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
                  <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="block bg-bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow duration-300">
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
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
