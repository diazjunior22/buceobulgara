"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Euro } from "lucide-react";

type CourseCategory = "Beginners" | "Advanced" | "Professionals";

interface Course {
  title: string;
  description: string;
  price: number;
  categories: CourseCategory[];
  popular?: boolean;
}

const courses: Course[] = [
  {
    title: "PADI\u00AE Open Water Course",
    description: "PADI\u00AE Open Water Diver abre la puerta al incre\u00edble mundo submarino. Aprende las habilidades fundamentales para convertirte en un buceador certificado y comienza a explorar el fascinante mundo submarino.",
    price: 330,
    categories: ["Beginners"],
    popular: true,
  },
  {
    title: "Scuba Diving Introduction",
    description: "\u00bfTe interesa el buceo pero no sabes exactamente qu\u00e9 esperar del mundo submarino? El curso de introducci\u00f3n es perfecto para descubrir la sensaci\u00f3n \u00fanica de respirar bajo el agua y vivir tu primera experiencia de buceo.",
    price: 60,
    categories: ["Beginners"],
  },
  {
    title: "PADI\u00AE AWARE Specialty",
    description: "Aprende c\u00f3mo contribuir a la protecci\u00f3n de los oc\u00e9anos mientras desarrollas conocimientos y habilidades para generar un impacto positivo en el medio marino.",
    price: 110,
    categories: ["Beginners", "Advanced"],
  },
  {
    title: "Emergency First Response Primary and Secondary Care",
    description: "Aprende c\u00f3mo actuar en momentos cr\u00edticos antes de que llegue la asistencia m\u00e9dica profesional, desarrollando habilidades de atenci\u00f3n primaria y secundaria ante emergencias.",
    price: 125,
    categories: ["Beginners", "Advanced"],
  },
  {
    title: "Emergency First Response\u00AE \u2013 Care for Children",
    description: "Desarrolla las habilidades necesarias para identificar y responder ante lesiones y enfermedades comunes en ni\u00f1os, aprendiendo a proporcionar una atenci\u00f3n adecuada y segura.",
    price: 125,
    categories: ["Beginners", "Advanced"],
  },
  {
    title: "Peak Performance Buoyancy",
    description: "Mejora tu control de flotabilidad y aprende a moverte bajo el agua con mayor eficiencia. Una excelente habilidad para disfrutar de inmersiones m\u00e1s c\u00f3modas, consumir menos aire y mejorar tu experiencia como buceador.",
    price: 110,
    categories: ["Beginners", "Advanced"],
  },
  {
    title: "Sidemount Rec Diver",
    description: "Descubre el equilibrio y la eficiencia del buceo sidemount con la orientaci\u00f3n de un instructor PADI. Una modalidad que ofrece comodidad y una nueva forma de disfrutar tus inmersiones.",
    price: 200,
    categories: ["Beginners", "Advanced", "Professionals"],
  },
  {
    title: "PADI\u00AE Advanced Open Water Course",
    description: "Lleva tus habilidades de buceo al siguiente nivel. Practica navegaci\u00f3n y flotabilidad, experimenta el buceo profundo y descubre nuevas especialidades para ampliar tu experiencia bajo el agua.",
    price: 245,
    categories: ["Advanced"],
  },
  {
    title: "Enriched Air (Nitrox) Diver",
    description: "Aprende a bucear utilizando aire enriquecido Nitrox y descubre sus ventajas para determinadas inmersiones y planes de buceo, siempre bajo la formaci\u00f3n y supervisi\u00f3n correspondiente.",
    price: 150,
    categories: ["Advanced"],
  },
  {
    title: "Deep Diver",
    description: "Explora nuevas profundidades y aprende a planificar inmersiones profundas, gestionar tu suministro de gas y comprender los efectos de la narcosis durante el buceo.",
    price: 190,
    categories: ["Advanced"],
  },
  {
    title: "PADI\u00AE Rescue Diver",
    description: "Desarrolla habilidades para identificar y gestionar situaciones de emergencia en el buceo. Mejora tu confianza, capacidad de respuesta y preparaci\u00f3n para ayudar a otros buceadores.",
    price: 350,
    categories: ["Advanced", "Professionals"],
  },
  {
    title: "Wreck Diver",
    description: "Descubre el fascinante mundo del buceo en pecios. Explora barcos, aviones y otras estructuras sumergidas que se han convertido en refugios para una incre\u00edble variedad de vida marina.",
    price: 200,
    categories: ["Advanced"],
  },
  {
    title: "PADI\u00AE Dive Master",
    description: "Convierte tu pasi\u00f3n por el buceo en una profesi\u00f3n. Desarrolla tus habilidades y conocimientos para comenzar tu camino como profesional del buceo y convertirte en PADI Divemaster.",
    price: 750,
    categories: ["Professionals"],
  },
];

const filterTabs: { key: "all" | CourseCategory; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "Beginners", label: "Principiantes" },
  { key: "Advanced", label: "Avanzado" },
  { key: "Professionals", label: "Profesionales" },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState<"all" | CourseCategory>("all");

  const filteredCourses = activeFilter === "all"
    ? courses
    : courses.filter((c) => c.categories.includes(activeFilter));

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
    <section id="cursos" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            Formaci&oacute;n Continua
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-3xl md:text-5xl text-text-dark mb-6"
          >
            Cursos de Buceo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Mejora tus habilidades y alcanza nuevos niveles con nuestros instructores certificados.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`btn-press px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeFilter === tab.key
                  ? "bg-primary text-bg-white shadow-md"
                  : "bg-gray-100 text-text-dark hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className={`relative bg-bg-white rounded-3xl p-8 border ${
                  course.popular
                    ? "border-primary/50 shadow-[0_10px_40px_rgba(40,116,252,0.1)] scale-100 md:scale-105 z-10"
                    : "border-gray-100 shadow-sm"
                } transition-transform duration-300 hover:-translate-y-2 flex flex-col`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-bg-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    M&aacute;s Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-poppins font-bold text-2xl text-text-dark mb-2">{course.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.categories.map((cat) => (
                      <span
                        key={cat}
                        className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                      >
                        <BookOpen size={14} />
                        {cat === "Beginners"
                          ? "Principiantes"
                          : cat === "Advanced"
                          ? "Avanzado"
                          : "Profesionales"}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 mb-8">
                  <p className="text-text-muted text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-6 p-3 bg-bg-light rounded-xl">
                    <Euro size={20} className="text-secondary" />
                    <span className="font-semibold text-text-dark text-sm">
                      Desde{" "}
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-text-light font-normal"> &euro;</span>
                    </span>
                  </div>

                  <a
                    href="#contacto"
                    className={`btn-press w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition-colors ${
                      course.popular
                        ? "bg-primary text-bg-white hover:bg-blue-700 shadow-md"
                        : "bg-gray-100 text-text-dark hover:bg-gray-200"
                    }`}
                  >
                    M&aacute;s informaci&oacute;n
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
