"use client";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";
import { useEffect, useState } from "react";
// Importamos los componentes necesarios de Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
  "/": { name: "About me" },
  "/experience": { name: "Resume" },
  "/blog": { name: "Blog" },
  "/gallery": { name: "Gallery" },
  // "/photos": { name: "Photos" },
  "/contact": { name: "Contact" },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Función de limpieza para reestablecer el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Definimos las animaciones para el menú móvil y sus ítems
  const menuVariants = {
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, transition: { duration: 0.2, when: "beforeChildren" } },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Aplica un retraso escalonado a los hijos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled 
            ? "bg-white dark:bg-neutral-900 shadow-sm" 
            : "bg-transparent"
        }`}
        style={{
          transition: isScrolled ? 'none' : 'all 0.3s ease'
        }}
      >
        <div className="max-w-[624px] mx-auto px-6 sm:px-4 md:px-6">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="text-2xl font-semibold leading-none">
              {metaData.title}
            </Link>

            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative whitespace-nowrap"
                >
                  {name}
                </Link>
              ))}
              <ThemeSwitch />
            </div>

            {/* Botón y Theme Switch para móvil */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeSwitch />
                             <button
                 onClick={toggleMobileMenu}
                 className="p-2 rounded-lg z-50" // Elevamos el z-index para que esté por encima del menú
                 aria-label="Toggle mobile menu"
               >
                 <div className="w-6 h-8 flex flex-col justify-center items-center relative">
                   <motion.span
                     className="block w-5 h-0.5 bg-current absolute"
                     animate={{
                       rotate: isMobileMenuOpen ? 45 : 0,
                       y: isMobileMenuOpen ? 0 : -6,
                     }}
                     transition={{ duration: 0.3 }}
                   />
                   <motion.span
                     className="block w-5 h-0.5 bg-current absolute"
                     animate={{ 
                       opacity: isMobileMenuOpen ? 0 : 1,
                       y: isMobileMenuOpen ? 0 : 0
                     }}
                     transition={{ duration: 0.2 }}
                   />
                   <motion.span
                     className="block w-5 h-0.5 bg-current absolute"
                     animate={{
                       rotate: isMobileMenuOpen ? -45 : 0,
                       y: isMobileMenuOpen ? 0 : 6,
                     }}
                     transition={{ duration: 0.3 }}
                   />
                 </div>
               </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menú Overlay para Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={listVariants}
            >
              {Object.entries(navItems).map(([path, { name }]) => (
                <motion.div key={path} variants={itemVariants}>
                  <Link
                    href={path}
                    onClick={toggleMobileMenu} // Cierra el menú al hacer clic
                    className="group relative text-2xl font-light tracking-wide transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                  >
                    <span className="relative">
                      {name}
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-neutral-400 dark:bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}