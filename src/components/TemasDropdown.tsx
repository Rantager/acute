import React from 'react';

// Temas reales y de nicho sobre desarrollo de software
const TEMAS = [
  { slug: 'mitos-realidades', nombre: 'Mitos y Realidades' },
  { slug: 'diccionario-tecnologico', nombre: 'Diccionario Tecnológico' },
  { slug: 'operacion-inteligente', nombre: 'Operación Inteligente' },
  { slug: 'seguridad-control', nombre: 'Seguridad y Control' },
  { slug: 'crecimiento-caos', nombre: 'Crecimiento sin Caos' },
  { slug: 'experiencia-cliente', nombre: 'Experiencia del Cliente' },
  { slug: 'velocidad-rendimiento', nombre: 'Velocidad y Rendimiento' },
  { slug: 'visibilidad-digital', nombre: 'Visibilidad Digital' }
];

export default function TemasDropdown() {
  return (
    <div className="relative inline-block group py-4">
      {/* Texto de navegación - Ahora dice Blog y mantiene tu estilo exacto */}
      <button className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300 text-sm font-medium relative flex items-center gap-1 focus:outline-none">
        <span>Blog</span>
        <svg 
          className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 transition-transform group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
      </button>

      {/* Menú Desplegable */}
      <div className="absolute left-0 mt-1 w-64 bg-[#0B111E]/95 backdrop-blur-md rounded-lg shadow-[0_10px_30px_rgba(5,7,15,0.6)] border border-[#2563EB]/20 py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
        {TEMAS.map(tema => (
          <a 
            key={tema.slug}
            href={`/blog?tema=${tema.slug}`}
            className="block px-4 py-2.5 text-sm text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#2563EB]/10 transition-colors duration-200 font-medium"
          >
            {tema.nombre}
          </a>
        ))}
      </div>
    </div>
  );
}