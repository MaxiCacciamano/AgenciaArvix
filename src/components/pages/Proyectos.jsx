import React from 'react';
import { Menu } from '../Menu.jsx';
import { Footer } from '../Footer.jsx';

import Coope from '../../../public/img/Coope.png';
import Cuaderno from '../../../public/img/Cuaderno.webp';
import Sio from '../../../public/img/Sio.png';
import Burgerland from '../../../public/img/Burgerland.png';

import { ArrowUpRight, ChevronRight, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Proyectos = () => {
	return (
		<div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
			<div className="noise-overlay" />
			<Menu />
			<header class="relative pt-40 pb-20 border-b border-brand-border overflow-hidden">
				<div class="container mx-auto px-6 relative z-10">
					<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
						Agencia de Diseño Web en Argentina
					</span>
					{/* H1 Optimizado con keywords principales */}
					<h1 class="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
						Diseño Web<br />
						<span class="italic text-brand-lime">& Páginas Web.</span>
					</h1>
					<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
						<p class="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
							Especialistas en <span className="text-white font-medium italic">diseño web para</span>{' '}
							empresas nacionales. Creamos{' '}
							<span className="text-white font-medium italic">páginas web para ventas</span>
							con tecnología de punta y visión estratégica desde{' '}
							<span className="text-white font-medium italic">Argentina</span> y para el extrior.
						</p>
						<div class="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
							<button class="px-4 py-2 bg-brand-lime text-[12px] text-black">
								Proyectos de Diseño Web
							</button>
							<button class="px-4 py-2 border border-brand-border text-[12px] text-gray-400 hover:border-brand-lime transition-colors">
								E-commerce
							</button>
							<button class="px-5 py-2 border border-brand-border text-[12px] text-gray-400 hover:border-brand-lime transition-colors">
								B2B SaaS
							</button>
						</div>
					</div>
				</div>
				{/* Texto decorativo optimizado para SEO semántico */}
				<div class="absolute -bottom-10 -left-20 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none opacity-50">
					WEB DESIGN
				</div>
			</header>

			<section id="proyectos" class="py-20 bg-brand-black">
				<div class="container mx-auto px-6">
					{/* Subtítulo con keyword secundaria */}
					<h2 className="text-brand-lime text-[10px] font-black uppercase tracking-widest mb-10">
						Portafolio de Diseño Web Argentina
					</h2>

					<div class="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
						{/* Proyecto 1 */}
						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={Coope}
									alt="Diseño web para Cooperativa Colonia Tirolesa en Argentina"
									class="w-[100%] h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Infraestructura Digital
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Cooperativa Colonia Tirolesa
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-1xl mb-8 leading-relaxed max-w-md">
									<span className="text-white font-medium italic">Diseño de página web</span>{' '}
									institucional con automatización de servicios y gestión de datos en tiempo real.
								</p>
								<a
									href="https://cooptirolesa.com.ar"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles del Diseño <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						{/* Proyecto 2 - Ecommerce/Ventas */}
						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={Sio}
									alt="Diseño tienda online SIO Water - Página web para ventas"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Diseño Tienda Online
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											SIO Water
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-1xl mb-8 leading-relaxed max-w-md">
									Estrategia de{' '}
									<span className="text-white font-medium italic">diseño web para ventas</span> de
									consumo masivo, optimizando la conversión y el flujo de pedidos.
								</p>
								<a
									href="#"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles del Diseño <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						{/* Proyecto 3 - Landing/Ventas */}
						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={Burgerland}
									alt="Diseño web para gastronomía - Burgerland Argentina"
									class="w-[100%] h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Web Diseño Gastronómico
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Burgerland
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-1xl mb-8 leading-relaxed max-w-md">
									Desarrollo de <span className="text-white font-medium italic">
										páginas web
									</span>{' '}
									para el sector gastronómico con foco en la experiencia del usuario (UX).
								</p>
								<a
									href="#"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles del Diseño <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						{/* Web psicologo */}

						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={Cuaderno}
									alt="Consultoría de Psicologia"
									class="w-full h-full object-contain grayscale bg-black transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Psicologia
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Dr. Martin Reyes
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Asesoramiento y acompañamiento legal especializado en adolescentes, con un enfoque
									humano, confidencial y respetuoso, orientado a proteger derechos y brindar
									contención en situaciones sensibles.
								</p>
								<a
									href="https://darkgray-caterpillar-731904.hostingersite.com"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles del Diseño <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>
					</div>

					<Link to="/Mas-proyectos">
						<span className="inline-flex items-center gap-3 py-20 text-brand-lime font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors cursor-pointer">
							Explorar más Diseños Web <ArrowRight className="w-4 h-4" />
						</span>
					</Link>
				</div>
			</section>

			<section class="py-32 bg-brand-black relative overflow-hidden text-center">
				<div class="container mx-auto px-6 relative z-10">
					<h2 class="font-display text-4xl md:text-7xl font-black uppercase mb-12 tracking-tighter max-w-5xl mx-auto leading-none">
						Expertos en <span class="text-brand-lime italic">Diseño Web para</span> Empresas Líderes.
					</h2>
					<div class="flex flex-col md:flex-row gap-6 justify-center">
						<a
							href="https://wa.me/543532679392?text=Hola%20quiero%20cotizar%20mi%20pagina%20web
"
							class="flex items-center justify-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
						>
							Cotizar Página Web
							<ChevronRight className="w-4 h-4" />
						</a>
					</div>
				</div>
				<div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
					<Briefcase class="w-[500px] h-[500px] text-white" />
				</div>
			</section>
			<Footer />
		</div>
	);
};

// import React from 'react';
// import { Menu } from '../Menu.jsx';
// import { Footer } from '../Footer.jsx';

// import Coope from '../../../public/img/Coope.png'
// import Cuaderno from '../../../public/img/Cuaderno.webp'
// import Sio from '../../../public/img/Sio.png'
// import Burgerland from '../../../public/img/Burgerland.png'

// import { ArrowUpRight, ChevronRight, ArrowRight, Briefcase  } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export const Proyectos = () => {
// 	return (
// 		<div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
// 			<div className="noise-overlay" />
// 			<Menu />
// 			<header class="relative pt-40 pb-20 border-b border-brand-border overflow-hidden">
// 				<div class="container mx-auto px-6 relative z-10">
// 					<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 						Soluciones de Negocio
// 					</span>
// 					<h1 class="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
// 						Impacto en<br />
// 						<span class="italic text-brand-lime">Negocios.</span>
// 					</h1>
// 					<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
// 						<p class="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
// 							Casos de estudio enfocados en la optimización de procesos corporativos, digitalización de
// 							ventas B2B y despliegue de infraestructura tecnológica empresarial.
// 						</p>
// 						<div class="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
// 							<button class="px-4 py-2 bg-brand-lime text-black">Todos los Negocios</button>
// 							<button class="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								Logística
// 							</button>
// 							<button class="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								Finanzas
// 							</button>
// 							<button class="px-4 py-2 border border-brand-border text-gray-400 hover:border-brand-lime transition-colors">
// 								B2B SaaS
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="absolute -bottom-10 -left-20 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none opacity-50">
// 					NEGOCIOS
// 				</div>
// 			</header>

// 			<section id="proyectos" class="py-20 bg-brand-black">
// 				<div class="container mx-auto px-6">
// 					<div class="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
// 						<div class="bg-brand-black group project-card overflow-hidden">
// 							<div class="aspect-[16/10] overflow-hidden">
// 								<img
// 									src={Coope}
// 									alt="Cooperativa Colonia Tirolesa"
// 									class="w-[100%] h-full object-cover grayscale transition-all duration-700 project-image"
// 								/>
// 							</div>
// 							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
// 								<div class="flex justify-between items-start mb-6">
// 									<div>
// 										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
// 											Cooperativa servicios publicos
// 										</span>
// 										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
// 											Cooperativa Colonia Tirolesa
// 										</h3>
// 									</div>
// 									<span class="text-gray-600 font-display italic text-xl">2025</span>
// 								</div>
// 								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
// 									Plataforma de automatización de solicitudes de servicios públicos y centralización
// 									de información, diseñada para agilizar trámites, mejorar la gestión operativa y
// 									brindar acceso claro y ordenado a los servicios disponibles.
// 								</p>
// 								<a
// 									href="https://cooptirolesa.com.ar"
// 									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
// 								>
// 									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
// 								</a>
// 							</div>
// 						</div>

// 						<div class="bg-brand-black group project-card overflow-hidden">
// 							<div class="aspect-[16/10] overflow-hidden">
// 								<img
// 									src={Cuaderno}
// 									alt="Consultoría de Negocios"
// 									class="w-full h-full object-contain grayscale bg-black transition-all duration-700 project-image"
// 								/>
// 							</div>
// 							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
// 								<div class="flex justify-between items-start mb-6">
// 									<div>
// 										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
// 											Psicologia
// 										</span>
// 										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
// 											Dr. Martin Reyes
// 										</h3>
// 									</div>
// 									<span class="text-gray-600 font-display italic text-xl">2025</span>
// 								</div>
// 								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
// 									Asesoramiento y acompañamiento legal especializado en adolescentes, con un enfoque
// 									humano, confidencial y respetuoso, orientado a proteger derechos y brindar
// 									contención en situaciones sensibles.
// 								</p>
// 								<a
// 									href="https://darkgray-caterpillar-731904.hostingersite.com"
// 									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
// 								>
// 									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
// 								</a>
// 							</div>
// 						</div>

// 						<div class="bg-brand-black group project-card overflow-hidden">
// 							<div class="aspect-[16/10] overflow-hidden">
// 								<img
// 									src={Sio}
// 									alt="Oficinas Corporativas"
// 									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
// 								/>
// 							</div>
// 							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
// 								<div class="flex justify-between items-start mb-6">
// 									<div>
// 										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
// 											Hidratación y abastecimiento de agua
// 										</span>
// 										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
// 											SIO Water
// 										</h3>
// 									</div>
// 									<span class="text-gray-600 font-display italic text-xl">2025</span>
// 								</div>
// 								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
// 									Desarrollo de sitio web para empresa de venta de agua en bidones y accesorios,
// 									precedido por una investigación de mercado para analizar competencia, propuesta de
// 									valor y necesidades del público objetivo, logrando una web alineada a objetivos
// 									comerciales reales.
// 								</p>
// 								<a
// 									href="#"
// 									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
// 								>
// 									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
// 								</a>
// 							</div>
// 						</div>

// 						<div class="bg-brand-black group project-card overflow-hidden">
// 							<div class="aspect-[16/10] overflow-hidden">
// 								<img
// 									src={Burgerland}
// 									alt="Business Strategy"
// 									class="w-[100%] h-full object-cover grayscale transition-all duration-700 project-image"
// 								/>
// 							</div>
// 							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
// 								<div class="flex justify-between items-start mb-6">
// 									<div>
// 										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
// 											Comida rapida
// 										</span>
// 										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
// 											Burgerland
// 										</h3>
// 									</div>
// 									<span class="text-gray-600 font-display italic text-xl">2025</span>
// 								</div>
// 								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
// 									Página web diseñada para centralizar el menú, automatizar solicitudes de pedidos y
// 									simplificar la gestión del negocio, reduciendo fricción y mejorando la conversión de
// 									visitas en ventas.
// 								</p>
// 								<a
// 									href="#"
// 									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
// 								>
// 									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
// 								</a>
// 							</div>
// 						</div>
// 					</div>
//                 <Link to="/Mas-proyectos">
// 				<a
// 					className="inline-flex items-center gap-3 py-20 text-brand-lime font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors"
// 				>
// 					Ver mas proyectos <ArrowRight className="w-4 h-4" />
// 				</a>
//                 </Link>
// 				</div>
// 			</section>

// 			{/* <section class="py-24 bg-brand-dark border-y border-brand-border">
//         <div class="container mx-auto px-6">
//             <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//                 <div>
//                     <span class="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">+$12M</span>
//                     <span class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Facturación Generada</span>
//                 </div>
//                 <div>
//                     <span class="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">45%</span>
//                     <span class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Reducción de Costos Op.</span>
//                 </div>
//                 <div>
//                     <span class="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">24/7</span>
//                     <span class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Disponibilidad de Sistemas</span>
//                 </div>
//                 <div>
//                     <span class="block font-display text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">98%</span>
//                     <span class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Cumplimiento de KPI</span>
//                 </div>
//             </div>
//         </div>
//     </section> */}

// 			<section class="py-32 bg-brand-black relative overflow-hidden text-center">
// 				<div class="container mx-auto px-6 relative z-10">
// 					<h2 class="font-display text-4xl md:text-7xl font-black uppercase mb-12 tracking-tighter max-w-5xl mx-auto leading-none">
// 						Transformamos tu infraestructura en una{' '}
// 						<span class="text-brand-lime italic">máquina de crecimiento.</span>
// 					</h2>
// 					<div class="flex flex-col md:flex-row gap-6 justify-center">
// 						<a
// 							href="index.html#contacto"
// 							class="flex items-center justify-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
// 						>
// 							Solicitar Diagnóstico B2B
// 							<ChevronRight className="w-4 h-4" />
// 						</a>
// 						<a
// 							href="nosotros.html"
// 							class="border border-brand-border text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-brand-gray transition-colors"
// 						>
// 							Nuestra Metodología
// 						</a>
// 					</div>
// 				</div>
// 				<div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
// 					{/* <i data-lucide="briefcase" class="w-[500px] h-[500px] text-white" /> */}
//                     <Briefcase class="w-[500px] h-[500px] text-white"/>
// 				</div>
// 			</section>
// 			<Footer />
// 		</div>
// 	);
// };
