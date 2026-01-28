import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';

import Maxi from '../../../public/img/Opera Instantánea_2026-01-27_114211_maximilianodev.vercel.app.png'
import Loop from '../../../public/img/Loop.jpg'
import Libreria from '../../../public/img/Libreria.jpg'

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
									src={Maxi}
									alt="Logística y Distribución"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Maximiliano Cacciamano
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Perfil profesional
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Sitio web desarrollado para un profesional del desarrollo web, enfocado en Programación Orientada a Objetos.
									El proyecto destaca buenas prácticas, arquitectura de software y una presentación clara de servicios y conocimientos técnicos.
								</p>
								<a
									href="https://maximilianodev.vercel.app"
									class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors"
								>
									Detalles Técnicos <ArrowUpRight class="w-4 h-4" />
								</a>
							</div>
						</div>

						<div class="bg-brand-black group project-card overflow-hidden">
							<div class="aspect-[16/10] overflow-hidden">
								<img
									src={Loop}
									alt="Consultoría de Negocios"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Entretenimiento
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											LoopStudio Company
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Desarrollo de sitio web para una plataforma de juegos de alta resolución, enfocada en experiencias inmersivas como realidad virtual, simuladores y entornos interactivos.
									El proyecto destaca tecnología, rendimiento visual y una experiencia de usuario envolvente.
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
									src={Libreria}
									alt="Oficinas Corporativas"
									class="w-full h-full object-cover grayscale transition-all duration-700 project-image"
								/>
							</div>
							<div class="p-10 border-t border-brand-border transition-colors duration-500 project-info">
								<div class="flex justify-between items-start mb-6">
									<div>
										<span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
											Pagina informativa
										</span>
										<h3 class="text-3xl font-display font-bold uppercase text-white tracking-tighter">
											Independencia 477
										</h3>
									</div>
									<span class="text-gray-600 font-display italic text-xl">2025</span>
								</div>
								<p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
									Pagina informativa sobre asesoramientos de una comunidad filsofica de lectura
								</p>
								<a
									href="https://independencia477.com.ar"
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
