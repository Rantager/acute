# 💻 CÓDIGO - Ejemplos de Referencia

## 1. Navbar Links Actualizados

### ✅ Link a Hero Section
```html
<!-- Apunta a: <section id="hero"> -->
<a href="#hero" class="...">Inicio</a>
```

### ✅ Link a Servicios Section
```html
<!-- Apunta a: <section id="servicios"> -->
<a href="#servicios" class="...">Servicios</a>
```

### ✅ Link a Portfolio Section
```html
<!-- Apunta a: <section id="portfolio"> -->
<a href="#portfolio" class="...">Proyectos</a>
```

### ✅ Link a About Section
```html
<!-- Apunta a: <section id="about"> -->
<a href="#about" class="...">Metodología</a>
```

### ✅ Link a Contact Section (CTA)
```html
<!-- Apunta a: <section id="contact"> -->
<a href="#contact" class="...">Cotizar Proyecto</a>
```

---

## 2. Secciones con IDs

### ✅ Hero Section
```astro
<!-- ID DE SECCIÓN: #hero -->
<section id="hero" class="scroll-mt-20 relative overflow-hidden ...">
  <!-- Contenido del Hero -->
</section>
```

### ✅ Servicios Section (NUEVO)
```astro
<!-- ID DE SECCIÓN: #servicios -->
<section id="servicios" class="mt-16 scroll-mt-20">
  <h2>Soluciones completas de software a medida.</h2>
  <!-- 3 tarjetas de servicios -->
</section>
```

### ✅ About Section
```astro
<!-- ID DE SECCIÓN: #about (Metodología) -->
<section id="about" class="scroll-mt-20 mt-16 rounded-[2rem] ...">
  <!-- Contenido del About -->
</section>
```

### ✅ Portfolio Section
```astro
<!-- ID DE SECCIÓN: #portfolio (Proyectos) -->
<section id="portfolio" class="scroll-mt-20 mt-16">
  <!-- Grid de proyectos -->
</section>
```

### ✅ Contact Section
```astro
<!-- ID DE SECCIÓN: #contact (Contacto & Cotización) -->
<section id="contact" class="scroll-mt-20 mt-16 rounded-[2rem] ...">
  <!-- Formulario de contacto -->
</section>
```

---

## 3. CSS para Smooth Scroll

### ✅ En global.css
```css
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Evita que navbar sticky tape el contenido */
[id] {
  scroll-margin-top: 6rem; /* 96px de espacio */
}
```

---

## 4. Componente Card Mejorado

### ✅ Mapeo de Tecnologías a Iconos
```astro
---
const getTechIcon = (tech: string) => {
  const techIcons: Record<string, string> = {
    'Node.js': '🟢',
    'React': '⚛️',
    'Vue': '💚',
    'Astro': '🚀',
    'TypeScript': '🔵',
    'PostgreSQL': '🐘',
    'AWS': '☁️',
    'GraphQL': '🔷',
    'Microservicios': '🔗',
    'Docker': '🐳',
    'Payment API': '💳',
    'Tailwind': '🎨',
    'Swift': '🍎',
    'Kotlin': '🟣',
    'React Native': '⚛️',
    'Flutter': '🦋',
  };
  return techIcons[tech] || '⚙️';
};
---
```

### ✅ Render de Tags con Iconos
```astro
{tags.length > 0 && (
  <div class="mt-5 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <div class="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-300 hover:border-brand-500/50 hover:bg-slate-800/60 transition-all duration-300">
        <span class="text-base" aria-label={`Logo ${tag}`}>
          {getTechIcon(tag)}
        </span>
        <span class="font-medium">{tag}</span>
      </div>
    ))}
  </div>
)}

<!-- TODO: Reemplazar emoji con logo/imagen real de la tecnología -->
```

---

## 5. Estructura Completa de index.astro

### ✅ Import y Layout
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/home/Hero.astro';
import Services from '../components/home/Services.astro';     <!-- NEW -->
import About from '../components/home/About.astro';
import Portfolio from '../components/home/Portfolio.astro';
import ContactQuote from '../components/contact/ContactQuote.astro';
---

<Layout
  title="Acute | Desarrollo de software a medida"
  description="Acute crea aplicaciones web y sistemas escalables..."
  image="https://www.acute.dev/og-image.png"
>
  <main class="space-y-16">
    <!-- #hero -->
    <Hero />
    
    <!-- #servicios (NUEVO) -->
    <Services />
    
    <!-- #about (Metodología) -->
    <About />
    
    <!-- #portfolio (Proyectos) -->
    <Portfolio />
    
    <!-- #contact (Contacto) -->
    <ContactQuote client:load />
  </main>
</Layout>
```

---

## 6. Nuevo Componente Services.astro

### ✅ Estructura Básica
```astro
---
const services = [
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones web escalables, responsivas y de alto rendimiento.',
    icon: '🌐',
    tags: ['React', 'Vue', 'Astro', 'TypeScript']
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas e híbridas con experiencia fluida.',
    icon: '📱',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    title: 'Sistemas a la Medida',
    description: 'Soluciones empresariales personalizadas.',
    icon: '⚙️',
    tags: ['Node.js', 'PostgreSQL', 'AWS', 'Docker']
  }
];
---

<!-- ID DE SECCIÓN: servicios -->
<section id="servicios" class="mt-16 scroll-mt-20">
  <p class="text-sm uppercase tracking-[0.3em] text-brand-400">Servicios</p>
  <h2 class="mt-3 text-3xl font-semibold text-white">
    Soluciones completas de software a medida.
  </h2>
  
  <div class="mt-10 grid gap-6 lg:grid-cols-3">
    {services.map((service) => (
      <article class="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6">
        <div class="mb-4 text-4xl">{service.icon}</div>
        <h3 class="text-xl font-semibold text-white">{service.title}</h3>
        <p class="mt-3 text-slate-300 leading-7">{service.description}</p>
        
        <div class="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span class="rounded-full border border-slate-700 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>
```

---

## 7. JavaScript del Navbar (Menú Móvil)

### ✅ Script para Toggle de Menú
```javascript
<script>
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });
</script>
```

---

## 8. Layout.astro con Navbar y Footer

### ✅ Estructura Principal
```astro
---
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
---

<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Meta tags... -->
  </head>
  
  <body class="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col">
    <!-- Navbar sticky en la parte superior -->
    <Navbar companyName="Acute" logoText="[Logo Empresa]" />
    
    <!-- Main content (flex-1 para que crezca) -->
    <main class="flex-1">
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
    
    <!-- Footer al final de la página -->
    <Footer 
      companyName="Acute"
      companyDescription="Transformamos ideas..."
      email="contacto@acute.dev"
      phone="+57 (123) 456-7890"
      location="Medellín, Colombia"
    />
  </body>
</html>
```

---

## 9. Button Component (Hero)

### ✅ Ejemplo de Uso
```astro
<div class="mt-10 flex flex-col gap-4 sm:flex-row">
  <!-- Link a Contact (#contact) -->
  <Button href="#contact" label="Cotiza tu proyecto" />
  
  <!-- Link a Portfolio (#portfolio) -->
  <Button href="#portfolio" label="Ver casos de éxito" variant="secondary" />
</div>
```

---

## 10. Agregando Más Tecnologías al Mapeo

### ✅ Si Necesitas Agregar Nuevas Tecnologías
En `Card.astro`, dentro de `getTechIcon()`:

```javascript
const techIcons: Record<string, string> = {
  'Node.js': '🟢',
  'React': '⚛️',
  // ... existentes ...
  
  // AGREGAR NUEVAS AQUÍ:
  'Python': '🐍',
  'Ruby': '💎',
  'Go': '🐹',
  'Rust': '🦀',
  'Java': '☕',
  'C#': '#️⃣',
  'MongoDB': '🍃',
  'Redis': '🔴',
  'Kubernetes': '☸️',
  'Next.js': '▲',
  'Express': '⚡',
  'Django': '🎸',
  'Laravel': '🎭',
};
```

---

## 11. Agregar Más Servicios

### ✅ En Services.astro
```astro
const services = [
  // ... servicios existentes ...
  {
    title: 'Consultoría Técnica',
    description: 'Auditorías de arquitectura, optimización y roadmaps.',
    icon: '🎯',
    tags: ['Planning', 'Architecture', 'DevOps']
  },
];
```

---

## 12. Orden de Secciones en Una Página

### ✅ Estructura Recomendada
```
1. #hero        - Hero Section (primer fold)
2. #servicios   - Servicios (NEW)
3. #about       - About / Metodología
4. #portfolio   - Proyectos / Portfolio
5. #contact     - Contacto / Cotización
```

### ⚠️ NO cambies el orden de los IDs, solo agregua nuevas secciones

---

## 13. Tailwind Classes Utilizadas

### ✅ Clases Importantes
```
scroll-mt-20        → scroll-margin-top: 5rem (80px)
scroll-smooth       → scroll-behavior: smooth
backdrop-blur-md    → Glassmorphism effect
sticky top-0 z-50  → Navbar positioning
space-y-16         → Vertical spacing entre secciones
gap-2              → Spacing entre items
hover:             → Efectos al pasar el mouse
transition-all     → Transiciones fluidas
duration-300       → 300ms transition speed
```

---

## 14. Verificación de IDs (Checklist)

### ✅ Todos los IDs deben estar presentes
```
[ ] <section id="hero"> en Hero.astro
[ ] <section id="servicios"> en Services.astro
[ ] <section id="about"> en About.astro
[ ] <section id="portfolio"> en Portfolio.astro
[ ] <section id="contact"> en ContactQuote.astro
```

### ✅ Todos los links deben existir
```
[ ] href="#hero"
[ ] href="#servicios"
[ ] href="#about"
[ ] href="#portfolio"
[ ] href="#contact"
```

---

## 15. Testing en Console

### ✅ Verificar en DevTools (F12 → Console)

```javascript
// Verificar que existen todos los IDs
console.log(document.getElementById('hero'));           // <section>
console.log(document.getElementById('servicios'));      // <section>
console.log(document.getElementById('portfolio'));      // <section>
console.log(document.getElementById('about'));          // <section>
console.log(document.getElementById('contact'));        // <section>

// Si alguno devuelve null, falta el ID en ese componente
```

---

**¡Ahora tienes toda la referencia de código para entender y modificar tu navegación! 🚀**
