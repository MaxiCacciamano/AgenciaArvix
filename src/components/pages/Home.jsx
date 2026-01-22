import React from 'react';
import { Menu } from '../Menu.jsx';
import { Footer } from '../Footer.jsx';


export default function Home() {
  return (
 <div className="relative w-full min-h-screen bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black overflow-x-hidden font-sans">

      <div className="noise-overlay"></div>
      <Menu/>


     <header class="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden border-b border-brand-border grid-bg">
          <div class="container mx-auto px-6 relative z-10">
              <div class="max-w-5xl">
                  <div class="inline-flex items-center gap-2 border border-brand-lime/30 bg-brand-lime/5 px-4 py-1.5 mb-10 rounded-full">
                      <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.2em]">Ecommerce de Alto Rendimiento</span>
                  </div>

                  <h1 class="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-10 tracking-tighter uppercase">
                      No creamos webs.<br/>Diseñamos <span class="text-brand-lime">ventas.</span>
                  </h1>

                  <div class="grid md:grid-cols-12 gap-10">
                      <div class="md:col-span-7">
                          <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
                              Desarrollo web estratégico con <span class="text-white font-medium italic underline decoration-brand-lime">investigación de mercado integrada</span>. Si no sabés cómo vende tu competencia, estás perdiendo antes de empezar.
                          </p>

                          <div class="flex flex-col sm:flex-row gap-4 mb-16">
                              <a href="#contacto" class="bg-brand-lime text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] transition-all shadow-[0_10px_30px_-10px_rgba(204,255,0,0.3)] flex items-center justify-center gap-3">
                                  Solicitar Diagnóstico <i data-lucide="arrow-right" class="w-4 h-4"></i>
                              </a>
                          </div>

                          <div class="flex flex-wrap gap-y-3">
                              <div class="flex items-center gap-3">
                                  <i data-lucide="search" class="w-5 h-5 text-brand-lime"></i>
                                  <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Benchmark Competitivo</span>
                              </div>
                              <div class="flex items-center gap-3">
                                  <i data-lucide="zap" class="w-5 h-5 text-brand-lime"></i>
                                  <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">SEO Técnico Nativo</span>
                              </div>
                              <div class="flex items-center gap-3">
                                  <i data-lucide="shield-check" class="w-5 h-5 text-brand-lime"></i>
                                  <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">30 Días de Optimización</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div class="absolute inset-x-0 bottom-0 w-full border-t border-brand-border py-6 bg-brand-black/80 backdrop-blur-sm pointer-events-auto">
              <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div class="flex items-center gap-6 opacity-30 grayscale contrast-125">
                      <span class="font-display font-black text-xl italic tracking-tighter">TECHCORP</span>
                      <span class="font-display font-black text-xl italic tracking-tighter">MODA.BA</span>
                      <span class="font-display font-black text-xl italic tracking-tighter">GLOBAL_S</span>
                  </div>
                  <div class="flex items-center gap-4 border-l border-brand-border pl-8">
                      <div class="flex -space-x-2">
                          <div class="w-8 h-8 rounded-full bg-brand-gray border border-brand-border"></div>
                          <div class="w-8 h-8 rounded-full bg-brand-gray border border-brand-border"></div>
                      </div>
                      <p class="text-[10px] text-gray-500 uppercase font-bold leading-tight">
                          "El benchmark nos ahorró meses de <br/>errores." — <span class="text-white">Director en TechCorp</span>
                      </p>
                  </div>
              </div>
          </div>
      </header>


      <section class="py-32 bg-brand-black border-b border-brand-border relative z-10">
          <div class="container mx-auto px-6">
              <div class="max-w-4xl mx-auto text-center mb-24">
                  <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Diagnóstico de Mercado</span>
                  <h2 class="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-8 leading-tight">
                      Tu sitio actual es una <span class="text-stroke text-white opacity-40">hoja en blanco</span> en un mar de ruido.
                  </h2>
              </div>

              <div class="grid md:grid-cols-3 gap-8">
                  <div class="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                      <i data-lucide="alert-circle" class="w-8 h-8 text-red-500 mb-6"></i>
                      <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Sin estrategia competitiva</h3>
                      <p class="text-gray-500 text-sm leading-relaxed">Copiás plantillas de otros sin saber por qué ellos venden y vos no. Estás operando a ciegas.</p>
                  </div>
                  <div class="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                      <i data-lucide="trending-down" class="w-8 h-8 text-red-500 mb-6"></i>
                      <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Fugas de Conversión</h3>
                      <p class="text-gray-500 text-sm leading-relaxed">Mucho tráfico, cero ventas. Tu diseño es "lindo" pero no guía al usuario hacia la transacción final.</p>
                  </div>
                  <div class="p-10 border border-brand-border bg-brand-gray/30 hover:bg-brand-gray/50 transition-all">
                      <i data-lucide="clock" class="w-8 h-8 text-red-500 mb-6"></i>
                      <h3 class="text-white font-display font-bold text-xl uppercase mb-4">Lentitud Técnica</h3>
                      <p class="text-gray-500 text-sm leading-relaxed">Cada segundo que tarda en cargar, perdés un 20% de tus clientes potenciales. Google te ignora.</p>
                  </div>
              </div>
          </div>
      </section>


      <section id="solucion" class="py-32 bg-brand-gray/20 border-b border-brand-border relative z-10 overflow-hidden">
          <div class="container mx-auto px-6">
              <div class="flex flex-col lg:flex-row gap-20 items-center">
                  <div class="lg:w-1/2">
                      <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">La Solución</span>
                      <h2 class="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-10 leading-none">
                          Ingeniería<br/>Comercial.
                      </h2>
                      <p class="text-xl text-gray-400 mb-10 leading-relaxed">
                          No somos artistas, somos arquitectos de ventas. Aplicamos un <span class="text-white font-bold">Método Riguroso</span> basado en datos, no en opiniones. Investigamos a 5 competidores clave antes de escribir una sola línea de código.
                      </p>
                      <ul class="space-y-6">
                          <li class="flex items-start gap-4">
                              <div class="mt-1 bg-brand-lime p-1 rounded-sm"><i data-lucide="check" class="w-3 h-3 text-black"></i></div>
                              <div>
                                  <span class="block text-white font-bold uppercase text-xs tracking-wider">Benchmark Competitivo</span>
                                  <p class="text-gray-500 text-sm">Entendemos qué hacen bien (y mal) los líderes de tu nicho.</p>
                              </div>
                          </li>
                          <li class="flex items-start gap-4">
                              <div class="mt-1 bg-brand-lime p-1 rounded-sm"><i data-lucide="check" class="w-3 h-3 text-black"></i></div>
                              <div>
                                  <span class="block text-white font-bold uppercase text-xs tracking-wider">Arquitectura Escalable</span>
                                  <p class="text-gray-500 text-sm">Webs preparadas para recibir miles de visitas sin colapsar.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="lg:w-1/2 relative">
                      <div class="aspect-square border border-brand-lime/20 flex items-center justify-center p-12">
                          <div class="w-full h-full border border-brand-border relative overflow-hidden group">
                              <div class="absolute inset-0 bg-brand-lime/5 group-hover:bg-brand-lime/10 transition-all"></div>
                              <div class="p-8">
                                  <span class="block text-[10px] font-bold text-brand-lime uppercase tracking-widest mb-4">Competitive Analysis 1.0</span>
                                  <div class="space-y-4">
                                      <div class="h-2 w-full bg-brand-border rounded"></div>
                                      <div class="h-2 w-3/4 bg-brand-border rounded"></div>
                                      <div class="h-2 w-1/2 bg-brand-lime/50 rounded"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <section class="py-32 bg-brand-black border-b border-brand-border">
          <div class="container mx-auto px-6">
              <h2 class="font-display text-4xl font-bold text-white uppercase mb-20">Anatomía de tu nueva Web</h2>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-border">
                  <div class="p-10 border-r border-b lg:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                      <span class="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">01 / Investigación</span>
                      <h3 class="text-xl font-display font-bold uppercase mb-4">Benchmark</h3>
                      <ul class="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                          <li>• Audit de 5 competidores</li>
                          <li>• Análisis de flujos de pago</li>
                          <li>• Mapa de oportunidades</li>
                      </ul>
                  </div>
                  <div class="p-10 border-r border-b lg:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                      <span class="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">02 / Diseño</span>
                      <h3 class="text-xl font-display font-bold uppercase mb-4">UX/UI Pro</h3>
                      <ul class="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                          <li>• Interfaces de conversión</li>
                          <li>• Mobile-First nativo</li>
                          <li>• Branding Coherente</li>
                      </ul>
                  </div>
                  <div class="p-10 border-r border-b md:border-b-0 border-brand-border hover:bg-white hover:text-black transition-all group">
                      <span class="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">03 / Tech</span>
                      <h3 class="text-xl font-display font-bold uppercase mb-4">Desarrollo</h3>
                      <ul class="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                          <li>• Código Limpio</li>
                          <li>• Integración de CRM/ERP</li>
                          <li>• Velocidad de carga A+</li>
                      </ul>
                  </div>
                  <div class="p-10 hover:bg-white hover:text-black transition-all group">
                      <span class="block text-xs font-bold uppercase tracking-widest mb-6 text-brand-lime group-hover:text-black">04 / Posicionamiento</span>
                      <h3 class="text-xl font-display font-bold uppercase mb-4">SEO Técnico</h3>
                      <ul class="text-[11px] space-y-2 uppercase tracking-wide opacity-70">
                          <li>• Estructura de Datos</li>
                          <li>• Core Web Vitals</li>
                          <li>• Indexación Express</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>


      <section class="py-32 bg-brand-gray/10 relative z-10">
          <div class="container mx-auto px-6">
              <div class="grid md:grid-cols-2 gap-12">
                  <div class="p-12 border border-brand-border bg-brand-black">
                      <h3 class="font-display text-2xl font-bold text-brand-lime uppercase mb-8">Sí es para vos si...</h3>
                      <ul class="space-y-4">
                          <li class="flex gap-4 items-center text-sm text-gray-300">
                              <i data-lucide="check-circle" class="w-5 h-5 text-brand-lime"></i>
                              Buscás un sistema de ventas, no solo "estar en internet".
                          </li>
                          <li class="flex gap-4 items-center text-sm text-gray-300">
                              <i data-lucide="check-circle" class="w-5 h-5 text-brand-lime"></i>
                              Tenés un negocio real que querés escalar digitalmente.
                          </li>
                          <li class="flex gap-4 items-center text-sm text-gray-300">
                              <i data-lucide="check-circle" class="w-5 h-5 text-brand-lime"></i>
                              Entendés que lo barato sale caro en infraestructura técnica.
                          </li>
                      </ul>
                  </div>
                  <div class="p-12 border border-brand-border bg-brand-black opacity-50">
                      <h3 class="font-display text-2xl font-bold text-white uppercase mb-8">No es para vos si...</h3>
                      <ul class="space-y-4">
                          <li class="flex gap-4 items-center text-sm text-gray-500">
                              <i data-lucide="x-circle" class="w-5 h-5 text-gray-600"></i>
                              Buscás la cotización más barata del mercado.
                          </li>
                          <li class="flex gap-4 items-center text-sm text-gray-500">
                              <i data-lucide="x-circle" class="w-5 h-5 text-gray-600"></i>
                              No estás dispuesto a dedicar tiempo al análisis de tu negocio.
                          </li>
                          <li class="flex gap-4 items-center text-sm text-gray-500">
                              <i data-lucide="x-circle" class="w-5 h-5 text-gray-600"></i>
                              Solo querés un "lavado de cara" estético sin fondo técnico.
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>


      <section id="proceso" class="py-32 bg-brand-black border-y border-brand-border relative z-10">
          <div class="container mx-auto px-6">
              <div class="mb-24">
                  <span class="text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">El Método</span>
                  <h2 class="font-display text-4xl md:text-6xl font-bold text-white uppercase">Siete pasos al Éxito</h2>
              </div>

              <div class="space-y-4">
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">01</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Onboarding & Objetivos</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">02</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Benchmark de Competencia</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">03</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Arquitectura de Información</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">04</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Diseño UX/UI de Alta Fidelidad</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">05</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Desarrollo & QA</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">06</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Lanzamiento & SEO</h4>
                  </div>
                  <div class="group border-b border-brand-border pb-6 flex gap-10 items-center hover:pl-6 transition-all">
                      <span class="font-display text-3xl font-bold text-brand-border group-hover:text-brand-lime">07</span>
                      <h4 class="text-xl font-bold text-gray-400 group-hover:text-white uppercase transition-colors">Optimización Post-Lanzamiento (30D)</h4>
                  </div>
              </div>
          </div>
      </section>

      <section class="py-32 bg-brand-gray/30">
          <div class="container mx-auto px-6">
              <h2 class="font-display text-3xl font-bold text-white uppercase mb-16">Pasos Posteriores <span class="text-gray-600 block text-lg font-sans normal-case mt-2">Potenciá tu activo una vez lanzado</span></h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div class="p-8 bg-brand-black border border-brand-border">
                      <h4 class="font-bold text-white mb-4 uppercase text-xs tracking-widest">SEO Avanzado</h4>
                      <p class="text-gray-500 text-xs leading-relaxed">Posicionamiento de contenido para tráfico orgánico de largo plazo.</p>
                  </div>
                  <div class="p-8 bg-brand-black border border-brand-border">
                      <h4 class="font-bold text-white mb-4 uppercase text-xs tracking-widest">Google Ads (SEM)</h4>
                      <p class="text-gray-500 text-xs leading-relaxed">Tráfico inmediato y segmentado para productos clave.</p>
                  </div>
                  <div class="p-8 bg-brand-black border border-brand-border">
                      <h4 class="font-bold text-white mb-4 uppercase text-xs tracking-widest">Branding</h4>
                      <p class="text-gray-500 text-xs leading-relaxed">Refuerzo de identidad visual para ganar autoridad de marca.</p>
                  </div>
                  <div class="p-8 bg-brand-black border border-brand-border">
                      <h4 class="font-bold text-white mb-4 uppercase text-xs tracking-widest">CRO / Optimización</h4>
                      <p class="text-gray-500 text-xs leading-relaxed">Análisis de mapas de calor para maximizar cada dólar invertido.</p>
                  </div>
              </div>
          </div>
      </section>


      <section id="paquete" class="py-32 bg-brand-lime text-black relative z-10 overflow-hidden">
          <div class="container mx-auto px-6">
              <div class="bg-black text-white p-12 md:p-20 relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-8">
                      <i data-lucide="sparkles" class="w-12 h-12 text-brand-lime opacity-20"></i>
                  </div>

                  <div class="relative z-10">
                      <span class="bg-brand-lime text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-10 inline-block">Plan Recomendado</span>
                      <h2 class="font-display text-4xl md:text-7xl font-black uppercase leading-none mb-10">
                          Pack Full:<br/>Tienda + Benchmark + 30 Días
                      </h2>

                      <div class="grid md:grid-cols-2 gap-12 items-end">
                          <div>
                              <ul class="space-y-4 mb-12">
                                  <li class="flex gap-3 items-center text-sm font-bold uppercase tracking-wide"><i data-lucide="check" class="w-5 h-5 text-brand-lime"></i> Desarrollo Web Premium</li>
                                  <li class="flex gap-3 items-center text-sm font-bold uppercase tracking-wide"><i data-lucide="check" class="w-5 h-5 text-brand-lime"></i> Informe de Benchmark (5 Competidores)</li>
                                  <li class="flex gap-3 items-center text-sm font-bold uppercase tracking-wide"><i data-lucide="check" class="w-5 h-5 text-brand-lime"></i> Setup SEO Técnico Avanzado</li>
                                  <li class="flex gap-3 items-center text-sm font-bold uppercase tracking-wide"><i data-lucide="check" class="w-5 h-5 text-brand-lime"></i> Soporte & Optimización Post-Venta</li>
                              </ul>
                              <div class="border-t border-brand-border pt-8">
                                  <span class="text-xs text-gray-500 uppercase tracking-widest">Resultado Esperado</span>
                                  <p class="text-xl font-display font-medium text-brand-lime mt-2 italic">Una plataforma de venta validada contra el mercado y lista para escalar facturación desde el día 1.</p>
                              </div>
                          </div>
                          <div class="text-right">
                              <a href="#contacto" class="inline-block bg-brand-lime text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white transition-all w-full md:w-auto text-center">
                                  Iniciar Ahora
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="absolute -bottom-10 -left-10 text-[20rem] font-black text-black opacity-5 pointer-events-none select-none uppercase">PRO</div>
      </section>


      <section id="contacto" class="py-32 bg-brand-black relative grid-bg">
          <div class="container mx-auto px-6 text-center">
              <h2 class="font-display text-5xl md:text-9xl font-bold text-white uppercase mb-10 tracking-tighter leading-[0.8]">
                  Hagamos un <br/><span class="text-brand-lime">Upgrade.</span>
              </h2>
              <p class="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                  No aceptamos a todos los clientes. Solo a aquellos que ven su web como un negocio y no como un costo. ¿Sos uno de ellos?
              </p>
              <div class="flex flex-col md:flex-row justify-center gap-6">
                  <a href="mailto:diagnotico@agencia.com" class="group bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-brand-lime transition-all flex items-center justify-center gap-3">
                      Solicitar Diagnóstico Sin Costo <i data-lucide="mail" class="w-4 h-4 group-hover:scale-110 transition-transform"></i>
                  </a>
              </div>
              <div class="mt-12 flex items-center justify-center gap-2 opacity-40">
                  <div class="w-1.5 h-1.5 bg-brand-lime rounded-full"></div>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-white">Método validado por expertos argentinos</span>
              </div>
          </div>
      </section>


      <Footer />
  </div>



  );
}

