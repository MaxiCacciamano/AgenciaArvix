import React, { useState } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-brand-black/90 backdrop-blur-xl border-b border-brand-border">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">

        <div className="font-display font-bold text-2xl tracking-tighter uppercase">
          AGENCIA<span className="text-brand-lime">.</span>
        </div>

        {/* MENÚ */}
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">

          <a href="#solucion">Nosotros</a>

          {/* ITEM CON SUBMENÚ */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-brand-lime transition-colors"
            >
              Servicios
            </button>

            {/* SUBMENÚ */}
            <div
              className={`absolute top-full left-0 mt-4 w-40 bg-brand-black border border-brand-border overflow-hidden transition-all duration-300
              ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <a className="block px-4 py-2 hover:text-brand-lime">Ecommerce</a>
              <a className="block px-4 py-2 hover:text-brand-lime">SEO</a>
              <a className="block px-4 py-2 hover:text-brand-lime">SEM</a>
            </div>
          </div>

          <a href="#paquete">Proyectos</a>
          <a href="#paquete">Planes</a>
          <a href="#paquete">Contacto</a>
        </div>

        <a className="bg-brand-lime text-black px-6 py-2.5 text-[10px] font-black uppercase">
          Solicitar Diagnóstico
        </a>

      </div>
    </nav>
  );
};
