"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "201507083062";
  const defaultMessage = "Hola, me gustaría obtener más información sobre buceo y reservas en Hurghada.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        title="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition-shadow duration-300 border border-gray-100/80 cursor-pointer select-none"
      >
        {/* Subtle pulsing animation indicator */}
        <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon matching exact reference image */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-9 md:h-9 text-[#374151] group-hover:text-[#25D366] transition-colors duration-300 relative z-10"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.04 3.67M9.53 7.34C9.36 7.34 9.09 7.41 8.86 7.65C8.63 7.89 8 8.48 8 9.68C8 10.89 8.88 12.06 9 12.23C9.13 12.4 10.73 14.87 13.18 15.93C15.22 16.81 15.63 16.63 16.08 16.59C16.53 16.55 17.52 16 17.73 15.42C17.93 14.84 17.93 14.34 17.87 14.24C17.81 14.14 17.65 14.08 17.4 13.95C17.15 13.82 15.93 13.22 15.7 13.14C15.48 13.05 15.31 13.01 15.15 13.26C14.98 13.51 14.51 14.08 14.36 14.24C14.22 14.41 14.07 14.43 13.83 14.31C13.58 14.18 12.78 13.92 11.84 13.08C11.1 12.42 10.6 11.61 10.45 11.36C10.31 11.11 10.44 10.98 10.56 10.85C10.67 10.75 10.81 10.56 10.93 10.42C11.06 10.27 11.1 10.17 11.18 10C11.26 9.83 11.22 9.69 11.16 9.56C11.1 9.44 10.6 8.21 10.39 7.71C10.19 7.23 9.98 7.29 9.83 7.28C9.69 7.28 9.53 7.28 9.53 7.34Z" />
        </svg>

        {/* Hover Tooltip for desktop */}
        <span className="absolute right-full mr-3.5 px-3.5 py-1.5 rounded-full bg-text-dark/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-lg translate-x-1 group-hover:translate-x-0 hidden sm:block">
          ¿Hablamos por WhatsApp?
        </span>
      </motion.a>
    </aside>
  );
}
