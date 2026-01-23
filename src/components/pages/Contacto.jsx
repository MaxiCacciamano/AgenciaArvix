import React from 'react'
import { Menu } from '../Menu'
import { Footer } from '../Footer'
import emailjs from 'emailjs-com'

export const Contacto = () => {

    const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'SERVICE_ID',
    'TEMPLATE_ID',
    e.target,
    'PUBLIC_KEY'
  )
  .then(() => {
    alert('Mensaje enviado correctamente')
  })
  .catch(() => {
    alert('Error al enviar el mensaje')
  })
}


  return (
     <div className="relative w-full min-h-screen bg-brand-black text-brand-white antialiased selection:bg-brand-lime selection:text-black overflow-x-hidden font-sans">
    
          <div className="noise-overlay"></div>
          <Menu/>
     <div className="bg-brand-black text-brand-white antialiased font-sans">

    <div className="noise-overlay"></div>

    <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden flex items-center">

        <div className="absolute -right-20 top-1/4 text-stroke font-display text-[15rem] font-black pointer-events-none select-none hidden xl:block uppercase rotate-90">
            Contact
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-32 items-start">
                

                <div className="lg:col-span-5 xl:pr-12"> 
                    <div className="max-w-xl">
                        <span className="inline-block text-brand-lime text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                            Inicia el Proceso
                        </span>
                        
                        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] uppercase tracking-tighter mb-10">
                            Hablemos de tu<br/><span className="italic text-brand-lime">Crecimiento.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16">
                            Analizamos su presencia digital con rigor técnico. Cuéntenos sus objetivos y determinaremos la viabilidad de una alianza estratégica.
                        </p>


                        <div className="space-y-10 mb-16">
                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 text-brand-lime group-hover:scale-110 transition-transform duration-300">
                                    <i data-lucide="mail" className="w-6 h-6"></i>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Consultas Directas</span>
                                    <a href="#"className="font-display text-xl font-semibold hover:text-brand-lime transition-colors">+549 353 2679392<br/></a>
                                    <a href="mailto:consultas@agenciaarvix.com" className="font-display text-xl font-semibold hover:text-brand-lime transition-colors">consultas@agenciaarvix.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="mt-1 text-brand-lime">
                                    <i data-lucide="map-pin" className="w-6 h-6"></i>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Sede Operativa</span>
                                    <span className="font-display text-xl font-semibold">Nueva cordoba<br/>Córdoba capital, ARGENTINA.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="mt-1 text-brand-lime">
                                    <i data-lucide="map-pin" className="w-6 h-6"></i>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-px bg-brand-border border border-brand-border overflow-hidden rounded-sm">
                            <div className="bg-brand-black p-6 hover:bg-brand-gray transition-colors">
                                <span className="block font-display text-2xl font-bold text-white mb-1">100%</span>
                                <span className="block text-[9px] font-black uppercase tracking-widest text-gray-500">Confidencialidad</span>
                            </div>
                            <div className="bg-brand-black p-6 hover:bg-brand-gray transition-colors">
                                <span className="block font-display text-2xl font-bold text-white mb-1">Exclusividad</span>
                                <span className="block text-[9px] font-black uppercase tracking-widest text-gray-500">Por Vertical</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-7">
                    <div className="bg-gradient-to-br from-brand-dark to-brand-black border border-brand-border p-8 md:p-12 lg:p-14 shadow-2xl relative rounded-sm">
                        

                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <i data-lucide="shield-check" className="w-16 h-16"></i>
                        </div>

                        <form onSubmit={sendEmail} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                

                                <div className="relative group">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-brand-lime">Nombre y Apellido</label>
                                    <input type="text" name="name" required placeholder="Ej. Juan Pérez"
                                        className="w-full bg-transparent border-b border-brand-border py-3 text-white focus:outline-none focus:border-brand-lime transition-all placeholder:text-gray-800"/>
                                </div>

                                <div className="relative group">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-brand-lime">Email Corporativo</label>
                                    <input type="email" name="email" required placeholder="jperez@empresa.com"
                                        className="w-full bg-transparent border-b border-brand-border py-3 text-white focus:outline-none focus:border-brand-lime transition-all placeholder:text-gray-800"/>
                                </div>


                                <div className="relative group">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-brand-lime">Empresa</label>
                                    <input type="text" name="empresa" placeholder="Nombre de su organización"
                                        className="w-full bg-transparent border-b border-brand-border py-3 text-white focus:outline-none focus:border-brand-lime transition-all placeholder:text-gray-800"/>
                                </div>


                                <div className="relative group">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-brand-lime">Área de Interés</label>
                                    <div className="relative">
                                        <select className="w-full bg-transparent border-b border-brand-border py-3 text-white focus:outline-none focus:border-brand-lime transition-all cursor-pointer">
                                            <option className="bg-brand-black" value="seo">Ecommerce</option>
                                            <option className="bg-brand-black" value="seo">Pagina web estrategica</option>
                                            <option className="bg-brand-black" value="seo">SEO Técnico y Semántico</option>
                                            <option className="bg-brand-black" value="b2b">Adquisición B2B SaaS</option>
                                            <option className="bg-brand-black" value="audit">Auditoría de Search Intelligence</option>
                                            <option className="bg-brand-black" value="other">Otros proyectos complejos</option>
                                        </select>
                                        <i data-lucide="chevron-down" className="absolute right-0 bottom-3 w-4 h-4 text-gray-600 pointer-events-none group-focus-within:text-brand-lime transition-colors"></i>
                                    </div>
                                </div>


                                <div className="md:col-span-2 relative group">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 transition-colors group-focus-within:text-brand-lime">Breve contexto del desafío</label>
                                    <textarea rows="3" placeholder="Describa sus objetivos de visibilidad..."
                                        className="w-full bg-transparent border-b border-brand-border py-3 text-white focus:outline-none focus:border-brand-lime transition-all resize-none placeholder:text-gray-800"></textarea>
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
                                <button type="submit" className="w-full sm:w-auto bg-brand-lime text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-[12px] hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-4 group">
                                    Solicitar Auditoría
                                    <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                                </button>
                                
                                <p className="text-[10px] text-gray-600 max-w-[240px] leading-relaxed text-center sm:text-left">
                                    Al enviar, acepta nuestra política de datos bajo estándares internacionales.
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 flex items-center justify-end gap-3 px-2">
                        <div className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Q1 2024: 2 Slots Disponibles</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
          <Footer />
      </div>
      </div>
  )
}
