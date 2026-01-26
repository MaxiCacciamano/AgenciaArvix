import React from 'react'
import { Footer } from '../Footer'
import { Menu } from 'lucide-react'

import {MarqueeContent}  from '../layout/MarqueeContent'

export const Ecommerce = () => {

  return (
        <div className="relative bg-black text-white overflow-x-hidden">
    
          {/* Overlay global de ruido (esto idealmente va en App.jsx) */}
          <div className="noise-overlay" />
    
          <Menu />

          <div className="fixed inset-0 pointer-events-none z-0 flex justify-between container mx-auto px-6 border-x border-brand-border/30">
        <div className="h-full w-px bg-brand-border/30 hidden md:block"></div>

    </div>


    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-brand-border">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 h-full items-center">
                
                <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 border border-brand-lime/30 bg-brand-lime/5 px-3 py-1 mb-8">
                        <div className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></div>
                        <span className="text-brand-lime text-[10px] font-bold uppercase tracking-[0.2em]">Available for new projects</span>
                    </div>

                    <h1 className="font-display font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-white mb-8 tracking-tighter">
                        DIGITAL<br/>
                        COMMERCE<br/>
                        <span className="text-brand-lime italic font-light pl-4">SYSTEMS</span>
                    </h1>
                    
                    <p className="font-sans text-lg text-gray-400 max-w-lg leading-relaxed mb-12 border-l-2 border-brand-lime pl-6">
                        No somos una agencia de marketing. Somos un estudio de ingeniería comercial. Construimos ecommerces que facturan, escalan y dominan el mercado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-0">
                        <a href="#diagnostico" className="group bg-brand-lime text-black px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-3">
                            Cotizar Ahora <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="#proceso" className="group border border-l-0 border-brand-border text-white px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors">
                            Ver Casos
                        </a>
                    </div>
                </div>


                <div className="lg:col-span-4 hidden lg:flex justify-end items-center relative">
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 border border-brand-lime/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <span className="block text-4xl font-display font-bold text-white">45%</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Avg. Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 w-full border-t border-brand-border py-4 bg-brand-black overflow-hidden">
  <div className="relative flex overflow-hidden whitespace-nowrap">
    
    {/* Track 1 */}
    <div className="animate-marquee flex gap-12 items-center min-w-max">
      <MarqueeContent/> 
    </div>

    {/* Track 2 */}
    <div className="animate-marquee flex gap-12 items-center min-w-max absolute left-full top-0">
      <MarqueeContent/>
    </div>

  </div>
</div>
        
{/* <div className="absolute bottom-0 w-full border-t border-brand-border py-4 bg-brand-black overflow-hidden">
  <div className="flex whitespace-nowrap">
    <div className="animate-marquee flex gap-12 items-center w-max">
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Strategy</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Development</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Growth</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Shopify Plus</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">VTEX</span>
                <span className="text-brand-lime text-2xl">★</span>


                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Strategy</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Development</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Growth</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">Shopify Plus</span>
                <span className="text-brand-lime text-2xl">★</span>
                <span className="text-4xl font-display font-bold text-transparent text-stroke uppercase">VTEX</span>
                <span className="text-brand-lime text-2xl">★</span>
            </div>
        </div>
        </div> */}
    </header>


    <section className="py-32 bg-brand-black border-b border-brand-border relative z-10">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <span className="text-brand-lime text-xs font-bold uppercase tracking-widest mb-4 block">Reality Check</span>
                    <h2 className="font-display text-4xl md:text-5xl leading-tight text-white uppercase mb-8">
                        La mayoría de los ecommerces son <span className="line-through decoration-brand-lime decoration-4">lindos</span>. <br/>
                        Los nuestros son <span className="text-brand-lime">rentables</span>.
                    </h2>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                        El mercado argentino está saturado de plantillas genéricas. Nosotros diseñamos para la conversión, optimizando cada milisegundo de carga y cada píxel de la interfaz.
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-brand-border pt-8">
                        <div>
                            <span className="block text-3xl font-display font-bold text-white mb-1">0.8s</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Load Time</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-display font-bold text-white mb-1">98%</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Mobile Retention</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="proyectos" className="border-b border-brand-border bg-brand-black relative z-10">
        <div className="grid md:grid-cols-2">

            <div className="group border-b md:border-b-0 md:border-r border-brand-border relative overflow-hidden aspect-square md:aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"/>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-lime text-xs font-bold uppercase tracking-widest mb-2 block">Fashion Retail</span>
                        <h3 className="font-display text-4xl md:text-5xl text-white uppercase mb-4 leading-none">Moda<br/>Argentina</h3>
                        <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-brand-lime hover:border-brand-lime transition-colors">
                            Ver Caso <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>


            <div className="group border-b border-brand-border relative overflow-hidden aspect-square md:aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1611186871348-648470d230f2?q=80&w=1287&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"/>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-lime text-xs font-bold uppercase tracking-widest mb-2 block">Tech B2B</span>
                        <h3 className="font-display text-4xl md:text-5xl text-white uppercase mb-4 leading-none">Future<br/>Hardware</h3>
                        <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-brand-lime hover:border-brand-lime transition-colors">
                            Ver Caso <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="servicios" className="py-32 bg-brand-black relative z-10">
        <div className="container mx-auto px-6">
            <div className="mb-20">
                <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">Our Expertise</span>
                <h2 className="font-display text-4xl md:text-6xl text-white mt-4 uppercase">Capabilities</h2>
            </div>

            <div className="border-t border-brand-border">

                <div className="group border-b border-brand-border py-12 hover:bg-brand-gray/30 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h3 className="font-display text-3xl md:text-5xl text-gray-500 group-hover:text-white group-hover:pl-4 transition-all duration-300 uppercase">
                            <span className="text-sm align-top text-brand-lime opacity-0 group-hover:opacity-100 mr-2">01</span>
                            Ecommerce Strategy
                        </h3>
                        <i data-lucide="arrow-right" className="text-brand-lime opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-8 h-8 hidden md:block"></i>
                    </div>
                </div>


                <div className="group border-b border-brand-border py-12 hover:bg-brand-gray/30 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h3 className="font-display text-3xl md:text-5xl text-gray-500 group-hover:text-white group-hover:pl-4 transition-all duration-300 uppercase">
                            <span className="text-sm align-top text-brand-lime opacity-0 group-hover:opacity-100 mr-2">02</span>
                            UX/UI Design
                        </h3>
                        <i data-lucide="arrow-right" className="text-brand-lime opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-8 h-8 hidden md:block"></i>
                    </div>
                </div>


                <div className="group border-b border-brand-border py-12 hover:bg-brand-gray/30 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h3 className="font-display text-3xl md:text-5xl text-gray-500 group-hover:text-white group-hover:pl-4 transition-all duration-300 uppercase">
                            <span className="text-sm align-top text-brand-lime opacity-0 group-hover:opacity-100 mr-2">03</span>
                            Custom Development
                        </h3>
                        <i data-lucide="arrow-right" className="text-brand-lime opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-8 h-8 hidden md:block"></i>
                    </div>
                </div>


                <div className="group border-b border-brand-border py-12 hover:bg-brand-gray/30 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h3 className="font-display text-3xl md:text-5xl text-gray-500 group-hover:text-white group-hover:pl-4 transition-all duration-300 uppercase">
                            <span className="text-sm align-top text-brand-lime opacity-0 group-hover:opacity-100 mr-2">04</span>
                            Growth & CRO
                        </h3>
                        <i data-lucide="arrow-right" className="text-brand-lime opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-8 h-8 hidden md:block"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="diagnostico" className="py-32 bg-brand-lime text-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-8 leading-[0.85] tracking-tighter">
                Ready to<br/>Scale?
            </h2>
            <p className="font-sans text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
                Dejá de jugar a la tiendita. Hablemos de negocios serios y estrategias escalables.
            </p>
            <a href="#" className="inline-block bg-black text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300">
                Book a Discovery Call
            </a>
        </div>
        

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </section>
          <Footer/>
        </div>
  )
}
