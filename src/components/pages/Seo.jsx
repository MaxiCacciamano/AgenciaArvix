import React from 'react';
import { Menu } from '../Menu';
import { Footer } from '../Footer';
import { ShieldCheck, ArrowUpRight, ChevronRight, ArrowRight, BarChart3, Globe } from 'lucide-react';

export const Seo = () => {
    return (
        <div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
            <div className="noise-overlay" />
            <Menu />
            <header className="relative pt-40 pb-20 border-b border-brand-border overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                        OPTIMIZACIÓN DE ACTIVOS DIGITALES
                    </span>
                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
                        Ingeniería de<br />
                        <span className="italic text-brand-lime">Visibilidad.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            Más que una simple consultora, operamos como una <strong>SEO Agencia</strong> de alto rendimiento.
                            Diseñamos estrategias de <strong>posicionamiento web</strong> para marcas que no pueden permitirse el anonimato.
                            <br /><br />
                            Si buscas <strong>remodelar tu sitio web</strong> para dominar tu nicho, estás en la unidad de inteligencia correcta.
                        </p>
                        <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
                            <button className="px-4 py-2 bg-brand-lime text-black">Todo</button>
                            <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
                                SEO Técnico
                            </button>
                            {/* Keyword Agregada: SEO Ecommerce */}
                            <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
                                SEO Ecommerce
                            </button>
                            <button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
                                B2B SaaS
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-10 -left-20 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none opacity-50">
                    STRATEGY
                </div>
            </header>

            




            <section id="seo-intelligence" className="py-32 bg-brand-black">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                            ESTRATEGIA DE DOMINIO
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white leading-[0.9]">
                            Search Intelligence <br />
                            <span className="italic text-brand-lime">Unit.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="md:col-span-4 bento-card p-8 md:p-12 relative overflow-hidden group">
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            Dominio de Entidades y Tópicos
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-white mb-6">
                                        SEO para <span className="text-brand-lime">CONVERSIÓN</span>
                                        <br />Y REMODELACIÓN
                                    </h3>
                                    <p className="text-gray-500 text-1xl max-w-md leading-relaxed">
                                        Muchos ofrecen "tráfico". Nosotros ofrecemos <strong>visibilidad con intención de compra</strong>. 
                                        Para <strong>mejorar SEO pagina web</strong> de forma real, inyectamos una arquitectura semántica 
                                        que responde a las consultas reales de tus clientes.
                                    </p>
                                </div>
                                <div className="mt-12 flex gap-4 overflow-hidden flex-wrap">
                                    <div className="bg-brand-gray border border-brand-border px-4 py-3 text-[10px] font-bold text-white uppercase whitespace-nowrap">
                                        INTENT ANALYSIS
                                    </div>
                                    <div className="bg-brand-gray border border-brand-lime/50 px-4 py-3 text-[10px] font-bold text-brand-lime uppercase whitespace-nowrap">
                                        SXO (Search Experience Optimization)
                                    </div>
                                    <div className="bg-brand-gray border border-brand-border px-4 py-3 text-[10px] font-bold text-white uppercase whitespace-nowrap">
                                        ENTITY SEO
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-lime/5 to-transparent pointer-events-none" />
                        </div>

                        <div className="md:col-span-2 bento-card p-8 flex flex-col justify-between group">
                            <BarChart3 className="w-8 h-8 text-brand-lime mb-8" />
                            <div>
                                <h4 className="text-white font-display font-bold text-xl uppercase mb-3">
                                    AUTORIDAD<br />ESCALABLE
                                </h4>
                                <p className="text-gray-500 text-1xl leading-relaxed">
                                    Reducimos el CPC promedio en un 70% al migrar la captura de demanda hacia canales
                                    orgánicos de alta intención.
                                </p>
                            </div>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-3xl font-display font-bold text-brand-lime">7.5x</span>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                    ROI Orgánico
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-3 bento-card p-8 group">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    Core Web Vitals
                                </span>
                                <ShieldCheck className="w-5 h-5 text-brand-lime" />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-white">99</div>
                                    <div className="text-[8px] font-black text-gray-500 uppercase mt-1">Perf</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-white">100</div>
                                    <div className="text-[8px] font-black text-gray-500 uppercase mt-1">SEO</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-display font-bold text-white">95</div>
                                    <div className="text-[8px] font-black text-gray-500 uppercase mt-1">Acc</div>
                                </div>
                            </div>
                            <h4 className="text-white font-display font-bold text-lg uppercase mb-2">
                                AUDITORÍA DE SALUD WEB
                            </h4>
                            <p className="text-gray-500 text-1xl">
                                El SEO moderno es velocidad. Si tu sitio web actual es lento, Google te castiga. Nuestra
                                ingeniería web garantiza una infraestructura técnica impecable.
                            </p>
                        </div>

                        <div className="md:col-span-3 bento-card p-8 relative overflow-hidden group">
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between">
                                    <h4 className="text-white font-display font-bold text-lg uppercase">
                                        Expansión de <br />Mercados
                                    </h4>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full border border-brand-black bg-gray-800 flex items-center justify-center text-[8px] font-bold">
                                            ES
                                        </div>
                                        <div className="w-6 h-6 rounded-full border border-brand-black bg-gray-700 flex items-center justify-center text-[8px] font-bold">
                                            EN
                                        </div>
                                        <div className="w-6 h-6 rounded-full border border-brand-black bg-gray-600 flex items-center justify-center text-[8px] font-bold">
                                            PT
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-end gap-1 h-20">
                                    <div className="graph-bar w-full bg-brand-border h-[20%] group-hover:h-[40%] group-hover:bg-brand-lime transition-all duration-500" />
                                    <div className="graph-bar w-full bg-brand-border h-[35%] group-hover:h-[60%] group-hover:bg-brand-lime transition-all duration-500 delay-75" />
                                    <div className="graph-bar w-full bg-brand-border h-[25%] group-hover:h-[55%] group-hover:bg-brand-lime transition-all duration-500 delay-100" />
                                    <div className="graph-bar w-full bg-brand-border h-[45%] group-hover:h-[80%] group-hover:bg-brand-lime transition-all duration-500 delay-150" />
                                    <div className="graph-bar w-full bg-brand-border h-[60%] group-hover:h-[100%] group-hover:bg-brand-lime transition-all duration-500 delay-200" />
                                    <div className="graph-bar w-full bg-brand-border h-[40%] group-hover:h-[90%] group-hover:bg-brand-lime transition-all duration-500 delay-300" />
                                </div>
                                <p className="text-gray-500 text-1xl uppercase font-bold tracking-widest mt-6">
                                    Crecimiento en Indexación Internacional
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-dark border-y border-brand-border">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                                +300%
                            </span>
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
                                TRÁFICO CUALIFICADO
                            </span>
                        </div>
                        <div>
                            <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                                0.8s
                            </span>
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
                                TIEMPO DE CARGA
                            </span>
                        </div>
                        <div>
                            <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                                Top 3
                            </span>
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
                                POSICIONES CLAVE
                            </span>
                        </div>
                        <div>
                            <span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                                24/7
                            </span>
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
                                CAPTURA DE LEADS
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-brand-black py-20 border-t border-brand-border">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter max-w-4xl mx-auto leading-none">
                        ¿Tu visibilidad actual genera <span className="text-brand-lime italic">negocio real?</span>
                    </h2>
                    <a
                        href="https://wa.me/543532679392?text=Hola%20quiero%20mi%20Auditor%C3%ADa%20de%20Search%20Intelligence"
                        className="inline-flex items-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 mb-20"
                    >
                        Auditoría de Search Intelligence
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </footer>
            <Footer />
        </div>
    );
};

// import React from 'react';
// import { Menu } from '../Menu';
// import { Footer } from '../Footer';
// import { ShieldCheck, ArrowUpRight, ChevronRight, ArrowRight } from 'lucide-react';

// export const Seo = () => {
// 	return (
// 		<div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
// 			<div className="noise-overlay" />
// 			<Menu />
// 			<header className="relative pt-40 pb-20 border-b border-brand-border overflow-hidden">
// 				<div className="container mx-auto px-6 relative z-10">
// 					<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 						OPTIMIZACIÓN DE ACTIVOS DIGITALES
// 					</span>
// 					<h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
// 						Ingeniería de<br />
// 						<span className="italic text-brand-lime">Visibilidad.</span>
// 					</h1>
// 					<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
// 						<p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
// 							Estrategias de posicionamiento web diseñadas para sitios que necesitan dominar su nicho tras
// 							una remodelación técnica.<br />
// 							<br />
// 							Evitamos el estancamiento digital. Si buscas **remodelar tu sitio web** para que finalmente
// 							genere dividendos orgánicos, estás en la unidad de inteligencia correcta.
// 						</p>
// 						<div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
// 							<button className="px-4 py-2 bg-brand-lime text-black">Todo</button>
// 							<button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								SEO Técnico
// 							</button>
// 							<button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								B2B SaaS
// 							</button>
// 							<button className="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								Estratégico
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="absolute -bottom-10 -left-20 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none opacity-50">
// 					STRATEGY
// 				</div>
// 			</header>

// 			<section id="seo-intelligence" className="py-32 bg-brand-black">
// 				<div className="container mx-auto px-6">
// 					<div className="mb-16">
// 						<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
// 							ESTRATEGIA DE DOMINIO
// 						</span>
// 						<h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white leading-[0.9]">
// 							Search Intelligence <br />
// 							<span className="italic text-brand-lime">Unit.</span>
// 						</h2>
// 					</div>

// 					<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
// 						<div className="md:col-span-4 bento-card p-8 md:p-12 relative overflow-hidden group">
// 							<div className="relative z-10 h-full flex flex-col justify-between">
// 								<div>
// 									<div className="flex items-center gap-3 mb-6">
// 										<div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
// 										<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
// 											Domino de Entidades y Tópicos
// 										</span>
// 									</div>
// 									<h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-white mb-6">
// 										SEO para <span className="text-brand-lime">CONVERSIÓN</span>
// 										<br />Y REMODELACIÓN
// 									</h3>
// 									<p className="text-gray-500 text-sm max-w-md leading-relaxed">
// 										Muchos ofrecen "tráfico". Nosotros ofrecemos **visibilidad con intención de
// 										compra**. Al **remodelar tu página web**, inyectamos una arquitectura semántica
// 										que responde a las consultas reales de tus clientes, no a métricas de vanidad.
// 									</p>
// 								</div>
// 								<div className="mt-12 flex gap-4 overflow-hidden">
// 									<div className="bg-brand-gray border border-brand-border px-4 py-3 text-[10px] font-bold text-white uppercase whitespace-nowrap">
// 										INTENT ANALYSIS
// 									</div>
// 									<div className="bg-brand-gray border border-brand-border px-4 py-3 text-[10px] font-bold text-white uppercase whitespace-nowrap">
// 										SEMANTIC HUBS
// 									</div>
// 									<div className="bg-brand-gray border border-brand-border px-4 py-3 text-[10px] font-bold text-white uppercase whitespace-nowrap">
// 										ENTITY SEO
// 									</div>
// 								</div>
// 							</div>

// 							<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-lime/5 to-transparent pointer-events-none" />
// 						</div>

// 						<div className="md:col-span-2 bento-card p-8 flex flex-col justify-between group">
// 							<i data-lucide="trending-up" className="w-8 h-8 text-brand-lime mb-8" />
// 							<div>
// 								<h4 className="text-white font-display font-bold text-xl uppercase mb-3">
// 									AUTORIDAD<br />ESCALABLE
// 								</h4>
// 								<p className="text-gray-500 text-xs leading-relaxed">
// 									Reducimos el CPC promedio en un 70% al migrar la captura de demanda hacia canales
// 									orgánicos de alta intención.
// 								</p>
// 							</div>
// 							<div className="mt-6 flex items-baseline gap-2">
// 								<span className="text-3xl font-display font-bold text-brand-lime">7.5x</span>
// 								<span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
// 									ROI Orgánico
// 								</span>
// 							</div>
// 						</div>

// 						<div className="md:col-span-3 bento-card p-8 group">
// 							<div className="flex justify-between items-start mb-8">
// 								<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
// 									Core Web Vitals
// 								</span>
// 								<ShieldCheck className="w-5 h-5 text-brand-lime" />
// 							</div>
// 							<div className="grid grid-cols-3 gap-4 mb-8">
// 								<div className="text-center">
// 									<div className="text-2xl font-display font-bold text-white">99</div>
// 									<div className="text-[8px] font-black text-gray-500 uppercase mt-1">Perf</div>
// 								</div>
// 								<div className="text-center">
// 									<div className="text-2xl font-display font-bold text-white">100</div>
// 									<div className="text-[8px] font-black text-gray-500 uppercase mt-1">SEO</div>
// 								</div>
// 								<div className="text-center">
// 									<div className="text-2xl font-display font-bold text-white">95</div>
// 									<div className="text-[8px] font-black text-gray-500 uppercase mt-1">Acc</div>
// 								</div>
// 							</div>
// 							<h4 className="text-white font-display font-bold text-lg uppercase mb-2">
// 								AUDITORÍA DE SALUD WEB
// 							</h4>
// 							<p className="text-gray-500 text-xs">
// 								El SEO moderno es velocidad. Si tu sitio web actual es lento, Google te castiga. Nuestra
// 								ingeniería web garantiza una infraestructura técnica impecable.
// 							</p>
// 						</div>

// 						<div className="md:col-span-3 bento-card p-8 relative overflow-hidden group">
// 							<div className="relative z-10 h-full flex flex-col justify-between">
// 								<div className="flex justify-between">
// 									<h4 className="text-white font-display font-bold text-lg uppercase">
// 										Expansión de <br />Mercados
// 									</h4>
// 									<div className="flex -space-x-2">
// 										<div className="w-6 h-6 rounded-full border border-brand-black bg-gray-800 flex items-center justify-center text-[8px] font-bold">
// 											ES
// 										</div>
// 										<div className="w-6 h-6 rounded-full border border-brand-black bg-gray-700 flex items-center justify-center text-[8px] font-bold">
// 											EN
// 										</div>
// 										<div className="w-6 h-6 rounded-full border border-brand-black bg-gray-600 flex items-center justify-center text-[8px] font-bold">
// 											PT
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mt-8 flex items-end gap-1 h-20">
// 									<div className="graph-bar w-full bg-brand-border h-[20%] group-hover:h-[40%] group-hover:bg-brand-lime" />
// 									<div className="graph-bar w-full bg-brand-border h-[35%] group-hover:h-[60%] group-hover:bg-brand-lime" />
// 									<div className="graph-bar w-full bg-brand-border h-[25%] group-hover:h-[55%] group-hover:bg-brand-lime" />
// 									<div className="graph-bar w-full bg-brand-border h-[45%] group-hover:h-[80%] group-hover:bg-brand-lime" />
// 									<div className="graph-bar w-full bg-brand-border h-[60%] group-hover:h-[100%] group-hover:bg-brand-lime" />
// 									<div className="graph-bar w-full bg-brand-border h-[40%] group-hover:h-[90%] group-hover:bg-brand-lime" />
// 								</div>
// 								<p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-6">
// 									Crecimiento en Indexación Internacional
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* <section id="proyectos" className="py-20 bg-brand-black border-t border-brand-border">
//         <div className="container mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
                

//                 <div className="bg-brand-black group project-card overflow-hidden">
//                     <div className="aspect-[16/10] overflow-hidden">
//                         <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
//                              alt="Logística y Distribución" 
//                              className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
//                     </div>
//                     <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
//                         <div className="flex justify-between items-start mb-6">
//                             <div>
//                                 <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Supply Chain & Logistics</span>
//                                 <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Atlas Logística</h3>
//                             </div>
//                             <span className="text-gray-600 font-display italic text-xl">2024</span>
//                         </div>
//                         <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
//                             Digitalización del sistema de tracking y portal B2B para una flota de 500+ camiones. Reducción de tiempos operativos en un 35%.
//                         </p>
//                         <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
//                             Detalles Técnicos <ArrowUpRight className="w-4 h-4" />
//                         </a>
//                     </div>
//                 </div>


//                 <div className="bg-brand-black group project-card overflow-hidden">
//                     <div className="aspect-[16/10] overflow-hidden">
//                         <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
//                              alt="Consultoría de Negocios" 
//                              className="w-full h-full object-cover grayscale transition-all duration-700 project-image"/>
//                     </div>
//                     <div className="p-10 border-t border-brand-border transition-colors duration-500 project-info">
//                         <div className="flex justify-between items-start mb-6">
//                             <div>
//                                 <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Investment Banking</span>
//                                 <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Prime Equity</h3>
//                             </div>
//                             <span className="text-gray-600 font-display italic text-xl">2023</span>
//                         </div>
//                         <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
//                             Plataforma de gestión de carteras e informes automatizados para inversores institucionales. Seguridad de grado bancario con UX simplificada.
//                         </p>
//                         <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
//                             Detalles  <ArrowUpRight className="w-4 h-4" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section> */}

// 			<section className="py-24 bg-brand-dark border-y border-brand-border">
// 				<div className="container mx-auto px-6">
// 					<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
// 						<div>
// 							<span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
// 								+300%
// 							</span>
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
// 								TRÁFICO CUALIFICADO
// 							</span>
// 						</div>
// 						<div>
// 							<span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
// 								0.8s
// 							</span>
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
// 								TIEMPO DE CARGA
// 							</span>
// 						</div>
// 						<div>
// 							<span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
// 								Top 3
// 							</span>
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
// 								POSICIONES CLAVE
// 							</span>
// 						</div>
// 						<div>
// 							<span className="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
// 								24/7
// 							</span>
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">
// 								CAPTURA DE LEADS
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<footer className="bg-brand-black py-20 border-t border-brand-border">
// 				<div className="container mx-auto px-6 text-center">
// 					<h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter max-w-4xl mx-auto leading-none">
// 						¿Tu visibilidad actual genera <span className="text-brand-lime italic">negocio real?</span>
// 					</h2>
// 					<a
// 						href="https://wa.me/543532679392?text=Hola%20quiero%20mi%20Auditor%C3%ADa%20de%20Search%20Intelligence"
// 						className="inline-flex items-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 mb-20"
// 					>
// 						Auditoría de Search Intelligence
// 						<ChevronRight className="w-4 h-4" />
// 					</a>
// 				</div>
// 			</footer>
// 			<Footer />
// 		</div>
// 	);
// };
