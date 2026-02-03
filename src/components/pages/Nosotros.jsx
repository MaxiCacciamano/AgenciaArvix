import React from 'react';
import { Menu } from '../Menu';
import { Footer } from '../Footer';

import {
    Code2,
    Layout,
    ShoppingCart,
    Share2,
    Headphones,
    BarChart3,
    Rocket,
    ArrowRight,
    ChevronDown,
    ChevronRight
} from 'lucide-react';

export const Nosotros = () => {
    return (
        <div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
            <div className="noise-overlay" />

            <Menu />

            <header className="py-16 relative min-h-[80vh] flex items-center border-b border-brand-border overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        // SEO: Alt text descriptivo que refuerza la entidad (Agencia) + ubicación
                        alt="Equipo de agencia de diseño web y estrategia digital analizando datos en Argentina"
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                    <div className="absolute inset-0 hero-gradient" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                        Sobre la Agencia
                    </span>
                    {/* SEO: Mantenemos tu H1 potente, pero el crawler leerá "páginas web" en el contexto de negación, lo cual genera curiosidad y relevancia semántica */}
                    <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-8xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
                        No diseñamos páginas web.<br />Construimos <span className="text-brand-lime italic"><br/>Activos digitales.</span>
                    </h1>
                    <div className="grid md:grid-cols-12 gap-10">
                        <div className="md:col-span-8">
                            <p className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed">
                                {/* SEO: Keyword "agencia de diseño web" insertada negativamente para reforzar identidad sin competir con la Home transaccional */}
                                No somos una <strong>agencia de diseño web</strong> convencional. Somos una unidad de ingeniería comercial
                                dedicada a destruir la mediocridad en los <strong>diseños web</strong> actuales mediante datos y estrategia competitiva.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-10 right-0 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none">
                    MÉTODO
                </div>
            </header>

            <section id="mision" className="py-32 bg-brand-black border-b border-brand-border relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                            Nuestra Misión
                        </span>
                        {/* SEO: Long-tail keyword especifica. Ayuda a rankear por especialidad + ubicación */}
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-10 leading-tight">
                            Redefiniendo el concepto de <span className="italic text-brand-lime">agencia diseño web</span> en Argentina
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Existimos para erradicar la incertidumbre. Mientras otros te venden un simple <strong>sitio web</strong>, nuestra misión es dotar a las
                            empresas de <strong>páginas web profesionales</strong> que actúan como herramientas de guerra comercial. 
                            No competimos, dominamos el nicho mediante ejecución impecable.
                        </p>
                    </div>
                </div>
            </section>

            <section id="estrategia" className="py-32 bg-brand-dark border-b border-brand-border">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                            Nuestro Enfoque
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-6">
                            Ecosistema de Dominio Digital.
                        </h2>
                        <p className="text-gray-500 max-w-2xl uppercase text-[10px] tracking-widest font-bold">
                            Tres pilares para elevar el estándar del diseño paginas web.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Card 01 */}
                        <div className="strategy-card group">
                            <span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
                                01
                            </span>
                            <h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
                                Arquitectura de Conversión
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {/* SEO: Contextualización de "diseños web" */}
                                No hacemos <strong>diseños web</strong> para "verse bien". Diseñamos flujos psicológicos basados en principios de
                                persuasión digital que guían al usuario desde el interés hasta la transacción final sin
                                fricciones.
                            </p>
                            <ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> UX Psicológico
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Optimización de Funnels
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Análisis de Mapas de Calor
                                </li>
                            </ul>
                        </div>

                        {/* Card 02 - SEO: Introduciendo "Sitio web" y "Paginas web" de forma técnica */}
                        <div className="strategy-card group">
                            <span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
                                02
                            </span>
                            <h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
                                Autoridad Algorítmica
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Un <strong>sitio web</strong> invisible no sirve. Entendemos los motores de búsqueda como sistemas matemáticos.
                                Aplicamos ingeniería inversa para que tus <strong>páginas web</strong> se posicionen donde el cliente potencial está
                                buscando una solución.
                            </p>
                            <ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> SEO Predictivo
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Contenido Viral
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Social Engine Optimization
                                </li>
                            </ul>
                        </div>

                        {/* Card 03 */}
                        <div className="strategy-card group">
                            <span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
                                03
                            </span>
                            <h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
                                Inteligencia de Datos
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Lo que no se mide, no se puede escalar. Implementamos tableros de control en tiempo real
                                para que cada decisión de marketing sea una inversión respaldada por evidencia, no por
                                intuición.
                            </p>
                            <ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Dashboards de ROI
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> Seguimiento de Atribución
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-brand-lime" /> CRM Integration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="que-hacemos" className="py-32 bg-brand-gray/10 border-b border-brand-border">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                                Especialidades
                            </span>
                            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white">
                                Ingeniería en cada capa.
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs uppercase tracking-widest font-bold pb-2">
                            Soluciones integrales de punta a punta.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">
                        {/* Servicio 1 */}
                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <Layout className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Diseño UI UX</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Interfaces optimizadas para reducir la fricción. Elevamos el estándar visual de las <strong>paginas web</strong> corporativas.
                            </p>
                        </div>

                        {/* Servicio 2 */}
                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <Code2 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            {/* SEO: Variación de keyword en el título */}
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Desarrollo Web Profesional</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Estructuras robustas, código limpio y tiempos de carga que desafían los estándares del mercado de <strong>diseño web</strong>.
                            </p>
                        </div>

                        {/* Resto de servicios (Sin cambios mayores, ya que no son el foco principal SEO aquí) */}
                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <ShoppingCart className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                e-Commerce Profesional
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Tiendas online diseñadas para facturar, con flujos de pago optimizados y gestión
                                escalable.
                            </p>
                        </div>

                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <Share2 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">Redes Sociales</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Gestión estratégica de canales digitales con enfoque en conversión y autoridad de marca.
                            </p>
                        </div>

                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <Headphones className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                Soporte y Acompañamiento
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                No te dejamos solo. Mantenimiento preventivo y evolución constante de tu ecosistema.
                            </p>
                        </div>

                        <div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                            <BarChart3 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-display font-bold text-xl uppercase mb-4">
                                Consultoría Digital
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Análisis profundo de negocio para detectar oportunidades de crecimiento y optimización técnica.
                            </p>
                        </div>

                        <div className="bg-brand-black p-12 lg:col-span-3 hover:bg-brand-gray/40 transition-all group border-t border-brand-border">
                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <Rocket className="w-10 h-10 text-brand-lime group-hover:rotate-12 transition-transform" />
                                <div>
                                    <h3 className="text-white font-display font-bold text-xl uppercase mb-2">
                                        Puesta en Marcha
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Ejecución inmediata. Llevamos tu proyecto de la idea a la realidad con procesos
                                        de despliegue sin errores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-32 bg-brand-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5">
                            <span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
                                FAQ
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-8">
                                Preguntas <br />Frecuentes
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-10">
                                Despejamos las dudas técnicas y comerciales más comunes antes de iniciar un proceso de
                                transformación con nuestra <strong>agencia de diseño web</strong>.
                            </p>
                            <a
                                href="https://wa.me/543532679392?text=Tengo%20una%20pregunta%20sobre%20dise%C3%B1o"
                                className="inline-flex items-center gap-3 text-brand-lime font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors"
                            >
                                Tengo otra pregunta <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="lg:col-span-7 space-y-4">
                            <details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        ¿Por qué el Benchmark es obligatorio?
                                    </h4>
                                    <ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                    Porque construir una web sin saber qué está haciendo tu competencia es como jugar al
                                    póker sin mirar tus cartas. Necesitamos identificar las debilidades de sus <strong>diseños web</strong> para que tu sitio sea la opción lógica.
                                </div>
                            </details>

                            <details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        {/* SEO: Pregunta clave para diferenciación */}
                                        ¿Qué diferencia su diseño páginas web del resto?
                                    </h4>
                                    <ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                    No usamos plantillas limitadas. Utilizamos arquitectura de componentes
                                    (React/Next.js) que garantizan velocidad de carga instantánea y una escalabilidad
                                    que las <strong>páginas web</strong> tradicionales no pueden ofrecer.
                                </div>
                            </details>

                            <details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        ¿Qué incluye el acompañamiento post-web?
                                    </h4>
                                    <ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                    Durante los primeros 30 días monitoreamos el comportamiento real del usuario,
                                    corregimos posibles cuellos de botella y aseguramos que el SEO técnico del <strong>sitio web</strong> se indexe
                                    correctamente en Google.
                                </div>
                            </details>

                            <details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        {/* SEO: Modificado para incluir keyword long-tail */}
                                        ¿En cuánto tiempo entregan páginas web profesionales?
                                    </h4>
                                    <ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                    Un desarrollo estratégico toma entre 4 y 8 semanas, dependiendo de la complejidad y
                                    las integraciones necesarias. Calidad técnica requiere tiempo de ejecución.
                                </div>
                            </details>

                            <details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                                        ¿POR QUÉ DEBERÍA REMODELAR MI SITIO WEB ACTUAL?
                                    </h4>
                                    <ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
                                </summary>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                    Un <strong>sitio web</strong> de más de 2 años suele estar obsoleto en performance y UX. Si tu tasa
                                    de rebote es alta o no generas leads, necesitas una remodelación técnica.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-brand-lime text-black text-center relative overflow-hidden">
                <div className="container mx-auto px-6  relative z-10">
                    <h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
                        No buscamos premios,<br />buscamos resultados.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://wa.me/543532679392?text=Hola%20quiero%20crear%20mi%20sitio%20web"
                            className="bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform 
                            flex flex-col sm:flex-row gap-4 mb-1"
                        >
                            Quiero mi sitio web
                            <ChevronRight className="w-4 h-4" />
                        </a>

                        <a
                            href="https://wa.me/543532679392?text=Hola%2C%20quiero%20remodelar%20mi%20sitio%20web"
                            className="text-black border-2 border-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform
                            flex flex-col sm:flex-row gap-4 mb-1
                            "
                        >
                            Remodelar mi página
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
// import React from 'react';
// import { Menu } from '../Menu';
// import { Footer } from '../Footer';

// import {
// 	Code2,
// 	Layout,
// 	ShoppingCart,
// 	Share2,
// 	Headphones,
// 	BarChart3,
// 	Rocket,
// 	ArrowRight,
// 	ChevronDown,
// 	ChevronRight
// } from 'lucide-react';

// export const Nosotros = () => {
// 	return (
// 		<div className="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">
// 			<div className="noise-overlay" />

// 			<Menu />

// 			<header className="py-16 relative min-h-[80vh] flex items-center border-b border-brand-border overflow-hidden">
// 				<div className="absolute inset-0 z-0">
// 					<img
// 						src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
// 						alt="Equipo de agencia de desarrollo web eCommerce en Argentina trabajando en estrategia digital"
// 						className="w-full h-full object-cover grayscale opacity-40"
// 					/>
// 					<div className="absolute inset-0 hero-gradient" />
// 				</div>

// 				<div className="container mx-auto px-6 relative z-10 pt-20">
// 					<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 						Sobre la Agencia
// 					</span>
// 					<h1 className="font-display font-bold text-5xl md:text-8xl lg:text-8xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
// 						No diseñamos páginas web.<br />Construimos <span className="text-brand-lime italic"><br/>Activos digitales.</span>
// 					</h1>
// 					<div className="grid md:grid-cols-12 gap-10">
// 						<div className="md:col-span-8">
// 							<p className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed">
// 								No somos una agencia de diseño web convencional. Somos una unidad de ingeniería comercial
// 								dedicada a destruir la mediocridad digital mediante datos y estrategia competitiva.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="absolute -bottom-10 right-0 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none">
// 					MÉTODO
// 				</div>
// 			</header>

// 			<section id="mision" className="py-32 bg-brand-black border-b border-brand-border relative overflow-hidden">
// 				<div className="container mx-auto px-6">
// 					<div className="max-w-4xl">
// 						<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 							Nuestra Misión
// 						</span>
// 						<h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-10 leading-tight">
// 							Somos una agencia de <span className="italic text-brand-lime">diseño web eCommerce</span> en Argentina
// 						</h2>
// 						<p className="text-xl text-gray-400 leading-relaxed mb-8">
// 							Existimos para erradicar la incertidumbre en el mundo digital. Nuestra misión es dotar a las
// 							empresas de herramientas técnicas y estratégicas que les permitan no solo competir, sino
// 							dominar su nicho mediante la ejecución impecable y el análisis de datos.
// 						</p>
// 					</div>
// 				</div>
// 			</section>
// s
// 			<section id="estrategia" className="py-32 bg-brand-dark border-b border-brand-border">
// 				<div className="container mx-auto px-6">
// 					<div className="mb-20">
// 						<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 							Nuestro Enfoque
// 						</span>
// 						<h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-6">
// 							Ecosistema de Dominio Digital.
// 						</h2>
// 						<p className="text-gray-500 max-w-2xl uppercase text-[10px] tracking-widest font-bold">
// 							Tres pilares diseñados para la escalabilidad agresiva.
// 						</p>
// 					</div>

// 					<div className="grid lg:grid-cols-3 gap-12">
// 						<div className="strategy-card group">
// 							<span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
// 								01
// 							</span>
// 							<h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
// 								Arquitectura de Conversión
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed">
// 								No diseñamos para "vernos bien". Diseñamos flujos psicológicos basados en principios de
// 								persuasión digital que guían al usuario desde el interés hasta la transacción final sin
// 								fricciones.
// 							</p>
// 							<ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> UX Psicológico
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Optimización de Funnels
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Análisis de Mapas de Calor
// 								</li>
// 							</ul>
// 						</div>

// 						<div className="strategy-card group">
// 							<span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
// 								02
// 							</span>
// 							<h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
// 								Autoridad Algorítmica
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed">
// 								Entendemos los motores de búsqueda y las redes sociales como sistemas matemáticos.
// 								Aplicamos ingeniería inversa para posicionar tu marca donde el cliente potencial está
// 								buscando una solución.
// 							</p>
// 							<ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> SEO Predictivo
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Estrategia de Contenido Viral
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Social Engine Optimization
// 								</li>
// 							</ul>
// 						</div>

// 						<div className="strategy-card group">
// 							<span className="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">
// 								03
// 							</span>
// 							<h3 className="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">
// 								Inteligencia de Datos
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed">
// 								Lo que no se mide, no se puede escalar. Implementamos tableros de control en tiempo real
// 								para que cada decisión de marketing sea una inversión respaldada por evidencia, no por
// 								intuición.
// 							</p>
// 							<ul className="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Dashboards de ROI
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> Seguimiento de Atribución
// 								</li>
// 								<li className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 bg-brand-lime" /> CRM Integration
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<section id="que-hacemos" className="py-32 bg-brand-gray/10 border-b border-brand-border">
// 				<div className="container mx-auto px-6">
// 					<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
// 						<div className="max-w-2xl">
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 								Especialidades
// 							</span>
// 							<h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white">
// 								Ingeniería en cada capa.
// 							</h2>
// 						</div>
// 						<p className="text-gray-500 text-sm max-w-xs uppercase tracking-widest font-bold pb-2">
// 							Soluciones integrales de punta a punta.
// 						</p>
// 					</div>

// 					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">
// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<Layout className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">Diseño UI UX</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								Interfaces optimizadas para reducir la fricción y maximizar la retención del usuario.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<Code2 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">Desarrollo Web</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								Estructuras robustas, código limpio y tiempos de carga que desafían los estándares del
// 								mercado.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<ShoppingCart className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">
// 								e-Commerce Profesional
// 							</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								Tiendas online diseñadas para facturar, con flujos de pago optimizados y gestión
// 								escalable.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<Share2 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">Redes Sociales</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								Gestión estratégica de canales digitales con enfoque en conversión y autoridad de marca.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<Headphones className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">
// 								Soporte y Acompañamiento
// 							</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								No te dejamos solo. Mantenimiento preventivo y evolución constante de tu ecosistema.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
// 							<BarChart3 className="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform" />
// 							<h3 className="text-white font-display font-bold text-xl uppercase mb-4">
// 								Consultoría Digital
// 							</h3>
// 							<p className="text-gray-500 text-sm leading-relaxed">
// 								Análisis profundo de negocio para detectar oportunidades de crecimiento y optimización
// 								técnica.
// 							</p>
// 						</div>

// 						<div className="bg-brand-black p-12 lg:col-span-3 hover:bg-brand-gray/40 transition-all group border-t border-brand-border">
// 							<div className="flex flex-col md:flex-row md:items-center gap-8">
// 								<Rocket className="w-10 h-10 text-brand-lime group-hover:rotate-12 transition-transform" />
// 								<div>
// 									<h3 className="text-white font-display font-bold text-xl uppercase mb-2">
// 										Puesta en Marcha
// 									</h3>
// 									<p className="text-gray-500 text-sm leading-relaxed">
// 										Ejecución inmediata. Llevamos tu proyecto de la idea a la realidad con procesos
// 										de despliegue sin errores.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<section id="faq" className="py-32 bg-brand-black">
// 				<div className="container mx-auto px-6">
// 					<div className="grid lg:grid-cols-12 gap-20">
// 						<div className="lg:col-span-5">
// 							<span className="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
// 								FAQ
// 							</span>
// 							<h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-8">
// 								Preguntas <br />Frecuentes
// 							</h2>
// 							<p className="text-gray-500 leading-relaxed mb-10">
// 								Despejamos las dudas técnicas y comerciales más comunes antes de iniciar un proceso de
// 								transformación.
// 							</p>
// 							<a
// 								href="https://wa.me/543532679392?text=Tengo%20una%20pregunta%20sobre%20dise%C3%B1o"
// 								className="inline-flex items-center gap-3 text-brand-lime font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors"
// 							>
// 								Tengo otra pregunta <ArrowRight className="w-4 h-4" />
// 							</a>
// 						</div>
// 						<div className="lg:col-span-7 space-y-4">
// 							<details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
// 								<summary className="flex justify-between items-center p-8 cursor-pointer list-none">
// 									<h4 className="text-white font-bold uppercase text-sm tracking-wider">
// 										¿Por qué el Benchmark es obligatorio?
// 									</h4>
// 									<ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
// 								</summary>
// 								<div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
// 									Porque construir una web sin saber qué está haciendo tu competencia es como jugar al
// 									póker sin mirar tus cartas. Necesitamos identificar las debilidades de tus
// 									competidores para que tu sitio sea la opción lógica del cliente.
// 								</div>
// 							</details>

// 							<details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
// 								<summary className="flex justify-between items-center p-8 cursor-pointer list-none">
// 									<h4 className="text-white font-bold uppercase text-sm tracking-wider">
// 										¿Qué diferencia su desarrollo web del resto?
// 									</h4>
// 									<ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
// 								</summary>
// 								<div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
// 									No usamos plantillas limitadas. Utilizamos arquitectura de componentes
// 									(React/Next.js) que garantizan velocidad de carga instantánea y una escalabilidad
// 									que las herramientas tradicionales no pueden ofrecer.
// 								</div>
// 							</details>

// 							<details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
// 								<summary className="flex justify-between items-center p-8 cursor-pointer list-none">
// 									<h4 className="text-white font-bold uppercase text-sm tracking-wider">
// 										¿Qué incluye el acompañamiento post-web?
// 									</h4>
// 									<ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
// 								</summary>
// 								<div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
// 									Durante los primeros 30 días monitoreamos el comportamiento real del usuario,
// 									corregimos posibles cuellos de botella y aseguramos que el SEO técnico se indexe
// 									correctamente en Google.
// 								</div>
// 							</details>

// 							<details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
// 								<summary className="flex justify-between items-center p-8 cursor-pointer list-none">
// 									<h4 className="text-white font-bold uppercase text-sm tracking-wider">
// 										¿En cuánto tiempo estará lista mi web?
// 									</h4>
// 									<ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
// 								</summary>
// 								<div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
// 									Un desarrollo estratégico toma entre 4 y 8 semanas, dependiendo de la complejidad y
// 									las integraciones necesarias. Calidad técnica requiere tiempo de ejecución.
// 								</div>
// 							</details>

// 							<details className="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
// 								<summary className="flex justify-between items-center p-8 cursor-pointer list-none">
// 									<h4 className="text-white font-bold uppercase text-sm tracking-wider">
// 										¿POR QUÉ DEBERÍA REMODELAR MI SITIO WEB ACTUAL?
// 									</h4>
// 									<ChevronDown className="w-5 h-5 text-brand-lime transition-transform" />
// 								</summary>
// 								<div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
// 									Un sitio web de más de 2 años suele estar obsoleto en performance y UX. Si tu tasa
// 									de rebote es alta o no generas leads, necesitas una remodelación web técnica para no
// 									seguir perdiendo dinero ante la competencia.
// 								</div>
// 							</details>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<section className="py-32 bg-brand-lime text-black text-center relative overflow-hidden">
// 				<div className="container mx-auto px-6  relative z-10">
// 					<h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
// 						No buscamos premios,<br />buscamos resultados.
// 					</h2>
// 					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
// 						<a
// 							href="https://wa.me/543532679392?text=Hola%20quiero%20crear%20mi%20sitio%20web"
// 							className="bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform 
// 							flex flex-col sm:flex-row gap-4 mb-1"
// 						>
// 							Quiero mi sitio web
// 							<ChevronRight className="w-4 h-4" />
// 						</a>

// 						<a
// 							href="https://wa.me/543532679392?text=Hola%2C%20quiero%20remodelar%20mi%20sitio%20web"
// 							className="text-black border-2 border-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform
// 							flex flex-col sm:flex-row gap-4 mb-1
// 							"
// 						>
// 							Remodelar mi página
// 							<ChevronRight className="w-4 h-4" />
// 						</a>
// 					</div>
// 				</div>
// 			</section>

// 			<Footer />
// 		</div>
// 	);
// };
