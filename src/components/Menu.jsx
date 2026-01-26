import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-brand-black/90 backdrop-blur-xl border-b border-brand-border">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">

        <div className="font-display font-bold text-2xl tracking-tighter uppercase">
          <Link to="/">
          ARVIX<span className="text-brand-lime">.</span>
          </Link>
        </div>

        {/* MENÚ */}
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">

          <Link to="/Nosotros"><a href="#solucion" className="hover:text-brand-lime transition-colors cursor-pointer">Nosotros</a></Link>

          {/* ITEM CON SUBMENÚ */}
          <div className="relative">
            <a
              onClick={() => setOpen(!open)}
              className="hover:text-brand-lime transition-colors cursor-pointer"
            >
              Servicios
            </a>

            {/* SUBMENÚ */}
            <div
              className={`absolute top-full left-0 mt-4 w-40 bg-brand-black border border-brand-border overflow-hidden transition-all duration-300
              ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <Link to="/Ecommerce"><a className="block px-4 py-2 hover:text-brand-lime transition-colors cursor-pointer">Ecommerce</a></Link>
              <Link to="/Seo"><a className="block px-4 py-2 hover:text-brand-lime transition-colors cursor-pointer">SEO</a></Link>
              <Link to="/SEM"><a className="block px-4 py-2 hover:text-brand-lime transition-colors cursor-pointer">SEM</a></Link>
              <Link to="/Marketing-Investigación"><a className="block px-4 py-2 hover:text-brand-lime transition-colors cursor-pointer">Investigación de mercado</a></Link>
            </div>
          </div>

          <Link to="/Proyectos">
          <a href="#paquete" className="hover:text-brand-lime transition-colors cursor-pointer">Proyectos</a>
          </Link>
          <a href="#paquete" className="hover:text-brand-lime transition-colors cursor-pointer">Planes</a>
          <Link to="/Contacto"><a href="#paquete" className="hover:text-brand-lime transition-colors cursor-pointer">Contacto</a></Link>
        </div>

        <Link to="/Contacto">
        <a className="bg-brand-lime text-black px-6 py-2.5 text-[10px] font-black uppercase">
          Solicitar Diagnóstico
        </a>
        </Link>

      </div>
    </nav>
  );
};
