import React, { useState, useEffect } from 'react';

// Tipos de TypeScript para la estructura modular
interface Articulo {
  slug: string;
  categoriaSlug: string;
  categoriaNombre: string;
  title: string;
  description: string;
  content: string;
}

interface Categoria {
  slug: string;
  nombre: string;
  articulos: Articulo[];
}

interface Props {
  categorias: Categoria[];
}

export default function BlogInteractivo({ categorias }: Props) {
  if (!categorias || categorias.length === 0) return null;

  // Iniciamos por defecto con la primera categoría y su primer artículo
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>(categorias[0]);
  const [articuloActivo, setArticuloActivo] = useState<Articulo>(categorias[0].articulos[0]);

  // Escuchamos los parámetros de la URL para redirecciones externas o del Index
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const temaParam = params.get('tema'); 
    const articuloParam = params.get('articulo');

    // Prioridad 1: Si el usuario dio clic en una tarjeta del Index (?articulo=slug)
    if (articuloParam) {
      const artEncontrado = categorias
        .flatMap(c => c.articulos)
        .find(a => a.slug === articuloParam);

      if (artEncontrado) {
        const catAsociada = categorias.find(c => c.slug === artEncontrado.categoriaSlug);
        if (catAsociada) {
          setCategoriaActiva(catAsociada);
          setArticuloActivo(artEncontrado);
          return; // Terminamos la ejecución
        }
      }
    }

    // Prioridad 2: Si el clic viene de la navegación general (?tema=slug)
    if (temaParam) {
      const catEncontrada = categorias.find(c => c.slug === temaParam);
      if (catEncontrada && catEncontrada.articulos.length > 0) {
        setCategoriaActiva(catEncontrada);
        setArticuloActivo(catEncontrada.articulos[0]);
      } else {
        // Si no es categoría, verificamos si es un slug de artículo viejo en el parámetro tema
        for (const cat of categorias) {
          const artEncontrado = cat.articulos.find(a => a.slug === temaParam);
          if (artEncontrado) {
            setCategoriaActiva(cat);
            setArticuloActivo(artEncontrado);
            break;
          }
        }
      }
    }
  }, [categorias]);

  // Manejar el clic en un Tema Principal (pestañas superiores)
  const seleccionarCategoria = (cat: Categoria) => {
    setCategoriaActiva(cat);
    // Validamos que la categoría contenga artículos antes de asignar el primero
    if (cat.articulos && cat.articulos.length > 0) {
      setArticuloActivo(cat.articulos[0]);
      const nuevaUrl = `${window.location.pathname}?tema=${cat.slug}`;
      window.history.pushState({ path: nuevaUrl }, '', nuevaUrl);
    }
  };

  // Manejar el clic en un Subtema/Pregunta (menú lateral)
  const seleccionarArticulo = (art: Articulo) => {
    setArticuloActivo(art);
    const nuevaUrl = `${window.location.pathname}?articulo=${art.slug}`;
    window.history.pushState({ path: nuevaUrl }, '', nuevaUrl);
  };

  return (
    <div className="flex flex-col gap-8 mt-4">
      
      {/* 1. NAVEGACIÓN SUPERIOR: Temas Generales (Pilares) */}
      <div className="flex flex-wrap gap-3 border-b border-[#2563EB]/20 pb-6">
        {categorias.map(cat => (
          <button
            key={cat.slug}
            onClick={() => seleccionarCategoria(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              cat.slug === categoriaActiva.slug
                ? 'bg-[#2563EB]/20 text-[#60A5FA] border-[#3B82F6] shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                : 'bg-[#0B111E] text-[#94A3B8] border-[#2563EB]/10 hover:text-white hover:border-[#2563EB]/40'
            }`}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. MENÚ LATERAL: Subtemas (Preguntas) */}
        <aside className="lg:col-span-1 space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-4 px-2">
            Artículos Relacionados
          </h2>
          <nav className="space-y-2">
            {categoriaActiva.articulos?.map((art) => {
              const esActivo = art.slug === articuloActivo.slug;
              return (
                <button
                  key={art.slug}
                  onClick={() => seleccionarArticulo(art)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    esActivo
                      ? 'bg-[#2563EB]/10 text-[#3B82F6] border-[#2563EB]/30 shadow-[0_0_15px_rgba(37,99,235,0.05)]'
                      : 'text-[#94A3B8] border-transparent hover:text-white hover:bg-[#0B111E]'
                  }`}
                >
                  {art.title}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* 3. CONTENIDO PRINCIPAL: Texto formateado con Tailwind inyectado */}
        <section className="lg:col-span-3 bg-[#0B111E] rounded-xl p-6 sm:p-8 border border-[#2563EB]/10 shadow-[0_4px_30px_rgba(5,7,15,0.4)] relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <article>
            <header className="mb-6 border-b border-[#2563EB]/10 pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                {articuloActivo.title}
              </h2>
              <p className="text-sm text-[#60A5FA] italic">
                {articuloActivo.description}
              </p>
            </header>

            <div 
              className="
                text-[#94A3B8] text-base leading-relaxed tracking-wide
                [&>p]:mb-6 
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:tracking-tight
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#3B82F6] [&>blockquote]:pl-5 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:bg-[#2563EB]/5 [&>blockquote]:rounded-r-lg [&>blockquote]:text-[#60A5FA]
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-3 [&>li]:pl-2
                [&>strong]:text-white [&>strong]:font-semibold
              "
              dangerouslySetInnerHTML={{ __html: articuloActivo.content }}
            />
          </article>
        </section>
      </div>
    </div>
  );
}