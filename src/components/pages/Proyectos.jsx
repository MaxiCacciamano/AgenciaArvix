import React from 'react'
import { Menu } from '../Menu'

export const Proyectos = () => {
  return (
    <div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
        <Menu/>

    <div className="noise-overlay"></div>

    <header className="relative pt-40 pb-20 border-b border-brand-border overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Soluciones de Negocio</span>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
                Impacto en<br/><span className="italic text-brand-lime">Negocios.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                    Casos de estudio enfocados en la optimización de procesos corporativos, digitalización de ventas B2B y despliegue de infraestructura tecnológica empresarial.
                </p>
                <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
                    <button className="px-4 py-2 bg-brand-lime text-black">Todos los Negocios</button>
                    <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">Logística</button>
                    <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">Finanzas</button>
                    <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">B2B SaaS</button>
                </div>
            </div>
        </div>
        <div className="absolute -bottom-10 -left-20 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none opacity-50">
            NEGOCIOS
        </div>
    </header>


    <section id="proyectos" className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
                

                <div className="bg-brand-black group project-card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                             alt="Logística y Distribución" 
                             className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
                    </div>
                    <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Supply Chain & Logistics</span>
                                <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Atlas Logística</h3>
                            </div>
                            <span className="text-gray-600 font-display italic text-xl">2024</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
                            Digitalización del sistema de tracking y portal B2B para una flota de 500+ camiones. Reducción de tiempos operativos en un 35%.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
                            Detalles Técnicos <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>

                <div className="bg-brand-black group project-card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                             alt="Consultoría de Negocios" 
                             className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
                    </div>
                    <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Investment Banking</span>
                                <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Prime Equity</h3>
                            </div>
                            <span className="text-gray-600 font-display italic text-xl">2023</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
                            Plataforma de gestión de carteras e informes automatizados para inversores institucionales. Seguridad de grado bancario con UX simplificada.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
                            Detalles Técnicos <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>


                <div className="bg-brand-black group project-card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
                             alt="Oficinas Corporativas" 
                             className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
                    </div>
                    <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Energy & Utilities</span>
                                <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Innova Energy</h3>
                            </div>
                            <span className="text-gray-600 font-display italic text-xl">2023</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
                            Ecosistema digital para venta de excedentes energéticos entre empresas (P2P). Automatización de contratos inteligentes y facturación.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
                            Detalles Técnicos <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>


                <div className="bg-brand-black group project-card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
                             alt="Business Strategy" 
                             className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
                    </div>
                    <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Professional Services</span>
                                <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Global Partners</h3>
                            </div>
                            <span className="text-gray-600 font-display italic text-xl">2024</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
                            Implementación de sistema de prospección automatizada y CRM para firma de consultoría internacional. +50% en conversión de leads.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
                            Detalles Técnicos <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section className="py-24 bg-brand-dark border-y border-brand-border">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                    <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">+$12M</span>
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">Facturación Generada</span>
                </div>
                <div>
                    <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">45%</span>
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">Reducción de Costos Op.</span>
                </div>
                <div>
                    <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">24/7</span>
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">Disponibilidad de Sistemas</span>
                </div>
                <div>
                    <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">98%</span>
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">Cumplimiento de KPI</span>
                </div>
            </div>
        </div>
    </section>


    <section className="py-32 bg-brand-black relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-black uppercase mb-12 tracking-tighter max-w-5xl mx-auto leading-none">
                Transformamos tu infraestructura en una <span className="text-brand-lime italic">máquina de crecimiento.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="index.html#contacto" className="bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                    Solicitar Diagnóstico B2B
                </a>
                <a href="nosotros.html" className="border border-brand-border text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-brand-gray transition-colors">
                    Nuestra Metodología
                </a>
            </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
            <i data-lucide="briefcase" className="w-[500px] h-[500px] text-white"></i>
        </div>
    </section>

    <footer className="bg-brand-black py-12 border-t border-brand-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display font-bold text-xl uppercase text-white">
                AGENCIA<span className="text-brand-lime">.</span>
            </div>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">&copy; 2024 AGENCIA DIGITAL ARGENTINA - MÉTODO VALIDADO.</p>
        </div>
    </footer>
    </div>
  )
}
