import React from 'react'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import {
  CheckCircle,
  Target,
  Zap,
  Users,
  BarChart3,
  Mail,
  ChevronRight
} from 'lucide-react'

export const Mercado = () => {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <div className="noise-overlay" />
      <Menu />

      <header class="pt-48 pb-24 border-b border-brand-border relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div class="max-w-3xl">
                <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Intelligence & Benchmarking</span>
                {/* H1 Optimizado: Keyword Principal */}
                <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tighter uppercase mb-10">
                    Análisis de <br/><span class="italic text-brand-lime">Competencia Digital.</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-8">
                   Expertos en  <span className="font-bold">inteligencia competitiva</span> y <span className="font-bold">estudio de mercado online</span>. Aplicamos ingeniería inversa a los líderes del sector para detectar <span className="font-bold">brechas de demanda</span> y capturar cuota de mercado con precisión analítica.
                </p>
                <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 italic">
                Consultoría de <span className="font-bold">estrategia digital</span> basada en <br/>Big Data y Tendencias de Consumo
              </span>
            <div className="h-10 w-px bg-white/10"></div>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/40?img=${i+10}`} alt="Experto en análisis de competencia" />
                  </div>
                ))}
              </div>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2">
                <div class="relative z-10 rounded-lg overflow-hidden border border-brand-border shadow-2xl">
                    {/* Alt text optimizado */}
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Dashboard de investigación de mercado y herramientas de análisis" class="w-full grayscale hover:grayscale-0 transition-all duration-700"/>
                    <div class="absolute inset-0 bg-brand-lime/10 mix-blend-overlay"></div>
                </div>
                <div class="absolute -top-6 -right-6 w-32 h-32 bg-brand-lime/20 blur-3xl rounded-full"></div>
            </div>
        </div>
    </header>

    <section class="py-24 bg-brand-black">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-1">
                    <div class="mb-8 rounded-lg overflow-hidden border border-brand-border aspect-video">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500" alt="Estrategia de Benchmarking Competitivo" class="w-full h-full object-cover grayscale"/>
                    </div>
                    {/* H2 con Keywords de intención */}
                    <h2 class="font-display text-3xl font-bold uppercase text-white mb-6">Investigación de <br/>Mercado <span class="text-brand-lime italic">"Spy & Scale"</span></h2>
                    <p class="text-gray-500 text-sm leading-relaxed mb-8">
                       El <span className="font-bold">benchmarking competitivo</span> es el núcleo de nuestra metodología. Analizamos los activos digitales de su competencia para entender sus <span className="font-bold">fuentes de tráfico</span>, <span className="font-bold">estrategias de contenido</span> y tácticas de retención.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <CheckCircle class="w-4 h-4 text-brand-lime" /> ANÁLISIS DE POSICIONAMIENTO ORGÁNICO
                        </li>
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <CheckCircle class="w-4 h-4 text-brand-lime" /> MAPEO DE ARQUITECTURA WEB COMPETITIVA
                        </li>
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <CheckCircle class="w-4 h-4 text-brand-lime" /> AUDITORÍA DE AUTORIDAD DE DOMINIO (BACKLINKS)
                        </li>
                    </ul>
                </div>

                <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
                    <div class="data-card p-8 group relative overflow-hidden">
                        <div class="relative z-10">
                            <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                                <Target size={24} class="w-6 h-6"/>
                            </div>
                            <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Auditoría SEO de <br/>Competidores</h3>
                            <p class="text-gray-500 text-1xl leading-relaxed mb-6">
                                Identificamos exactamente qué <span className="font-bold">palabras clave de la competencia</span> están generando el 80% de su tráfico. Replicamos el éxito y mejoramos el valor.
                            </p>
                            <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: +200% Tráfico Relevante</div>
                        </div>
                    </div>

                    <div class="data-card p-8 group relative overflow-hidden">
                        <div class="relative z-10">
                            <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                                <Zap class="w-6 h-6"/>
                            </div>
                            <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Detección de <br/>Gap de Contenido</h3>
                            <p class="text-gray-500 text-1xl leading-relaxed mb-6">
                                Buscamos lo que la competencia ignora: preguntas de clientes sin respuesta y términos de búsqueda con baja competencia pero alta intención de compra.
                            </p>
                            <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Blue Ocean Strategy</div>
                        </div>
                    </div>

                    <div class="data-card p-8 group">
                        <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                            <BarChart3 class="w-6 h-6"/>
                        </div>
                        <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Análisis de <br/>Autoridad Competitiva</h3>
                        <p class="text-gray-500 text-1xl leading-relaxed mb-6">
                            Desglosamos el perfil de <span className="font-bold">backlinks de la competencia</span> para entender su red de influencia y cómo posicionarnos a su nivel mediante **inteligencia competitiva**.
                        </p>
                        <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Autoridad Acelerada</div>
                    </div>

                    <div class="data-card p-8 group">
                        <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                            <Users class="w-6 h-6"/>
                        </div>
                        <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Benchmarking de <br/>Ecommerce y UX</h3>
                        <p class="text-gray-500 text-1xl leading-relaxed mb-6">
                            Estudiamos el comportamiento del usuario en los sitios rivales para diseñar una experiencia de navegación que convierta donde ellos fallan.
                        </p>
                        <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Mayor Tasa de CVR</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 border-y border-brand-border bg-brand-dark">
        <div class="container mx-auto px-6">
            <div class="bg-brand-black border border-brand-border p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                <div class="w-full md:w-1/2">
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">Caso de Estudio: Cuota de Mercado</span>
                    <h2 class="text-4xl font-display font-bold uppercase text-white mb-6">Captura de Mercado: <br/><span class="text-brand-lime italic">B2B SaaS Sector.</span></h2>
                    <p class="text-gray-400 text-1xl leading-relaxed mb-8">
                        A través de un <span className="font-bold">estudio de mercado para sitios web</span>, analizamos a los 3 líderes globales. Detectamos que su **posicionamiento web** carecía de profundidad técnica, permitiéndonos superarlos en 4 meses.
                    </p>
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <div class="text-3xl font-display font-bold text-white mb-1">+140%</div>
                            <div class="text-[9px] font-black text-brand-lime uppercase tracking-widest">Keywords en Top 3</div>
                        </div>
                        <div>
                            <div class="text-3xl font-display font-bold text-white mb-1">-45%</div>
                            <div class="text-[9px] font-black text-brand-lime uppercase tracking-widest">Costo por Lead</div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 relative">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Gráfica de cuota de mercado digital" class="rounded border border-brand-border grayscale opacity-40"/>
                        <div class="absolute inset-0 flex items-center justify-center p-6">
                            <div class="bg-brand-gray/90 backdrop-blur-md border border-brand-border p-6 rounded shadow-2xl w-full">
                                <div class="flex items-center justify-between mb-8">
                                    <span class="text-[10px] font-bold text-white uppercase tracking-widest">Competitor Comparison Matrix</span>
                                </div>
                                <div class="space-y-4">
                                    <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
                                        <div class="h-full bg-brand-lime w-[85%]"></div>
                                    </div>
                                    <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
                                        <div class="h-full bg-gray-400 w-[60%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-32 bg-brand-black relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Análisis de mercado global" class="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none"/>
        <div class="container mx-auto px-6 text-center relative z-10">
            <h2 class="font-display text-4xl md:text-6xl font-black uppercase text-white mb-8 tracking-tighter">
                ¿Sabes qué hace tu <br/><span class="text-brand-lime italic">competencia ahora?</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                Solicita un reporte preliminar de <span className="font-bold">Market Intelligence</span> y descubre dónde están tus mayores oportunidades de <span className="font-bold">crecimiento orgánico</span>.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 mb-20">
                Iniciar Investigación
                <ChevronRight className="w-4 h-4" />
            </a>
        </div>
    </footer>
      <Footer />
    </div>
  )
}



// import React from 'react'
// import { Menu } from '../Menu'
// import { Footer } from '../Footer'
// import {
//   CheckCircle,
//   Target,
//   Zap,
//   Users,
//   BarChart3,
//   Mail,
//   ChevronRight
// } from 'lucide-react'

// export const Mercado = () => {
//   return (
//     <div className="relative bg-black text-white overflow-x-hidden">

//       {/* Overlay global de ruido (esto idealmente va en App.jsx) */}
//       <div className="noise-overlay" />

//       <Menu />

//        <header class="pt-48 pb-24 border-b border-brand-border relative overflow-hidden">
//         <div class="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
//             <div class="max-w-3xl">
//                 <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Strategic Intelligence</span>
//                 <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tighter uppercase mb-10">
//                     Investigación de <br/><span class="italic text-brand-lime">Mercado & Competencia.</span>
//                 </h1>
//                 <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-8">
//                    Expertos en inteligencia competitiva digital. Aplicamos ingeniería inversa a los líderes
//                    del sector para detectar brechas de demanda y capturar cuota de mercado con precisión analítica.
//                 </p>
//                 <div className="flex items-center gap-6">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 italic">
//                 Consultoría estratégica basada en <br/>Big Data y Tendencias de Consumo
//               </span>
//             <div className="h-10 w-px bg-white/10"></div>
//               <div className="flex -space-x-4">
//                 {[1, 2, 3].map((i) => (
//                   <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
//                     <img src={`https://i.pravatar.cc/40?img=${i+10}`} alt="Analista de datos" />
//                   </div>
//                 ))}
//               </div>
//               </div>
//             </div>
//             <div class="relative w-full lg:w-1/2">
//                 <div class="relative z-10 rounded-lg overflow-hidden border border-brand-border shadow-2xl">
//                     <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Business Intelligence Dashboard" class="w-full grayscale hover:grayscale-0 transition-all duration-700"/>
//                     <div class="absolute inset-0 bg-brand-lime/10 mix-blend-overlay"></div>
//                 </div>

//                 <div class="absolute -top-6 -right-6 w-32 h-32 bg-brand-lime/20 blur-3xl rounded-full"></div>
//             </div>
//         </div>
//     </header>


//     <section class="py-24 bg-brand-black">
//         <div class="container mx-auto px-6">
//             <div class="grid lg:grid-cols-3 gap-12">

//                 <div class="lg:col-span-1">
//                     <div class="mb-8 rounded-lg overflow-hidden border border-brand-border aspect-video">
//                         <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500" alt="Strategic Planning" class="w-full h-full object-cover grayscale"/>
//                     </div>
//                     <h2 class="font-display text-3xl font-bold uppercase text-white mb-6">Nuestra <br/>Estrategia <span class="text-brand-lime italic">"Spy & Scale"</span></h2>
//                     <p class="text-gray-500 text-sm leading-relaxed mb-8">
//                        El <span class="text-brand-lime italic">benchmarking competitivo </span> es el núcleo de nuestra metodología. Analizamos los activos digitales de su competencia para entender sus fuentes de tráfico, estrategias de contenido y tácticas de retención.
//                     </p>
//                     <ul class="space-y-4">
//                         <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
//                             <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i>ANÁLISIS DE POSICIONAMIENTO ORGÁNICO
//                         </li>
//                         <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
//                             <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i> MAPEO DE ARQUITECTURA WEB COMPETITIVA
//                         </li>
//                         <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
//                             <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i> AUDITORÍA DE AUTORIDAD DE DOMINIO (BACKLINKS)
//                         </li>
//                     </ul>
//                 </div>


//                 <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
//                     <div class="data-card p-8 group relative overflow-hidden">
//                         <div class="relative z-10">
//                             <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
//                                 <Target size={24} class="w-6 h-6"/>
//                             </div>
//                             <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Ingeniería Inversa <br/>de Contenidos</h3>
//                             <p class="text-gray-500 text-xs leading-relaxed mb-6">
//                                 Identificamos exactamente qué piezas de contenido están generando el 80% del tráfico de tus competidores. Replicamos el éxito y mejoramos el valor.
//                             </p>
//                             <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: +200% Tráfico Relevante</div>
//                         </div>
//                         <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300" alt="Code and Data" class="absolute top-0 right-0 w-32 opacity-5 grayscale group-hover:opacity-10 transition-opacity"/>
//                     </div>


//                     <div class="data-card p-8 group relative overflow-hidden">
//                         <div class="relative z-10">
//                             <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
//                                 <Zap class="w-6 h-6"/>

//                             </div>
//                             <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Detección de <br/>Brechas de Mercado</h3>
//                             <p class="text-gray-500 text-xs leading-relaxed mb-6">
//                                 Buscamos lo que la competencia ignora: preguntas de clientes sin respuesta y términos de búsqueda con baja competencia pero alta intención de compra.
//                             </p>
//                             <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Blue Ocean Strategy</div>
//                         </div>
//                         <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300" alt="Global Network" class="absolute top-0 right-0 w-32 opacity-5 grayscale group-hover:opacity-10 transition-opacity"/>
//                     </div>


//                     <div class="data-card p-8 group">
//                         <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
//                             <BarChart3 class="w-6 h-6"/>
//                         </div>
//                         <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Análisis de <br/>Autoridad Competitiva</h3>
//                         <p class="text-gray-500 text-xs leading-relaxed mb-6">
//                             Desglosamos el perfil de enlaces de los líderes para entender su red de influencia y cómo posicionarnos a su nivel en menos de 12 meses.
//                         </p>
//                         <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Autoridad Acelerada</div>
//                     </div>

//                     <div class="data-card p-8 group">
//                         <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
//                             <Users class="w-6 h-6"/>
//                         </div>
//                         <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Inteligencia de <br/>Audiencia</h3>
//                         <p class="text-gray-500 text-xs leading-relaxed mb-6">
//                             Estudiamos el comportamiento del usuario en los sitios rivales para diseñar una experiencia de navegación (UX) que convierta donde ellos fallan.
//                         </p>
//                         <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Mayor Tasa de CVR</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>


//     <section class="py-24 border-y border-brand-border bg-brand-dark">
//         <div class="container mx-auto px-6">
//             <div class="bg-brand-black border border-brand-border p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
//                 <div class="w-full md:w-1/2">
//                     <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">Análisis de Caso Real</span>
//                     <h2 class="text-4xl font-display font-bold uppercase text-white mb-6">Captura de Mercado: <br/><span class="text-brand-lime italic">B2B SaaS Sector.</span></h2>
//                     <p class="text-gray-400 text-sm leading-relaxed mb-8">
//                         Para una plataforma de recursos humanos, analizamos a los 3 líderes globales del sector. Identificamos que el 60% de sus guías comparativas carecían de profundidad técnica. Generamos contenido superior "Data-Driven" que nos permitió superar a la competencia en el ranking para las keywords de mayor intención comercial en 4 meses.
//                     </p>
//                     <div class="grid grid-cols-2 gap-8">
//                         <div>
//                             <div class="text-3xl font-display font-bold text-white mb-1">+140%</div>
//                             <div class="text-[9px] font-black text-brand-lime uppercase tracking-widest">Keywords en Top 3</div>
//                         </div>
//                         <div>
//                             <div class="text-3xl font-display font-bold text-white mb-1">-45%</div>
//                             <div class="text-[9px] font-black text-brand-lime uppercase tracking-widest">Costo por Lead</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="w-full md:w-1/2 relative">

//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Data Visualization Report" class="rounded border border-brand-border grayscale opacity-40"/>
//                         <div class="absolute inset-0 flex items-center justify-center p-6">

//                             <div class="bg-brand-gray/90 backdrop-blur-md border border-brand-border p-6 rounded shadow-2xl w-full">
//                                 <div class="flex items-center justify-between mb-8">
//                                     <span class="text-[10px] font-bold text-white uppercase tracking-widest">Competitor Comparison Matrix</span>
//                                     <div class="flex gap-2">
//                                         <div class="w-2 h-2 rounded-full bg-red-500"></div>
//                                         <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
//                                         <div class="w-2 h-2 rounded-full bg-green-500"></div>
//                                     </div>
//                                 </div>
//                                 <div class="space-y-4">
//                                     <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
//                                         <div class="h-full bg-brand-lime w-[85%]"></div>
//                                     </div>
//                                     <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
//                                         <div class="h-full bg-gray-400 w-[60%]"></div>
//                                     </div>
//                                     <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
//                                         <div class="h-full bg-gray-600 w-[45%]"></div>
//                                     </div>
//                                 </div>
//                                 <div class="mt-10 grid grid-cols-2 gap-4">
//                                     <div class="bg-brand-black p-4 border border-brand-border text-[9px] font-bold uppercase text-gray-500">Opportunity Gap: <span class="text-white">High</span></div>
//                                     <div class="bg-brand-black p-4 border border-brand-border text-[9px] font-bold uppercase text-gray-500">Market Share: <span class="text-white">+12.4%</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>


//     <footer class="py-32 bg-brand-black relative overflow-hidden">

//         <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Cyber Background" class="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none"/>
        
//         <div class="container mx-auto px-6 text-center relative z-10">
//             <h2 class="font-display text-4xl md:text-6xl font-black uppercase text-white mb-8 tracking-tighter">
//                 ¿Sabes qué está haciendo <br/>tu <span class="text-brand-lime italic">competencia ahora?</span>
//             </h2>
//             <p class="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
//                 Solicita un reporte preliminar de "Market Intelligence" y descubre dónde están tus mayores oportunidades de crecimiento orgánico.
//             </p>
//             <a href="index.html#contacto" className="inline-flex items-center gap-3 bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 mb-20">
//                 Iniciar Investigación
//                 <ChevronRight className="w-4 h-4" />
//             </a>

//         </div>
//     </footer>

//       <Footer />
//     </div>
//   )
// }
