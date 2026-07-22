"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  whatsapp: z.string().min(6, "Número de WhatsApp inválido"),
  activity: z.string().min(1, "Por favor selecciona una actividad"),
  date: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const WHATSAPP_BUSINESS = "201507083062";

const activityLabels: Record<string, string> = {
  bautismo: "Bautismo de Buceo",
  diario: "Buceo Diario",
  snorkel: "Día de Snorkel",
  "curso-padi": "Curso PADI",
  "curso-ssi": "Curso SSI",
  otro: "Otra consulta",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const message = [
      "🧊 *Nuevo mensaje - Buceo Hurgada*",
      "",
      `*Nombre:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*WhatsApp:* ${data.whatsapp}`,
      `*Actividad:* ${activityLabels[data.activity] || data.activity}`,
      `*Fecha preferida:* ${data.date || "No especificada"}`,
      `*Mensaje:* ${data.message}`,
      "",
      "---------------------",
      "Enviado desde el formulario web",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    reset();
  };

  return (
    <section id="contacto" className="relative">
      {/* CTA Section */}
      <div className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2070&auto=format&fit=crop" 
            alt="Mar Rojo" 
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-3xl md:text-5xl text-bg-white mb-8"
          >
            ¿Listo para vivir una aventura inolvidable?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#form" className="btn-press px-8 py-4 bg-bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl">
              Reserva tu experiencia
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_BUSINESS}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-press px-8 py-4 bg-[#25D366] text-bg-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#20b858] shadow-xl"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div id="form" className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-poppins font-bold text-3xl text-text-dark mb-6">Estamos aquí para ayudarte</h2>
              <p className="text-text-muted mb-8">
                Ponte en contacto con nosotros para cualquier duda, reserva o información adicional. Estaremos encantados de atenderte en español.
              </p>
              
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Ubicación</h4>
                    <p className="text-text-muted">Hurghada, Gobernación del Mar Rojo, Egipto</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">WhatsApp / Teléfono</h4>
                    <a href={`tel:+${WHATSAPP_BUSINESS}`} className="text-text-muted hover:text-primary transition-colors">+20 15 0708 3062</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Email</h4>
                    <a href="mailto:info@buceohurgada.com" className="text-text-muted hover:text-primary transition-colors">info@buceohurgada.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Horario de atención</h4>
                    <p className="text-text-muted">Lunes a Domingo: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.56455584556!2d33.725895747444994!3d27.214470385750346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b415a782eb%3A0xc665126f5e8be668!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="font-poppins font-bold text-2xl text-text-dark mb-6">Envíanos un mensaje</h3>
              
              {isSubmitSuccessful ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">¡Mensaje enviado con éxito!</h4>
                  <p>Te responderemos lo antes posible a tu WhatsApp o correo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">Nombre completo *</label>
                    <input 
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50'}`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">Correo electrónico *</label>
                    <input 
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50'}`}
                      placeholder="tu@correo.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-text-dark mb-1">WhatsApp (con código de país) *</label>
                    <input 
                      id="whatsapp"
                      {...register("whatsapp")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${errors.whatsapp ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50'}`}
                      placeholder="+34 600 000 000"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="activity" className="block text-sm font-medium text-text-dark mb-1">Actividad de interés *</label>
                    <select 
                      id="activity"
                      {...register("activity")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all appearance-none ${errors.activity ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50'}`}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="bautismo">Bautismo de Buceo</option>
                      <option value="diario">Buceo Diario (Buceadores certificados)</option>
                      <option value="snorkel">Día de Snorkel</option>
                      <option value="curso-padi">Curso PADI</option>
                      <option value="curso-ssi">Curso SSI</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                    {errors.activity && <p className="text-red-500 text-xs mt-1">{errors.activity.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text-dark mb-1">Fecha preferida</label>
                    <input 
                      id="date"
                      type="date"
                      {...register("date")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">Mensaje *</label>
                    <textarea 
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20 bg-bg-light hover:bg-gray-50'}`}
                      placeholder="Cuéntanos más sobre lo que buscas..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-press mt-2 w-full py-4 bg-primary text-bg-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={20} /> Enviar Mensaje
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-text-light mt-2">
                    Tus datos están seguros y solo se usarán para contactarte.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
