import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    
    <>
      {/* --- NAV BAR PRINCIPAL (Siempre visible) --- */}
      <nav
        id="site-nav"
        style={{
          backgroundColor: "#030303", // Fondo oscuro base
          zIndex: 50, // Z-index estándar para la barra
        }}
        className="fixed top-0 w-full border-b border-white/10 h-20 flex items-center"
      >
        <div className="container mx-auto px-6 flex justify-between items-center w-full">

          {/* LOGO */}
          <div className="font-display font-bold text-2xl tracking-tighter uppercase text-white relative z-[50]">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              ARVIX<span className="text-brand-lime">.</span>
            </Link>
          </div>

          {/* MENÚ DESKTOP (Oculto en móvil) */}
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="flex items-center gap-6 px-4 py-2 rounded-md text-[11px] font-bold uppercase tracking-[0.18em] text-gray-200"
              style={{ backgroundColor: "#0b0b0b" }}
            >
              <Link to="/Nosotros" className="hover:text-brand-lime transition-colors">Nosotros</Link>

              {/* Dropdown Servicios Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span className="hover:text-brand-lime transition-colors cursor-pointer py-2">
                  Servicios
                </span>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-[#121212] rounded-md shadow-2xl border border-white/10 overflow-hidden transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link to="/Ecommerce" className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-brand-lime">Ecommerce</Link>
                  <Link to="/Seo" className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-brand-lime">SEO</Link>
                  <Link to="/SEM" className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-brand-lime">SEM</Link>
                  <Link to="/Marketing-Investigación" className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-brand-lime">Investigación</Link>
                </div>
              </div>

              <Link to="/Proyectos" className="hover:text-brand-lime transition-colors">Proyectos</Link>
              <Link to="/Planes" className="hover:text-brand-lime transition-colors">Planes</Link>
              <Link to="/Contacto" className="hover:text-brand-lime transition-colors">Contacto</Link>
            </div>

            <Link to="/Contacto" className="bg-brand-lime text-black px-6 py-2.5 text-[10px] font-black uppercase hover:bg-lime-400 transition-colors">
              Solicitar Diagnóstico
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          {/* Este botón desaparece visualmente cuando el menú se abre porque el menú lo tapa */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-[50]"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="h-[2px] w-6 bg-white block" />
            <span className="h-[2px] w-6 bg-white block" />
            <span className="h-[2px] w-6 bg-white block" />
          </button>
        </div>
      </nav>

      {/* --- MENÚ MOBILE OVERLAY (Capa completa separada) --- */}
      {/* Usamos 'fixed inset-0' y un z-index altísimo (99999) para garantizar que tape TODO */}
      <div
        className={`fixed inset-0 bg-black z-[99999] lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          backgroundColor: "#000000", // Negro puro para máximo contraste
          height: "100dvh" // Altura dinámica para móviles modernos
        }}
      >
        <div className="flex flex-col h-full">

          {/* HEADER DEL MENÚ MÓVIL (Replica la barra de navegación para dar continuidad) */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/15 shrink-0">
            {/* Logo dentro del menú móvil */}
            <Link to="/" onClick={() => setMenuOpen(false)} className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
              ARVIX<span className="text-brand-lime">.</span>
            </Link>

            {/* BOTÓN CERRAR (X) GRANDE Y CLARO */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2 hover:text-brand-lime transition-colors"
              aria-label="Cerrar menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* CONTENIDO SCROLLEABLE */}
          <div className="flex-1 overflow-y-auto py-8 px-8">
            <div className="flex flex-col gap-6 text-base uppercase font-bold tracking-widest text-white">

              <Link to="/Nosotros" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-brand-lime transition-colors">
                Nosotros
              </Link>

              {/* Acordeón de Servicios Móvil */}
              <div className="border-b border-white/10 pb-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between items-center w-full py-2 hover:text-brand-lime transition-colors"
                >
                  <span>Servicios</span>
                  <span className="text-xl text-brand-lime">{servicesOpen ? "−" : "+"}</span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-brand-lime/30 ml-1">
                    <Link to="/Ecommerce" onClick={() => setMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-sm">Ecommerce</Link>
                    <Link to="/Seo" onClick={() => setMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-sm">SEO</Link>
                    <Link to="/SEM" onClick={() => setMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-sm">SEM</Link>
                    <Link to="/Marketing-Investigación" onClick={() => setMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-sm">Investigación</Link>
                  </div>
                </div>
              </div>

              <Link to="/Proyectos" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-brand-lime transition-colors">
                Proyectos
              </Link>

              <Link to="/Planes" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-brand-lime transition-colors">
                Planes
              </Link>

              <Link to="/Contacto" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-brand-lime transition-colors">
                Contacto
              </Link>

              {/* CTA MÓVIL */}
              <div className="pt-6">
                <Link to="/Contacto"
                  aria-label="Solicitar diagnostico por whatsapp"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-brand-lime text-black text-center py-4 font-black text-sm uppercase rounded-sm hover:bg-lime-400 transition-colors"

                >
                  Solicitar Diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};