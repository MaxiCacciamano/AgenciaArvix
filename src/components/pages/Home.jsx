import React from 'react';
import { Menu } from '../Menu.jsx';
import { Footer } from '../Footer.jsx';
import { Link } from 'react-router-dom';

import { Mail, Search, ArrowRight, ChevronRight, Zap, ShieldCheck, AlertCircle, TrendingDown, Clock,  CheckCircle } from 'lucide-react';

import imghome from '../../../public/img/tienda.png';

export default function Home() {
	return (
<div className="relative w-full min-h-screen bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black overflow-x-hidden font-sans">
            <div className="noise-overlay" />
            <Menu />

            {/* HEADER: Foco en KW Principal "Agencia de Diseño Web" */}
            <header className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden border-b border-brand-border grid-bg ">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl">
                        <div className="inline-flex items-center gap-2 border border-brand-lime/30 bg-brand-lime/5 px-4 py-1.5 mb-10 rounded-full">
                            {/* Microcopy: Refuerza autoridad, pero no es H1 */}
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em]">
                                Líderes en Desarrollo Digital • ARG / LATAM
                            </span>
                        </div>

                        {/* H1: OPTIMIZADO. KW Principal + Modificador Local */}
                        <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-7xl leading-[0.9] text-white mb-10 tracking-tighter uppercase">
                            Agencia de Diseño Web <br className="hidden md:block"/>
                            en Argentina <br className="hidden md:block"/>
                            {/* que<span className="text-brand-lime">diseña ventas.</span> */}
                        </h1>

                        <div className="grid md:grid-cols-0 gap-0 items-center">
                            <div className="md:col-span-6">
                                {/* P: Uso de variantes semánticas (LSI) */}
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
                                    Creamos páginas web profesionales que funcionan como activos financieros. 
                                    Más que una agencia creativa, somos tu socio estratégico en arquitectura digital, 
                                    fusionando <span className="text-white font-medium italic underline decoration-brand-lime">
                                    estética premium y rendimiento técnico</span> para posicionar tu marca sobre la competencia.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                    {/* CTA Principal: Enfocado a la acción general */}
                                    <a
                                        href="https://wa.me/5491123456789?text=Hola%20quiero%20consultar%20por%20el%20diseño%20de%20mi%20sitio%20web"
                                        className="bg-brand-lime text-black px-[4.5rem] py-[1.5rem] font-black uppercase tracking-widest text-sm hover:-translate-y-1 transition-all shadow-[0_10px_30px_-10px_rgba(204,255,0,0.3)] flex items-center justify-center gap-3"
                                    >
                                        Cotizar Desarrollo Web
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Trust Signals con Keywords de Soporte */}
                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-3">
                                        <Search className="w-5 h-5 text-brand-lime" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            Auditoría de Mercado
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-brand-lime" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            Sitios Web Rápidos
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-brand-lime" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            Desarrollo a Medida
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* IMAGEN DECORATIVA (Glow mantenido) */}
                            <div className="hidden md:block md:col-span-10 relative">
                                <div className="absolute -inset-10 bg-brand-lime/10 blur-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOCIAL PROOF / BARRA INFERIOR */}
                <div className="absolute inset-x-0 bottom-0 w-full border-t border-brand-border py-6 bg-brand-black/80 backdrop-blur-sm pointer-events-auto">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-6 opacity-30 grayscale contrast-125">
                            <span className="font-display font-black text-xl italic tracking-tighter">TECHCORP</span>
                            <span className="font-display font-black text-xl italic tracking-tighter">MODA.BA</span>
                            <span className="font-display font-black text-xl italic tracking-tighter">GLOBAL_S</span>
                        </div>
                        <div className="flex items-center gap-4 border-l border-brand-border pl-8">
                             <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-brand-gray border border-brand-border" />
                                <div className="w-8 h-8 rounded-full bg-brand-gray border border-brand-border" />
                            </div>
                            <p className="text-[10px] text-gray-500 uppercase font-bold leading-tight">
                                “La mejor inversión en <br />
                                infraestructura digital.” — <span className="text-white">CEO TechCorp</span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECCIÓN 2: EL PROBLEMA (Intención Informativa) */}
            <section className="py-32 bg-brand-black border-b border-brand-border relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                            Diagnóstico Digital
                        </span>
                        {/* H2: Ataca la intención del usuario buscando soluciones */}
                        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase text-white mb-8 leading-tight">
                            ¿Por qué la mayoría de las <br />
                            <span className="text-brand-lime italic">páginas web fracasan?</span>
                        </h2>
                        <p className="text-gray-500 text-base max-w-2xl mx-auto mb-16">
                            En el mercado actual, tener un "sitio lindo" no es suficiente. Sin una estrategia de 
                            **desarrollo web** orientada a la conversión y una arquitectura técnica sólida, 
                            tu página es invisible para Google.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Tarjetas de problemas - Optimizadas semánticamente */}
                        <div className="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                            <AlertCircle className="w-8 h-8 text-red-500 mb-6" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                Diseño sin Estrategia
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Plantillas genéricas que no reflejan tu marca. Un sitio web profesional debe ser 
                                diseñado pensando en el recorrido de compra de tu cliente.
                            </p>
                        </div>
                        <div className="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                            <TrendingDown className="w-8 h-8 text-red-500 mb-6" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                Mala Experiencia Móvil
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Si tu **página web** no carga rápido y no se ve perfecta en celulares, estás perdiendo tráfico.
                                Priorizamos el desarrollo *mobile-first*.
                            </p>
                        </div>
                        <div className="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                            <Clock className="w-8 h-8 text-red-500 mb-6" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                Código Obsoleto
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Webs lentas hechas con tecnologías antiguas. Usamos stacks modernos (React, Next.js) 
                                que garantizan velocidad y escalabilidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: LA SOLUCIÓN - Keyword Secundaria "Desarrollo de sitios web" */}
            <section id="solucion" className="py-32 bg-brand-gray/20 border-b border-brand-border relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                                La Solución Integral
                            </span>
                            {/* H2: Variación semántica fuerte + Tu Copy de ventas */}
                            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-10 leading-none">
                                Desarrollo de Sitios Web <br />
                                con <span className="text-brand-lime">Ingeniería Comercial.</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                                No solo "hacemos webs". Como **empresa de desarrollo web**, aplicamos un método riguroso.
                                Investigamos a tu competencia y diseñamos una arquitectura de información persuasiva 
                                para asegurar que tu sitio sea tu mejor vendedor 24/7.
                            </p>
                            
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-lime p-1 rounded-sm">
                                        <CheckCircle className="w-3 h-3 text-black" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold uppercase text-xs tracking-wider">
                                            Benchmark Competitivo
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Entendemos qué hacen los líderes de tu nicho para superarlos.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-lime p-1 rounded-sm">
                                        <CheckCircle className="w-3 h-3 text-black" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold uppercase text-xs tracking-wider">
                                            Arquitectura Escalable
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Sitios preparados para escalar: integraciones con CRM, ERP y herramientas de marketing.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-lime p-1 rounded-sm">
                                        <CheckCircle className="w-3 h-3 text-black" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold uppercase text-xs tracking-wider">
                                            Diseño Web Orientado a Resultados
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Creamos interfaces donde la estética está al servicio de la rentabilidad.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="lg:w-1/2 relative">
                             {/* Mismo componente visual de Benchmark */}
                            <div className="aspect-square border border-brand-lime/20 flex items-center justify-center p-12">
                                <div className="w-full h-full border border-brand-border relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-lime/5 group-hover:bg-brand-lime/10 transition-all" />
                                    <div className="p-8">
                                        <span className="block text-[10px] font-bold text-brand-lime uppercase tracking-widest mb-4">
                                            Web Performance Score
                                        </span>
                                        <div className="space-y-4">
                                            <div className="h-2 w-full bg-brand-border rounded" />
                                            <div className="h-2 w-3/4 bg-brand-border rounded" />
                                            <div className="h-2 w-1/2 bg-brand-lime/50 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: FEATURES - Uso de H3 para keywords long-tail */}
            <section className="py-32 bg-brand-black border-b border-brand-border">
                <div className="container mx-auto px-6">
                    {/* H2 Secundario */}
                    <h2 className="font-display text-4xl font-bold text-white uppercase mb-20">
                        Proceso de Diseño de Páginas Web
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-border">
                        {/* Box 1 */}
                        <div className="p-10 border-r border-b lg:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                            <span className="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">
                                01 / Investigación
                            </span>
                            <h3 className="text-xl font-display font-bold uppercase mb-4">Análisis de Mercado</h3>
                            <ul className="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                                <li>• Benchmark competitivo</li>
                                <li>• Buyer Persona</li>
                            </ul>
                        </div>
                        {/* Box 2 */}
                        <div className="p-10 border-r border-b lg:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                            <span className="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">
                                02 / Diseño
                            </span>
                            <h3 className="text-xl font-display font-bold uppercase mb-4">Diseño UI/UX</h3>
                            <ul className="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                                <li>• Interfaces de conversión</li>
                                <li>• Mobile-First nativo</li>
                            </ul>
                        </div>
                        {/* Box 3 */}
                        <div className="p-10 border-r border-b md:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                            <span className="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">
                                03 / Código
                            </span>
                            <h3 className="text-xl font-display font-bold uppercase mb-4">Desarrollo Frontend</h3>
                            <ul className="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                                <li>• React / Next.js</li>
                                <li>• Código Limpio</li>
                            </ul>
                        </div>
                        {/* Box 4 */}
                        <div className="p-10 hover:bg-white hover:text-black transition-all group">
                            <span className="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">
                                04 / Lanzamiento
                            </span>
                            <h3 className="text-xl font-display font-bold uppercase mb-4">Optimización Técnica</h3>
                            <ul className="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                                <li>• Core Web Vitals</li>
                                <li>• Indexación Express</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

			<section className="py-32 bg-brand-gray/10 relative z-10">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12">
						<div className="p-12 border border-brand-border bg-brand-black">
							<h3 className="font-display text-2xl font-bold text-brand-lime uppercase mb-8">
								Sí es para vos si...
							</h3>
							<ul className="space-y-4">
								<li className="flex gap-4 items-center text-sm text-gray-300">
									<i data-lucide="check-circle" className="w-5 h-5 text-brand-lime" />
									Buscás una Agencia de Diseño Web en Argentina que entregue un sistema de ventas, no solo un folleto digital.
								</li>
								<li className="flex gap-4 items-center text-sm text-gray-300">
									<i data-lucide="check-circle" className="w-5 h-5 text-brand-lime" />
									Querés un sitio web con posicionamiento en Google para escalar tu negocio real.
								</li>
								<li className="flex gap-4 items-center text-sm text-gray-300">
									<i data-lucide="check-circle" className="w-5 h-5 text-brand-lime" />
									Entendés que la calidad técnica es la base para impulsar las ventas y la confianza del usuario.
								</li>
							</ul>
						</div>
						<div className="p-12 border border-brand-border bg-brand-black opacity-50">
							<h3 className="font-display text-2xl font-bold text-white uppercase mb-8">
								No es para vos si...
							</h3>
							<ul className="space-y-4">
								<li className="flex gap-4 items-center text-sm text-gray-500">
									<i data-lucide="x-circle" className="w-5 h-5 text-gray-600" />
									Buscás la cotización más barata del mercado sin considerar el retorno de inversión.
								</li>
								<li className="flex gap-4 items-center text-sm text-gray-500">
									<i data-lucide="x-circle" className="w-5 h-5 text-gray-600" />
									No estás dispuesto a dedicar tiempo al análisis estratégico de tu competencia
								</li>
								<li className="flex gap-4 items-center text-sm text-gray-500">
									<i data-lucide="x-circle" className="w-5 h-5 text-gray-600" />
									Solo buscás un "lavado de cara" estético sin una estructura de ingeniería comercial detrás.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="proceso" className="py-32 bg-brand-black border-y border-brand-border relative z-10">
				<div className="container mx-auto px-6">
					<div className="mb-24">
						<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
							El Método
						</span>
						<h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase">
							Siete pasos al Éxito
						</h2>
					</div>

					<div className="space-y-4">
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								01
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Onboarding & Objetivos
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								02
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Benchmark de Competencia
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								03
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Arquitectura de Información
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								04
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Diseño web UX/UI de Alta Fidelidad
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								05
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Desarrollo escalable & QA
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								06
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Lanzamiento & Posicionamiento en buscadores (SEO)
							</h4>
						</div>
						<div className="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
							<span className="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">
								07
							</span>
							<h4 className="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">
								Optimización Post-Lanzamiento (30D)
							</h4>
						</div>
					</div>
				</div>
			</section>

			<section className="py-32 bg-brand-gray/30">
				<div className="container mx-auto px-6">
					<h2 className="font-display text-3xl font-bold text-white uppercase mb-16">
						Pasos Posteriores{' '}
						<span className="text-gray-600 block text-lg font-sans normal-case mt-2">
							Potenciá tu activo una vez lanzado
						</span>
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="p-8 bg-brand-black border border-brand-border">
							<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
								SEO Avanzado
							</h4>
							<p className="text-gray-500 text-xs leading-relaxed">
								Posicionamiento de contenido para tráfico orgánico de largo plazo.
							</p>
						</div>
						<div className="p-8 bg-brand-black border border-brand-border">
							<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
								Google Ads (SEM)
							</h4>
							<p className="text-gray-500 text-xs leading-relaxed">
								Tráfico inmediato y segmentado para productos clave.
							</p>
						</div>
						<div className="p-8 bg-brand-black border border-brand-border">
							<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Branding</h4>
							<p className="text-gray-500 text-xs leading-relaxed">
								Reforzamos tu identidad visual y narrativa para ganar autoridad de marca frente a tus competidores.
							</p>
						</div>
						<div className="p-8 bg-brand-black border border-brand-border">
							<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
								CRO / Optimización
							</h4>
							<p className="text-gray-500 text-xs leading-relaxed">
								Análisis de mapas de calor para maximizar cada dólar invertido.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="paquete" className="py-32 bg-brand-lime text-black relative z-10 overflow-hidden">
				<div className="container mx-auto px-6">
					<div className="bg-black text-white p-12 md:p-20 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-8">
							<i data-lucide="sparkles" className="w-12 h-12 text-brand-lime opacity-20" />
						</div>

						<div className="relative z-10">
							<span className="bg-brand-lime text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-10 inline-block">
								Plan Recomendado
							</span>
							<h2 className="font-display text-4xl md:text-7xl font-black uppercase leading-none mb-10">
								Pack Full:<br />Tienda + Benchmark + 30 Días
							</h2>

							<div className="grid md:grid-cols-2 gap-12 items-end">
								<div>
									<ul className="space-y-4 mb-12">
										<li className="flex gap-3 items-center text-sm font-bold uppercase tracking-wide">
											<i data-lucide="check" className="w-5 h-5 text-brand-lime" /> Diseño 	 Web
											Premium
										</li>
										<li className="flex gap-3 items-center text-sm font-bold uppercase tracking-wide">
											<i data-lucide="check" className="w-5 h-5 text-brand-lime" /> Informe de
											Benchmark (5 Competidores)
										</li>
										<li className="flex gap-3 items-center text-sm font-bold uppercase tracking-wide">
											<i data-lucide="check" className="w-5 h-5 text-brand-lime" /> Setup SEO
											Técnico Avanzado
										</li>
										<li className="flex gap-3 items-center text-sm font-bold uppercase tracking-wide">
											<i data-lucide="check" className="w-5 h-5 text-brand-lime" /> Soporte &
											Optimización Post-Venta
										</li>
									</ul>
									<div className="border-t border-brand-border pt-8">
										<span className="text-xs text-gray-500 uppercase tracking-widest">
											Resultado Esperado
										</span>
										<p className="text-xl font-display font-medium text-brand-lime mt-2 italic">
											Una plataforma de venta validada contra el mercado y lista para escalar.
										</p>
									</div>
								</div>
								<div className="text-right">
									<Link to="/Contacto"
										aria-label="Ir a la página de contacto"
										className="inline-block bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest"
									>
										{/* <a
											href="#contacto"
											className="inline-block bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white transition-all w-full md:w-auto text-center"
										> */}
											Iniciar Ahora
										{/* </a> */}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute -bottom-10 -left-10 text-[20rem] font-black text-black opacity-5 pointer-events-none select-none uppercase">
					PRO
				</div>
			</section>

			<section id="contacto" className="py-32 bg-brand-black relative grid-bg">
				<div className="container mx-auto px-6 text-center">
					<h2 className="font-display text-5xl md:text-9xl font-bold text-white uppercase mb-10 tracking-tighter leading-[0.8]">
						Hagamos un <br />
						<span className="text-brand-lime">Upgrade.</span>
					</h2>
					<p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
						No aceptamos a todos los clientes. Solo a aquellos que ven su web como un negocio y no como un
						costo. ¿Sos uno de ellos?
					</p>
					<div className="flex flex-col md:flex-row justify-center gap-6">
						<a
							href="https://wa.me/5491123456789?text=Hola,%20quiero%20solicitar%20el%20diagnóstico%20sin%20costo"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-brand-lime transition-all flex items-center justify-center gap-3"
						>
							Solicitar Diagnóstico Sin Costo
							<Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
						</a>
					</div>
					<div className="mt-12 flex items-center justify-center gap-2 opacity-40">
						<div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
						<span className="text-[10px] font-bold uppercase tracking-widest text-white">
							Método validado por expertos argentinos
						</span>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
