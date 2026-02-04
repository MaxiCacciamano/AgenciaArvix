import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer Name="bg-brand-black pt-24 pb-12 border-t border-brand-border">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-sm">
                        <div className="font-display font-bold text-xl tracking-tighter uppercase text-white mb-6">
                            {/* "font-display font-bold text-xl uppercase text-white" */}
                            ARVIX<span className="text-brand-lime">.</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Desarrollo web estratégico desde Cordoba Argentina para todo el mundo. Especialistas en convertir tráfico en activos financieros.
                        </p>
                        <br />
                        <p>Cordoba, Argentina</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        <div>
                            <span className="block text-white font-bold uppercase text-[10px] tracking-widest mb-6">Navegación</span>
                            <ul className="space-y-4 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                                <li><Link to="/" className="hover:text-brand-lime transition-colors">Inicio</Link></li>
                                <li><Link to="/Nosotros" className="hover:text-brand-lime transition-colors">Nosotros</Link></li>
                                <li><Link to="/Servicios" className="hover:text-brand-lime transition-colors">Servicios</Link></li>
                                <li><Link to="/Proyectos" className="hover:text-brand-lime transition-colors">Proyectos</Link></li>
                                <li><Link to="/Planes" className="hover:text-brand-lime transition-colors">Planes</Link></li>
                                <li><Link to="/Contacto" className="hover:text-brand-lime transition-colors">Contacto</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="block text-white font-bold uppercase text-[10px] tracking-widest mb-6">Legal</span>
                            <ul className="space-y-4 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                                <li><a href="#" className="hover:text-brand-lime">Privacy</a></li>
                                <li><a href="#" className="hover:text-brand-lime">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 border-t border-brand-border pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">&copy; 2025 AGENCIA DIGITAL ARGENTINA - ALL RIGHTS RESERVED.</span>
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] flex items-center gap-2">MADE IN ARVIX <span class="text-brand-lime">★</span> SIN HUMO.</span>
                </div>
            </div>
        </footer>
    )
}