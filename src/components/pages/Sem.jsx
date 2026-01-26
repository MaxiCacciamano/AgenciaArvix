import React from 'react';
import { Menu } from '../Menu';
import { Footer } from '../Footer';

import { Target, Zap, Database, ChevronRight } from 'lucide-react';

export const Sem = () => {
	return (
		<div className="bg-brand-black text-brand-white antialiased font-sans">
			<div className="noise-overlay" />

			<Menu />
			<section className="relative pt-44 pb-32 overflow-hidden border-b border-brand-border">
				<div className="absolute inset-0 opacity-[0.03] pointer-events-none">
					<div
						className="w-full h-full"
						style={{
							backgroundImage:
								'repeating-linear-gradient:(0deg, #fff, #fff 1px, transparent 1px, transparent 40px) repeating-linear-gradient:(90deg, #fff, #fff 1px, transparent 1px, transparent 40px)'
						}}
					/>
				</div>

				<div className="container mx-auto px-6 lg:px-12 relative z-10">
					<div className="max-w-5xl">
						<div className="flex items-center gap-4 mb-10">
							<div className="px-3 py-1 bg-brand-lime/10 border border-brand-lime/30 rounded-full">
								<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75" />
										<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime" />
									</span>
									Live Campaign Matrix
								</span>
							</div>
						</div>

						<h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[110px] leading-[0.85] uppercase tracking-tighter mb-10">
							Dominamos la <br />
							<span className="text-brand-lime italic">intención.</span> <br />
							<span className="text-outline">Escalamos el</span> <span className="relative">ROI.</span>
						</h1>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
							<p className="text-xl text-gray-400 font-light leading-relaxed border-l border-brand-lime pl-8">
								Deje de perseguir algoritmos y empiece a capturar demanda. Diseñamos ecosistemas de{' '}
								<span className="text-white font-medium italic">posicionamiento digital</span> donde la
								pauta paga y el crecimiento orgánico se fusionan en una transacción en potencia.
							</p>
							<div className="flex flex-wrap gap-4">
								<a
									href="#cta"
									className="bg-white text-black px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-brand-lime transition-colors"
								>
									Solicitar Plan Maestro
								</a>
								<div className="text-[10px] text-gray-500 uppercase flex flex-col justify-center">
									<span>Promedio de Incremento ROI</span>
									<span className="text-brand-lime font-bold text-lg">+340%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="py-24 border-b border-brand-border">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
						<div className="max-w-xl">
							<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.5em] block mb-4">
								Core Capabilities
							</span>
							<h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-none">
								INGENIERÍA EN <br/> BÚSQUEDA PAGADA
							</h2>
						</div>
						<div className="text-gray-500 font-mono text-sm max-w-xs">
							[01] Smart Bidding Estratégico <br />
							[02] Keyword Mining de Alta Intención <br />
							[03] Gestión de Google Ads de Precisión
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-border">
						<div className="p-10 border-b md:border-b-0 md:border-r border-brand-border transition-all hover:bg-zinc-950 group">
							<div className="text-brand-lime mb-8 group-hover:scale-110 transition-transform origin-left">
								<Target className="w-10 h-10" />
							</div>

							<h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight">
								ESTRATEGIA SEARCH ADS
							</h3>

							<p className="text-gray-400 text-sm leading-relaxed mb-8">
								Dominio total de Google Search. Identificamos términos con alta intención de compra y optimizamos cada centavo para maximizar el ROAS.
							</p>

							<ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									GESTIÓN DE GOOGLE SEARCH ADS
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									OPTIMIZACIÓN DE QUALITY SCORE
								</li>
							</ul>
						</div>

						<div className="p-10 border-b md:border-b-0 md:border-r border-brand-border transition-all hover:bg-zinc-950 group">
							<div className="text-brand-lime mb-8 group-hover:scale-110 transition-transform origin-left">
								<Zap className="w-10 h-10" />
							</div>

							<h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight">
								PERFORMANCE & CRO
							</h3>

							<p className="text-gray-400 text-sm leading-relaxed mb-8">
								El click es el inicio. Optimizamos sus Landing Pages para 
                                asegurar que el tráfico pagado se convierta en clientes potenciales de alta calidad.
							</p>

							<ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									LPO (LANDING PAGE OPTIMIZATION)
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									A/B TESTING DE ANUNCIOS
								</li>
							</ul>
						</div>

						<div className="p-10 transition-all hover:bg-zinc-950 group">
							<div className="text-brand-lime mb-8 group-hover:scale-110 transition-transform origin-left">
								<Database className="w-10 h-10" />
							</div>

							<h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight">
								ANÁLISIS DE RETORNO
							</h3>

							<p className="text-gray-400 text-sm leading-relaxed mb-8">
								Medición rigurosa de conversiones. Atribuimos cada dólar invertido a ingresos reales, eliminando el desperdicio en palabras irrelevantes.
							</p>

							<ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									TRACKING DE CONVERSIONES AVANZADO
								</li>
								<li className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-brand-lime" />
									AUDITORÍA DE INVERSIÓN SEM
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="stack" className="py-24 bg-brand-gray relative">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-display font-bold uppercase tracking-tighter">
							Nuestro Centro de Operaciones
						</h2>
						<p className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">
							NUESTRAS PLATAFORMAS DE COMBATE
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
						<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
							<span className="text-2xl font-black uppercase tracking-tighter">Google Ads</span>
						</div>
						<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
							<span className="text-2xl font-black uppercase tracking-tighter">Analytics 4</span>
						</div>
						<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
							<span className="text-2xl font-black uppercase tracking-tighter">SEMRUSH IQ</span>
						</div>
						<div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
							<span className="text-2xl font-black uppercase tracking-tighter">Meta Ads</span>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 border-y border-brand-border">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
						<div>
							<h2 className="text-5xl font-display font-bold uppercase leading-none mb-12">
								El Algoritmo de <br />
								<span className="text-brand-lime">Éxito Matrix</span>
							</h2>
							<div className="space-y-12">
								<div className="relative pl-16">
									<span className="absolute left-0 top-0 text-5xl font-display font-black text-brand-border">
										01
									</span>
									<h4 className="text-xl font-bold uppercase mb-2">MINERÍA DE KEYWORDS SEM</h4>
									<p className="text-gray-400 text-sm">
										Extraemos los términos exactos que sus clientes usan cuando están listos para comprar, ignorando el tráfico basura.
									</p>
								</div>
								<div className="relative pl-16">
									<span className="absolute left-0 top-0 text-5xl font-display font-black text-brand-border">
										02
									</span>
									<h4 className="text-xl font-bold uppercase mb-2">INGENIERÍA DE COPY & OFERTA</h4>
									<p className="text-gray-400 text-sm">
										Desarrollamos anuncios que detienen el scroll y obligan al click mediante gatillos mentales de alta performance.
									</p>
								</div>
								<div className="relative pl-16">
									<span className="absolute left-0 top-0 text-5xl font-display font-black text-brand-border">
										03
									</span>
									<h4 className="text-xl font-bold uppercase mb-2">ESCALADO DE BIDDING INTELIGENTE</h4>
									<p className="text-gray-400 text-sm">
										Ajustamos sus pujas en tiempo real para dominar la primera posición cuando la rentabilidad está asegurada.
									</p>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-zinc-900 border border-brand-border flex items-center justify-center p-12 group overflow-hidden">
								<div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity" />
								<div className="relative z-10 text-center">
									<div className="text-[80px] font-display font-black text-brand-lime leading-none">
										94%
									</div>
									<div className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-500 mt-4">
										Tasa de Retención de Clientes
									</div>
									<div className="mt-8 h-1 w-full bg-brand-border overflow-hidden">
										<div className="h-full bg-brand-lime w-[94%]" />
									</div>
								</div>

								<div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-700">
									SYS_LOG: OPTIMIZING...
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="cta" className="py-32 relative overflow-hidden">
				<div className="container mx-auto px-6 text-center relative z-10">
					<h2 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tighter uppercase mb-10">
						¿Tu pauta es una <br />inversión o un <span class="italic text-brand-lime">gasto?</span>
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
						No aceptamos a todos los clientes. Solo trabajamos con marcas listas para escalar su facturación
						mediante ingeniería de datos y performance agresiva.
					</p>
					<div className="flex flex-col items-center gap-6">
						<button className="bg-brand-lime text-black px-12 py-6 font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
							Agendar Consultoría Estratégica
							<ChevronRight className="w-5 h-5" />
						</button>
						<span className="text-[10px] text-gray-600 uppercase font-mono tracking-widest italic">
							Cupos limitados para el Q1 2024
						</span>
					</div>
				</div>

				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] bg-brand-lime/5 blur-[120px] rounded-[100%] pointer-events-none" />
			</section>
			<Footer />
		</div>
	);
};
