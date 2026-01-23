import React from 'react'
import { Menu } from '../Menu'
import { Footer } from '../Footer'

export const Nosotros = () => {
  return (
    <div class="bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black">

    <div class="noise-overlay"></div>

    <Menu />

    <header class="relative min-h-[80vh] flex items-center border-b border-brand-border overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 alt="Equipo trabajando en estrategia de ventas" 
                 class="w-full h-full object-cover grayscale opacity-40"/>
            <div class="absolute inset-0 hero-gradient"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10 pt-20">
            <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Sobre la Agencia</span>
            <h1 class="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter uppercase mb-12">
                Menos Humo.<br/>Más <span class="text-brand-lime italic">Método.</span>
            </h1>
            <div class="grid md:grid-cols-12 gap-10">
                <div class="md:col-span-8">
                    <p class="text-xl md:text-3xl text-gray-200 font-light leading-relaxed">
                        No somos una agencia creativa convencional. Somos una unidad de ingeniería comercial dedicada a destruir la mediocridad digital mediante datos y estrategia competitiva.
                    </p>
                </div>
            </div>
        </div>
        <div class="absolute -bottom-10 right-0 text-[15rem] font-display font-black text-outline uppercase select-none pointer-events-none">
            MÉTODO
        </div>
    </header>


    <section id="mision" class="py-32 bg-brand-black border-b border-brand-border relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl">
                <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Nuestra Misión</span>
                <h2 class="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-10 leading-tight">
                    Transformar sitios web estáticos en <span class="italic text-brand-lime">activos financieros</span> de alto rendimiento.
                </h2>
                <p class="text-xl text-gray-400 leading-relaxed mb-8">
                    Existimos para erradicar la incertidumbre en el mundo digital. Nuestra misión es dotar a las empresas de herramientas técnicas y estratégicas que les permitan no solo competir, sino dominar su nicho mediante la ejecución impecable y el análisis de datos.
                </p>
            </div>
        </div>
    </section>


    <section id="estrategia" class="py-32 bg-brand-dark border-b border-brand-border">
        <div class="container mx-auto px-6">
            <div class="mb-20">
                <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Nuestro Enfoque</span>
                <h2 class="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-6">Ecosistema de Dominio Digital.</h2>
                <p class="text-gray-500 max-w-2xl uppercase text-[10px] tracking-widest font-bold">Tres pilares diseñados para la escalabilidad agresiva.</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-12">

                <div class="strategy-card group">
                    <span class="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">01</span>
                    <h3 class="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">Arquitectura de Conversión</h3>
                    <p class="text-gray-400 leading-relaxed">
                        No diseñamos para "vernos bien". Diseñamos flujos psicológicos basados en principios de persuasión digital que guían al usuario desde el interés hasta la transacción final sin fricciones.
                    </p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> UX Psicológico</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Optimización de Funnels</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Análisis de Mapas de Calor</li>
                    </ul>
                </div>


                <div class="strategy-card group">
                    <span class="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">02</span>
                    <h3 class="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">Autoridad Algorítmica</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Entendemos los motores de búsqueda y las redes sociales como sistemas matemáticos. Aplicamos ingeniería inversa para posicionar tu marca donde el cliente potencial está buscando una solución.
                    </p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> SEO Predictivo</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Estrategia de Contenido Viral</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Social Engine Optimization</li>
                    </ul>
                </div>


                <div class="strategy-card group">
                    <span class="strategy-number block font-display text-6xl font-black text-brand-border transition-all duration-500 mb-6">03</span>
                    <h3 class="text-white font-display font-bold text-2xl uppercase mb-6 tracking-tight">Inteligencia de Datos</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Lo que no se mide, no se puede escalar. Implementamos tableros de control en tiempo real para que cada decisión de marketing sea una inversión respaldada por evidencia, no por intuición.
                    </p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-500 font-bold uppercase tracking-tighter">
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Dashboards de ROI</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> Seguimiento de Atribución</li>
                        <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-brand-lime"></div> CRM Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section id="que-hacemos" class="py-32 bg-brand-gray/10 border-b border-brand-border">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div class="max-w-2xl">
                    <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Especialidades</span>
                    <h2 class="font-display text-4xl md:text-6xl font-bold uppercase text-white">Ingeniería en cada capa.</h2>
                </div>
                <p class="text-gray-500 text-sm max-w-xs uppercase tracking-widest font-bold pb-2">Soluciones integrales de punta a punta.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border">

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="layout" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Diseño UI UX</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Interfaces optimizadas para reducir la fricción y maximizar la retención del usuario.</p>
                </div>

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="code-2" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Desarrollo Web</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Estructuras robustas, código limpio y tiempos de carga que desafían los estándares del mercado.</p>
                </div>

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="shopping-cart" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">e-Commerce Profesional</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Tiendas online diseñadas para facturar, con flujos de pago optimizados y gestión escalable.</p>
                </div>

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="share-2" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Redes Sociales</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Gestión estratégica de canales digitales con enfoque en conversión y autoridad de marca.</p>
                </div>

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="headphones" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Soporte y Acompañamiento</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">No te dejamos solo. Mantenimiento preventivo y evolución constante de tu ecosistema.</p>
                </div>

                <div class="bg-brand-black p-12 hover:bg-brand-gray/40 transition-all group">
                    <i data-lucide="bar-chart-3" class="w-10 h-10 text-brand-lime mb-8 group-hover:scale-110 transition-transform"></i>
                    <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Consultoría Digital</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Análisis profundo de negocio para detectar oportunidades de crecimiento y optimización técnica.</p>
                </div>

                <div class="bg-brand-black p-12 lg:col-span-3 hover:bg-brand-gray/40 transition-all group border-t border-brand-border">
                    <div class="flex flex-col md:flex-row md:items-center gap-8">
                        <i data-lucide="rocket" class="w-10 h-10 text-brand-lime group-hover:rotate-12 transition-transform"></i>
                        <div>
                            <h3 class="text-white font-display font-bold text-xl uppercase mb-2">Puesta en Marcha</h3>
                            <p class="text-gray-500 text-sm leading-relaxed">Ejecución inmediata. Llevamos tu proyecto de la idea a la realidad con procesos de despliegue sin errores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="faq" class="py-32 bg-brand-black">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-12 gap-20">
                <div class="lg:col-span-5">
                    <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">FAQ</span>
                    <h2 class="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-8">Preguntas <br/>Frecuentes</h2>
                    <p class="text-gray-500 leading-relaxed mb-10">
                        Despejamos las dudas técnicas y comerciales más comunes antes de iniciar un proceso de transformación.
                    </p>
                    <a href="#contacto" class="inline-flex items-center gap-3 text-brand-lime font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors">
                        Tengo otra pregunta <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>
                <div class="lg:col-span-7 space-y-4">

                    <details class="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                        <summary class="flex justify-between items-center p-8 cursor-pointer list-none">
                            <h4 class="text-white font-bold uppercase text-sm tracking-wider">¿Por qué el Benchmark es obligatorio?</h4>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-brand-lime transition-transform"></i>
                        </summary>
                        <div class="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                            Porque construir una web sin saber qué está haciendo tu competencia es como jugar al póker sin mirar tus cartas. Necesitamos identificar las debilidades de tus competidores para que tu sitio sea la opción lógica del cliente.
                        </div>
                    </details>

                    <details class="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                        <summary class="flex justify-between items-center p-8 cursor-pointer list-none">
                            <h4 class="text-white font-bold uppercase text-sm tracking-wider">¿Trabajan con cualquier plataforma?</h4>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-brand-lime transition-transform"></i>
                        </summary>
                        <div class="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                            Elegimos la tecnología basada en tus objetivos de escalabilidad. Desde Shopify para e-Commerce de alto volumen hasta desarrollos a medida en React o Next.js si la performance es crítica.
                        </div>
                    </details>

                    <details class="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                        <summary class="flex justify-between items-center p-8 cursor-pointer list-none">
                            <h4 class="text-white font-bold uppercase text-sm tracking-wider">¿Qué incluye el acompañamiento post-web?</h4>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-brand-lime transition-transform"></i>
                        </summary>
                        <div class="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                            Durante los primeros 30 días monitoreamos el comportamiento real del usuario, corregimos posibles cuellos de botella y aseguramos que el SEO técnico se indexe correctamente en Google.
                        </div>
                    </details>

                    <details class="faq-item group bg-brand-gray/20 border border-brand-border overflow-hidden transition-all">
                        <summary class="flex justify-between items-center p-8 cursor-pointer list-none">
                            <h4 class="text-white font-bold uppercase text-sm tracking-wider">¿En cuánto tiempo estará lista mi web?</h4>
                            <i data-lucide="chevron-down" class="w-5 h-5 text-brand-lime transition-transform"></i>
                        </summary>
                        <div class="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                            Un desarrollo estratégico toma entre 4 y 8 semanas, dependiendo de la complejidad y las integraciones necesarias. Calidad técnica requiere tiempo de ejecución.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </section>


    <section class="py-32 bg-brand-lime text-black text-center relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <h2 class="font-display text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
                No buscamos premios,<br/>buscamos resultados.
            </h2>
            <a href="index.html#contacto" class="inline-block bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                Empezar Auditoría Competitiva
            </a>
        </div>
    </section>


    <Footer/>
    </div>
  )
}
