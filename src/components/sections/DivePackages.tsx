"use client";

import { motion } from "framer-motion";
import { Ship, Fish, Anchor, Moon, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

const WHATSAPP_BUSINESS = "201507083062";

interface DivePackage {
  title: string;
  category: string;
  price: string;
  description: string;
  requirement?: string;
  includes: string[];
  note?: string;
  image: string;
  icon: typeof Ship;
  color: string;
  waMessage: string;
}

const packages: DivePackage[] = [
  {
    title: "Experiencias en la Superficie",
    category: "Experiencias",
    price: "30 €",
    description:
      "Disfruta de un paseo en barco con opci\u00f3n de hacer snorkel. La experiencia incluye almuerzo, transporte, actividad de snorkel y equipo.",
    includes: ["Almuerzo", "Transporte", "Snorkel", "Equipo de snorkel"],
    note: "Dependiendo de las condiciones clim\u00e1ticas, tambi\u00e9n puedes a\u00f1adir una experiencia de bautismo de buceo. Esta actividad no est\u00e1 incluida en el precio.",
    image: "/dive-packages/experiencias-superficie.png",
    icon: Ship,
    color: "from-blue-600 to-cyan-500",
    waMessage:
      "Hola, estoy interesado en reservar el paquete Experiencias en la Superficie por 30\u20ac por persona. Me gustar\u00eda saber la disponibilidad.",
  },
  {
    title: "Buceo en Arrecifes Poco Profundos",
    category: "Buceo",
    price: "60 €",
    description:
      "Ad\u00e9ntrate en las aguas azules del Mar Rojo y descubre la incre\u00edble vida marina de Hurghada.",
    requirement: "Solo para buceadores certificados (OWD).",
    includes: ["Transporte", "Almuerzo", "Gu\u00eda de buceo"],
    note: "El alquiler del equipo completo de buceo est\u00e1 disponible por un suplemento de 15\u20ac.",
    image: "/dive-packages/arrecifes-poco-profundos.png",
    icon: Fish,
    color: "from-cyan-500 to-sky-400",
    waMessage:
      "Hola, estoy interesado en reservar el paquete Buceo en Arrecifes Poco Profundos por 60\u20ac por persona. Me gustar\u00eda saber la disponibilidad.",
  },
  {
    title: "Buceo en Naufragios de Aguas Profundas",
    category: "Naufragios",
    price: "80 €",
    description:
      "Convi\u00e9rtete en un explorador submarino y sum\u00e9rgete en las profundidades para descubrir misteriosos naufragios y capturar incre\u00edbles fotograf\u00edas bajo el agua.",
    requirement: "Solo para buceadores certificados (AOWD).",
    includes: ["Gu\u00eda de buceo personal", "Transporte", "Equipo de buceo"],
    image: "/dive-packages/naufragios-profundo.png",
    icon: Anchor,
    color: "from-teal-400 to-emerald-400",
    waMessage:
      "Hola, estoy interesado en reservar el paquete Buceo en Naufragios de Aguas Profundas por 80\u20ac por persona. Me gustar\u00eda saber la disponibilidad.",
  },
  {
    title: "Buceo Nocturno",
    category: "Buceo Nocturno",
    price: "80 €",
    description:
      "Vive una experiencia \u00fanica explorando el mundo submarino durante la noche y descubre todo aquello que permanece oculto durante el d\u00eda.",
    requirement: "Solo para buceadores certificados (OWD).",
    includes: ["Transporte", "Gu\u00eda de buceo personal", "Equipo de buceo"],
    image: "/dive-packages/buceo-nocturno.png",
    icon: Moon,
    color: "from-blue-500 to-indigo-500",
    waMessage:
      "Hola, estoy interesado en reservar el paquete Buceo Nocturno por 80\u20ac por persona. Me gustar\u00eda saber la disponibilidad.",
  },
];

export default function DivePackages() {
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
      transition: { type: "spring", bounce: 0, duration: 0.8 } as any,
    },
  };

  return (
    <section id="dive-packages" className="py-24 bg-bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            DIVE PACKAGES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Descubre nuestras experiencias de buceo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Explora el Mar Rojo como nunca antes con nuestras experiencias de buceo en
            Hurghada. Desde bautismos para principiantes hasta inmersiones en arrecifes
            y naufragios para certificados, cada aventura est\u00e1 dise\u00f1ada para mostrarte
            lo mejor del mundo submarino.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              className="group relative bg-bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50`}
                ></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1 group-hover:shadow-xl">
                  <pkg.icon size={20} className="text-primary" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-text-dark shadow-sm">
                  {pkg.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-poppins font-bold text-lg text-text-dark mb-1 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-text-light text-sm font-normal"> / persona</span>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {pkg.description}
                </p>

                {pkg.requirement && (
                  <div className="mb-4 px-3 py-2 bg-primary/10 rounded-xl flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary shrink-0" />
                    <span className="text-xs font-semibold text-primary">
                      {pkg.requirement}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Incluye
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-text-muted"
                      >
                        <div className="w-4 h-4 rounded-full bg-water/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-2.5 h-2.5 text-water"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.note && (
                  <p className="text-xs text-text-light italic mb-4">{pkg.note}</p>
                )}

                <div className="mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(pkg.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press w-full inline-flex items-center justify-center gap-2 py-3 bg-primary text-bg-white rounded-full font-semibold text-sm hover:bg-blue-700 shadow-md transition-colors"
                  >
                    Reservar ahora
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
