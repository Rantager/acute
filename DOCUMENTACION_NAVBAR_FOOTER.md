
# Documentación: Navbar y Footer - Acute Dev

## 📋 Descripción General

Este documento describe la estructura, características y cómo personalizar los componentes **Navbar** y **Footer** implementados para el sitio web de Acute (empresa de desarrollo de software).

---

## 🏗️ Estructura de Archivos

```
src/
├── components/
│   ├── Navbar.astro           # Barra de navegación moderna y responsiva
│   ├── Footer.astro           # Pie de página con 4 columnas
│   ├── contact/
│   ├── home/
│   └── ui/
├── layouts/
│   └── Layout.astro           # Layout principal (actualizado con Navbar y Footer)
├── pages/
└── styles/
    └── global.css
```

---

## 🎯 Características Implementadas

### **NAVBAR** (Navbar.astro)

#### ✨ Características Principales:

1. **Logo Interactivo**
   - Ícono de gradiente azul con letra "A"
   - Efecto hover con sombra luminosa
   - Texto del nombre de la empresa junto al logo

2. **Navegación de Escritorio**
   - Enlaces: Inicio, Servicios, Proyectos, Metodología
   - Efecto hover: línea inferior animada (underline effect)
   - Menú desplegable (Dropdown) para "Servicios" con 3 opciones:
     - Desarrollo Web
     - Aplicaciones Móviles
     - Sistemas a la Medida
   - Cada item del dropdown tiene un ícono ilustrativo

3. **Botón CTA (Call-To-Action)**
   - Texto: "Cotizar Proyecto"
   - Diseño: Gradiente azul con efecto hover
   - Comportamiento: Scale-up (ampliación) al pasar el mouse
   - Sombra luminosa en hover

4. **Responsividad Móvil**
   - **Menú hamburguesa**: Aparece en dispositivos md (768px) y menores
   - **Menú desplegable**: Animación suave con rotación de ícono
   - **CTA en móvil**: Siempre visible y prioritario
   - Transiciones suaves (300ms) para abrir/cerrar

5. **Efectos Visuales Avanzados**
   - **Sticky**: Se mantiene en la parte superior al hacer scroll
   - **Glassmorphism**: Fondo semi-transparente con backdrop-filter
   - **Border sutil**: Línea divisoria en slate-800/50
   - **Transiciones fluidas**: 300ms para todos los efectos hover

#### 🎨 Colores Utilizados:
- Fondo: `slate-950` (muy oscuro)
- Borde: `slate-800/50` (sutil)
- Texto default: `slate-300`
- Hover: `blue-400` y `blue-500`
- Gradiente CTA: `from-blue-500 to-blue-600`

#### 📱 Breakpoints:
- Desktop: Mostrar todos los enlaces + CTA button
- Tablet/Mobile (md): Mostrar menú hamburguesa

---

### **FOOTER** (Footer.astro)

#### ✨ Características Principales:

1. **Columna 1: Identidad de la Empresa**
   - Logo (igual que Navbar)
   - Descripción profesional personalizable
   - Área para insertar logo definitivo (TODO comment)

2. **Columna 2: Enlaces Rápidos**
   - Inicio, Servicios, Proyectos, Metodología
   - Efectos hover: cambio de color a blue-400
   - Transiciones suaves (300ms)

3. **Columna 3: Contacto & Soporte**
   - Email (con ícono y mailto link)
   - Teléfono (con ícono y tel link)
   - Ubicación (con ícono y enlace)
   - Escalado de ícono en hover
   - TODO comments para actualizar datos

4. **Columna 4: Redes Sociales**
   - 5 redes sociales: Facebook, Instagram, X, LinkedIn, WhatsApp
   - Iconos modernos con colores temáticos
   - Efectos hover:
     - Color de fondo específico por red (azul para Facebook, etc.)
     - Scale-up (aumento de tamaño)
     - Sombra luminosa

5. **Base del Footer**
   - Línea divisoria (divider)
   - Copyright con año actual
   - Enlaces a Política de Privacidad y Términos de Servicio
   - Diseño responsive (vertical en móvil, horizontal en desktop)

#### 🎨 Colores por Red Social:
- **Facebook**: Blue-600
- **Instagram**: Pink-600
- **X/Twitter**: Slate-700 (gris oscuro)
- **LinkedIn**: Blue-700
- **WhatsApp**: Green-600

---

## ⚙️ Cómo Personalizar

### **1. Cambiar Logo Definitivo**

En **Navbar.astro** y **Footer.astro**, busca la sección del logo:

```astro
<!-- ANTES: Logo placeholder -->
<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
  A
</div>

<!-- DESPUÉS: Con imagen real -->
<img src="/logo.png" alt="Logo Acute" class="w-10 h-10" />
```

### **2. Cambiar Nombres y Descripciones**

En **Layout.astro**, actualiza las props:

```astro
<!-- Navbar -->
<Navbar 
  companyName="Tu Empresa" 
  logoText="Logo" 
/>

<!-- Footer -->
<Footer 
  companyName="Tu Empresa"
  companyDescription="Tu descripción aquí"
  email="tu@email.com"
  phone="+57 (123) 456-7890"
  location="Tu ciudad"
/>
```

### **3. Actualizar Enlaces**

- **Navbar**: Reemplaza los `href="#"` con URLs reales
- **Footer**:
  - Redes sociales: Reemplaza `href="#"` con URLs reales (ej: `https://instagram.com/tuusuario`)
  - Política de Privacidad: Reemplaza `href="#privacidad"` con la URL real
  - Términos de Servicio: Reemplaza `href="#terminos"` con la URL real

### **4. Cambiar Colores del Tema**

Los colores están basados en Tailwind CSS. Para cambiarlos globalmente:

En **tailwind.config.js**:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        500: '#tu-color', // Cambiar aquí
        600: '#tu-color-oscuro'
      }
    }
  }
}
```

Luego actualiza las clases en los componentes (ejemplo: `from-blue-500` → `from-brand-500`).

### **5. Cambiar Puntos de Quiebre (Breakpoints)**

- `md` en Navbar y Footer = 768px
- Para cambiar, modifica `tailwind.config.js` o usa otros breakpoints (sm, lg, xl)

---

## 🎨 Decisiones de Diseño y UX

### **1. Glassmorphism + Sticky Navigation**
- **Por qué**: Moderna, elegante y no obstruye excesivamente el contenido
- **Beneficio**: Los usuarios siempre pueden acceder a la navegación sin perder contexto

### **2. Menú Dropdown en Servicios**
- **Por qué**: Categorizar servicios evita abrumar con muchos enlaces
- **UX**: Acceso rápido a categorías principales directamente desde la Navbar

### **3. Hamburguesa Responsiva**
- **Por qué**: Mobile-first approach que respeta espacios limitados en móvil
- **Animación suave**: Transiciones de 300ms no hacen la interfaz sentirse robótica

### **4. Botón CTA Destacado**
- **Por qué**: "Cotizar Proyecto" es la acción principal deseada
- **Diseño**: Gradiente + hover effects lo hacen visualmente prioritario
- **Posicionamiento**: Extremo derecho en desktop, prioritario en móvil

### **5. Footer con 4 Columnas**
- **Por qué**: Estructura típica e intuitiva para empresas B2B/tech
- **Beneficio**: Agrupa información lógicamente sin desorden
- **Responsividad**: 1 columna en móvil → 2 en tablet → 4 en desktop

### **6. Redes Sociales con Colores Temáticos**
- **Por qué**: Mejora reconocimiento visual de cada plataforma
- **Hover effects**: Sombra luminosa en color de la red social
- **Accesibilidad**: aria-label para screen readers

### **7. Enlaces Rápidos en Footer**
- **Por qué**: Refuerza la navegación principal sin redundancia
- **UX**: Permite a usuarios profundizar desde cualquier parte de la página

### **8. Copyright con Año Dinámico**
- **Por qué**: Siempre actualizado automáticamente
- **Implementación**: Usa `new Date().getFullYear()`

### **9. Efectos Hover Sutiles**
- **Color transitions**: 300ms (no demasiado rápido ni lento)
- **Scale transformations**: +5-10% (notable pero no exagerado)
- **Sombras luminosas**: Solo en elementos principales (botones, redes)

### **10. Iconografía Coherente**
- **Navbar**: Ícono de chevron en dropdown
- **Footer**: Ícono específico por tipo de contacto (email, teléfono, ubicación)
- **Beneficio**: Mejora la escaneabilidad y UX

---

## 🔧 Interactividad y Scripting

### **Navbar Mobile Menu (JavaScript)**

El menú hamburguesa y dropdown móvil usan vanilla JavaScript:

```javascript
// Toggle menú hamburguesa
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
});

// Toggle dropdown en móvil
mobileDropdownBtn.addEventListener('click', () => {
  mobileDropdownMenu?.classList.toggle('hidden');
  mobileDropdownIcon?.classList.toggle('rotate-180');
});

// Cerrar menú al hacer click en un enlace
mobileLinks?.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
  });
});
```

**Rendimiento**: Usa clases CSS (`hidden` de Tailwind) para mejor performance que JavaScript puro.

---

## 📞 TODO - Elementos a Reemplazar

Busca `// TODO:` en los archivos para ver qué necesita actualización:

### **Navbar.astro**
```astro
<!-- TODO: Reemplazar con el logo definitivo de la empresa -->
```

### **Footer.astro**
```astro
<!-- TODO: Reemplazar con el logo definitivo -->
<!-- TODO: Reemplazar con el correo real -->
<!-- TODO: Reemplazar con el número real -->
<!-- TODO: Reemplazar con la ubicación real -->
<!-- TODO: Reemplazar todos los href="#" con URLs reales -->
<!-- TODO: Reemplazar los links de Política de Privacidad y Términos -->
```

---

## ✅ Checklist de Implementación

- [ ] Logo definitivo de la empresa (cambiar "A" por imagen)
- [ ] Nombres de empresa y descripción actualizados
- [ ] Email, teléfono y ubicación reales
- [ ] URLs de redes sociales configuradas
- [ ] Enlaces internos funcionando (Inicio, Servicios, Proyectos, Metodología)
- [ ] URLs de Política de Privacidad y Términos de Servicio
- [ ] Testear en móvil, tablet y desktop
- [ ] Validar accesibilidad (colores, contraste, aria-labels)

---

## 🎯 Próximos Pasos Sugeridos

1. **Crear páginas de servicios** para que los links del dropdown funcionen
2. **Implementar animación suave** en scroll (fade-in de elementos)
3. **Agregar formulario de contacto** en la página de Proyectos
4. **Integrar analytics** (Google Analytics, Mixpanel)
5. **SEO optimization**: Meta tags, structured data (schema.org)
6. **Testing de accesibilidad**: Wave, Axe DevTools

---

## 📖 Referencias Técnicas

- **Framework**: Astro (SSG/SSR)
- **Estilos**: Tailwind CSS v3+
- **Interactividad**: Vanilla JavaScript (sin dependencias)
- **Responsividad**: Mobile-first
- **Accesibilidad**: ARIA labels, semantic HTML
- **Rendimiento**: Sin JavaScript pesado, transiciones CSS

---

## 💡 Tips de Mantenimiento

- **Breakpoints**: Ajusta `md:` según necesidades (sm, lg, xl disponibles)
- **Colores**: Todos están centralizados en Tailwind config
- **Fuentes**: Usa `font-medium` para enfasis, `font-bold` para títulos
- **Spacing**: Usa escala 4px de Tailwind (px-4, py-2, gap-4, etc.)
- **Sombras**: Usa `shadow-lg` + `shadow-[color]/[opacity]` para efectos

---

**Última actualización**: Junio 2026
**Mantenedor**: Acute Dev Team
