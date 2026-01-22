import React from 'react'
import { Proyectos } from './pages/Proyectos'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-brand-black/90 backdrop-blur-xl border-b border-brand-border">
          <div className="container mx-auto px-6 h-20 flex justify-between items-center">
              <div className="font-display font-bold text-2xl tracking-tighter uppercase">
                  AGENCIA<span className="text-brand-lime">.</span>
              </div>
              <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  <a href="#solucion" className="hover:text-brand-lime transition-colors">Método</a>
                  <a href="#proceso" className="hover:text-brand-lime transition-colors">Proceso</a>
                  <a href="#paquete" className="hover:text-brand-lime transition-colors text-brand-lime/80">Pack Premium</a>
              </div>
              <a href="#contacto" className="bg-brand-lime text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
                  Solicitar Diagnóstico
              </a>
          </div>
      </nav>
    </>
  )
}
