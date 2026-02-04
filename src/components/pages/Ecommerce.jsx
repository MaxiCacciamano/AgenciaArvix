import React from 'react'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import { useEffect } from 'react'


import { MarqueeContent } from '../layout/MarqueeContent'
import { ChevronRight } from 'lucide-react';

export const Ecommerce = () => {

    useEffect(() => {

        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desarrollo y Rediseño de Ecommerce",
            "description": "Creamos y optimizamos tiendas online para aumentar ventas.",
            "areaServed": {
                "@type": "Country",
                "name": "Argentina"
            },
            "provider": {
                "@type": "Organization",
                "name": "Arvix"
            }
        }

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Cuánto tiempo lleva remodelar una tienda online?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Una remodelación profesional suele tomar entre 4 y 8 semanas desde la auditoría hasta el lanzamiento."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Se pierden las posiciones en Google al rediseñar una tienda?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Implementamos redirecciones 301 y mantenemos la estructura SEO para mejorar el posicionamiento."
                    }
                }
            ]
        }

        const addSchema = (schema, id) => {
            if (document.getElementById(id)) return

            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.text = JSON.stringify(schema)
            script.id = id
            document.head.appendChild(script)
        }

        addSchema(serviceSchema, 'schema-service')
        addSchema(faqSchema, 'schema-faq')

        return () => {
            document.getElementById('schema-service')?.remove()
            document.getElementById('schema-faq')?.remove()
        }
    }, [])


    return (
        <div className="relative bg-black text-white overflow-x-hidden">

            {/* Overlay global de ruido (esto idealmente va en App.jsx) */}
            <div className="noise-overlay" />

            <Menu />

            <div className="fixed inset-0 pointer-events-none z-0 flex justify-between container mx-auto px-6 border-x border-brand-border/30">
                <div className="h-full w-px bg-brand-border/30 hidden md:block"></div>

            </div>


            <header className="relative pt-40 pb-20 border-b border-brand-border grid-bg">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl">
                        <span className="inline-block text-brand-lime px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Ecommerce de Próxima Generación</span>
                        <h1 className="font-display font-bold uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                            Desarrollo de <span className="text-brand-lime font-semibold italic">tiendas online</span> en Argentina que venden más
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-12">
                            Diseñamos y desarrollamos ecommerce profesionales en Argentina, optimizados para velocidad, SEO y conversión.
                            Trabajamos con Shopify, WooCommerce, Tiendanube y soluciones a medida para marcas que buscan escalar ventas.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="inline-flex gap-3 bg-brand-lime text-black px-8 py-5 font-bold uppercase text-xs tracking-widest hover:-translate-y-1 hover:bg-brand-lime transition-all">Hablar con un especialista <ChevronRight className="w-4 h-4" /></a>
                            <a className="border border-brand-border text-white px-8 py-5 font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all">Quiero mejorar mi tienda</a>
                        </div>
                    </div>
                </div>
            </header>


            <section id="remodelacion" className="py-24 border-b border-brand-border bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className=" text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                                ¿Tu tienda online actual <span className="text-brand-lime italic">te está frenando?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                  Muchas tiendas online pierden ventas por tiempos de carga altos, mala experiencia en celulares o procesos de
                                  compra poco optimizados. Realizamos una auditoría técnica y comercial completa para detectar los puntos críticos
                                  y transformar tu ecommerce en un canal de ventas eficiente y escalable.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-brand-lime/10 flex items-center justify-center border border-brand-lime/30 text-brand-lime mt-1">
                                        <i data-lucide="zap" className="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm">Migración Sin Pérdida de Datos</h4>
                                        <p className="text-xs text-gray-500 uppercase mt-1 tracking-wider">De WooCommerce a Shopify Plus o VTEX sin perder SEO ni historial.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-brand-lime/10 flex items-center justify-center border border-brand-lime/30 text-brand-lime mt-1">
                                        <i data-lucide="refresh-cw" className="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm">Modernización de UI/UX</h4>
                                        <p className="text-xs text-gray-500 uppercase mt-1 tracking-wider">Diseño basado en datos para bajar la tasa de rebote y subir el ticket promedio.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="relative bg-brand-black border border-brand-border p-4 rounded shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-mono text-gray-500 uppercase">Análisis de Performance Post-Rediseño</span>
                                <div className="h-2 w-2 rounded-full bg-brand-lime animate-pulse"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs border-b border-brand-border pb-2">
                                    <span>Velocidad de Carga</span>
                                    <span className="text-brand-lime font-bold">4.2s → 0.9s</span>
                                </div>
                                <div className="flex justify-between text-xs border-b border-brand-border pb-2">
                                    <span>Conversión (CR)</span>
                                    <span className="text-brand-lime font-bold">+156% Growth</span>
                                </div>
                                <div className="flex justify-between text-xs border-b border-brand-border pb-2">
                                    <span>Abandono Carrito</span>
                                    <span className="text-brand-lime font-bold">-45% Drop</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-brand-gray/50 border border-brand-lime/20 text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">Optimizado para Core Web Vitals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="soluciones" className="py-24 bg-brand-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-brand-lime text-[10px] font-bold uppercase tracking-[0.4em]">Modelos de Negocio</span>
                        <h2 className=" text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4">
                           Soluciones de <span className="text-brand-lime">desarrollo ecommerce</span> a medida
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="border border-brand-border p-8 hover:border-brand-lime transition-all group flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-2xl font-bold uppercase mb-4">Start-Up Pack</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">  Para marcas que están dando sus primeros pasos y quieren lanzar bien desde el día uno.
                                Te armamos una tienda sólida, lista para vender y crecer sin dolores de cabeza.</p>
                                <ul className="text-[10px] uppercase font-bold tracking-widest space-y-3 text-gray-400">
                                    <li>● Setup de Plataforma</li>
                                    <li>● Pasarelas de Pago</li>
                                    <li>● Responsive Design</li>
                                </ul>
                            </div>
                            <button className="mt-12 w-full border border-brand-border py-4 text-[10px] font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">Seleccionar</button>
                        </div>

                        <div className="border-2 border-brand-lime p-10 relative bg-brand-gray/20 flex flex-col justify-between">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-lime text-black px-4 py-1 text-[9px] font-black uppercase">Más Solicitado</div>
                            <div>
                                <h3 className="font-display text-3xl font-bold uppercase mb-4">Professional <br /> Redesign</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">  Si tu tienda ya vende pero sentís que podría rendir mucho más, este es el siguiente nivel.
                                 Rediseñamos la experiencia, optimizamos el rendimiento y ajustamos cada paso del proceso de compra.</p>
                                <ul className="text-[10px] uppercase font-bold tracking-widest space-y-3 text-brand-lime">
                                    <li>● Auditoría UX Profunda</li>
                                    <li>● Migración de Catálogo</li>
                                    <li>● Integración ERP/CRM</li>
                                    <li>● CRO Avanzado</li>
                                </ul>
                            </div>
                            <button className="mt-12 w-full bg-brand-lime text-black py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">Comenzar Ahora</button>
                        </div>

                        <div className="border border-brand-border p-8 hover:border-brand-lime transition-all group flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold uppercase mb-4">Enterprise <br /> Ecosystem</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">  Soluciones pensadas para operaciones complejas, múltiples canales y grandes volúmenes de venta.
                                Arquitecturas flexibles, integraciones avanzadas y desarrollos totalmente personalizados.</p>
                                <ul className="text-[10px] uppercase font-bold tracking-widest space-y-3 text-gray-400">
                                    <li>● Infraestructura Headless</li>
                                    <li>● B2B & B2C Modules</li>
                                    <li>● Custom Checkout</li>
                                </ul>
                            </div>
                            <button className="mt-12 w-full border border-brand-border py-4 text-[10px] font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">Consultar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-brand-border">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-bold uppercase mb-12 text-center">Dudas <span className="text-brand-lime">Frecuentes</span></h2>
                    <div className="space-y-4">
                        <div className="border border-brand-border p-6 hover:bg-white/5 transition-all cursor-pointer">
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-2">¿Cuánto tiempo lleva remodelar una tienda online?</h4>
                            <p className="text-gray-500 text-sm">Depende de la complejidad, pero una remodelación profesional suele tomar entre 4 y 8 semanas desde la auditoría hasta el lanzamiento.</p>
                        </div>
                        <div className="border border-brand-border p-6 hover:bg-white/5 transition-all cursor-pointer">
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-2">¿Se pierden mis posiciones en Google al rediseñar?</h4>
                            <p className="text-gray-500 text-sm">No si se hace bien. Implementamos redirecciones 301 y mantenemos la estructura de metadatos para que tu SEO incluso mejore por la velocidad.</p>
                        </div>
                        <div className="border border-brand-border p-6 hover:bg-white/5 transition-all cursor-pointer">
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-2">¿Trabajan con integraciones de stock locales?</h4>
                            <p className="text-gray-500 text-sm">Sí. Somos expertos en conectar tiendas online con sistemas de gestión (ERP) locales en Argentina y la región.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
