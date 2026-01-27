import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
export const Masproyectos = () => {
	return (
		<div>
            <Menu />
			<section id="proyectos" class="py-20 bg-brand-black py-32">
				<div class="container mx-auto px-6">
					<div class="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
									alt="Logística y Distribución"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Cooperativa servicios publicos
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Cooperativa Colonia Tirolesa
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Plataforma de automatización de solicitudes de servicios públicos y centralización
									de información, diseñada para agilizar trámites, mejorar la gestión operativa y
									brindar acceso claro y ordenado a los servicios disponibles.
								</p>
								<a
									href="https://cooptirolesa.com.ar"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
									alt="Consultoría de Negocios"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
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
									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
									alt="Oficinas Corporativas"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Hidratación y abastecimiento de agua
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											SIO Water
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Desarrollo de sitio web para empresa de venta de agua en bidones y accesorios,
									precedido por una investigación de mercado para analizar competencia, propuesta de
									valor y necesidades del público objetivo, logrando una web alineada a objetivos
									comerciales reales.
								</p>
								<a
									href="#"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
									alt="Business Strategy"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Comida rapida
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Burgerland
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2024</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Página web diseñada para centralizar el menú, automatizar solicitudes de pedidos y
									simplificar la gestión del negocio, reduciendo fricción y mejorando la conversión de
									visitas en ventas.
								</p>
								<a
									href="#"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
