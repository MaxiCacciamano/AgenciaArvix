import React from 'react'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import {
  CheckCircle,
  Target,
  Zap,
  Users,
  Mail
} from 'lucide-react'

export const Mercado = () => {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* Overlay global de ruido (esto idealmente va en App.jsx) */}
      <div className="noise-overlay" />

      <Menu />

       <header class="pt-48 pb-24 border-b border-brand-border relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div class="max-w-3xl">
                <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Strategic Intelligence</span>
                <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white tracking-tighter uppercase mb-10">
                    Investigación de <br/><span class="italic text-brand-lime">Mercado & Competencia.</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-8">
                    No adivinamos. Aplicamos ingeniería inversa a los líderes del sector para detectar brechas de demanda y capturar su cuota de mercado con precisión quirúrgica.
                </p>
                <div class="flex items-center gap-6">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200&h=80" alt="Data Analytics Visualization" class="grayscale opacity-50 h-12"/>
                    <div class="h-10 w-px bg-brand-border"></div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-gray-500">Análisis Predictivo basado en <br/>Big Data Competitivo</span>
                </div>
            </div>
            <div class="relative w-full lg:w-1/2">
                <div class="relative z-10 rounded-lg overflow-hidden border border-brand-border shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Business Intelligence Dashboard" class="w-full grayscale hover:grayscale-0 transition-all duration-700"/>
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
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500" alt="Strategic Planning" class="w-full h-full object-cover grayscale"/>
                    </div>
                    <h2 class="font-display text-3xl font-bold uppercase text-white mb-6">Nuestra <br/>Estrategia <span class="text-brand-lime italic">"Spy & Scale"</span></h2>
                    <p class="text-gray-500 text-sm leading-relaxed mb-8">
                        La mejor inspiración proviene de lo que ya genera ingresos. Analizamos los activos digitales de tu competencia para entender por qué ganan y cómo podemos superarlos.
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i> Desglose de Inversión Competitiva
                        </li>
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i> Análisis de Embudos de Conversión
                        </li>
                        <li class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                            <i data-lucide="check-circle" class="w-4 h-4 text-brand-lime"></i> Mapeo de Keywords Transaccionales
                        </li>
                    </ul>
                </div>


                <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
                    <div class="data-card p-8 group relative overflow-hidden">
                        <div class="relative z-10">
                            <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                                <i data-lucide="target" class="w-6 h-6"></i>
                            </div>
                            <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Ingeniería Inversa <br/>de Contenidos</h3>
                            <p class="text-gray-500 text-xs leading-relaxed mb-6">
                                Identificamos exactamente qué piezas de contenido están generando el 80% del tráfico de tus competidores. Replicamos el éxito y mejoramos el valor.
                            </p>
                            <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: +200% Tráfico Relevante</div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300" alt="Code and Data" class="absolute top-0 right-0 w-32 opacity-5 grayscale group-hover:opacity-10 transition-opacity"/>
                    </div>


                    <div class="data-card p-8 group relative overflow-hidden">
                        <div class="relative z-10">
                            <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                                <i data-lucide="zap" class="w-6 h-6"></i>
                            </div>
                            <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Detección de <br/>Brechas de Mercado</h3>
                            <p class="text-gray-500 text-xs leading-relaxed mb-6">
                                Buscamos lo que la competencia ignora: preguntas de clientes sin respuesta y términos de búsqueda con baja competencia pero alta intención de compra.
                            </p>
                            <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Blue Ocean Strategy</div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300" alt="Global Network" class="absolute top-0 right-0 w-32 opacity-5 grayscale group-hover:opacity-10 transition-opacity"/>
                    </div>


                    <div class="data-card p-8 group">
                        <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                            <i data-lucide="bar-chart-3" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Análisis de <br/>Autoridad Competitiva</h3>
                        <p class="text-gray-500 text-xs leading-relaxed mb-6">
                            Desglosamos el perfil de enlaces de los líderes para entender su red de influencia y cómo posicionarnos a su nivel en menos de 12 meses.
                        </p>
                        <div class="text-brand-lime text-[10px] font-black uppercase tracking-widest">Resultado: Autoridad Acelerada</div>
                    </div>

                    <div class="data-card p-8 group">
                        <div class="w-12 h-12 bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-black transition-all">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-display font-bold uppercase text-white mb-4">Inteligencia de <br/>Audiencia</h3>
                        <p class="text-gray-500 text-xs leading-relaxed mb-6">
                            Estudiamos el comportamiento del usuario en los sitios rivales para diseñar una experiencia de navegación (UX) que convierta donde ellos fallan.
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
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">Análisis de Caso Real</span>
                    <h2 class="text-4xl font-display font-bold uppercase text-white mb-6">Captura de Mercado: <br/><span class="text-brand-lime italic">B2B SaaS Sector.</span></h2>
                    <p class="text-gray-400 text-sm leading-relaxed mb-8">
                        Para una plataforma de recursos humanos, analizamos a los 3 líderes globales del sector. Identificamos que el 60% de sus guías comparativas carecían de profundidad técnica. Generamos contenido superior "Data-Driven" que nos permitió superar a la competencia en el ranking para las keywords de mayor intención comercial en 4 meses.
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
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Data Visualization Report" class="rounded border border-brand-border grayscale opacity-40"/>
                        <div class="absolute inset-0 flex items-center justify-center p-6">

                            <div class="bg-brand-gray/90 backdrop-blur-md border border-brand-border p-6 rounded shadow-2xl w-full">
                                <div class="flex items-center justify-between mb-8">
                                    <span class="text-[10px] font-bold text-white uppercase tracking-widest">Competitor Comparison Matrix</span>
                                    <div class="flex gap-2">
                                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
                                        <div class="h-full bg-brand-lime w-[85%]"></div>
                                    </div>
                                    <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
                                        <div class="h-full bg-gray-400 w-[60%]"></div>
                                    </div>
                                    <div class="h-2 w-full bg-brand-border rounded overflow-hidden">
                                        <div class="h-full bg-gray-600 w-[45%]"></div>
                                    </div>
                                </div>
                                <div class="mt-10 grid grid-cols-2 gap-4">
                                    <div class="bg-brand-black p-4 border border-brand-border text-[9px] font-bold uppercase text-gray-500">Opportunity Gap: <span class="text-white">High</span></div>
                                    <div class="bg-brand-black p-4 border border-brand-border text-[9px] font-bold uppercase text-gray-500">Market Share: <span class="text-white">+12.4%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer class="py-32 bg-brand-black relative overflow-hidden">

        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Cyber Background" class="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"/>
        
        <div class="container mx-auto px-6 text-center relative z-10">
            <h2 class="font-display text-4xl md:text-6xl font-black uppercase text-white mb-8 tracking-tighter">
                ¿Sabes qué está haciendo <br/>tu <span class="text-brand-lime italic">competencia ahora?</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                Solicita un reporte preliminar de "Market Intelligence" y descubre dónde están tus mayores oportunidades de crecimiento orgánico.
            </p>
            <a href="index.html#contacto" class="inline-block bg-brand-lime text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform">
                Iniciar Investigación
            </a>

        </div>
    </footer>

      <Footer />
    </div>
  )
}
