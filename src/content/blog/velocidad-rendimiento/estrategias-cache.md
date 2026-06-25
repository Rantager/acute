---
slug: 'estrategias-cache'
categoriaSlug: 'velocidad-rendimiento'
categoriaNombre: 'Velocidad y Rendimiento'
title: 'Estrategias de Caché: Memoria a corto plazo para servidores'
description: 'Evita que tus servidores calculen o busquen en la base de datos la misma información repetitiva mil veces por hora.'
---

Cada vez que un cliente entra a tu tienda en línea y visita la categoría de "Productos más vendidos", tu servidor realiza un esfuerzo. Se conecta a la base de datos, revisa el historial de todas las ventas del mes, cuenta qué artículos salieron más, los ordena de mayor a menor y finalmente se los envía al usuario. 

Si mil personas entran a esa página en la misma hora, tu servidor ejecutará exactamente ese mismo cálculo matemático mil veces. Esto genera costos excesivos de infraestructura, eleva la temperatura del servidor y ralentiza la plataforma para el resto de tus empleados que intentan facturar.

### El arte de no repetir el trabajo

La solución técnica a este desgaste innecesario son las **Estrategias de Caché**. En términos simples, el Caché funciona como la memoria a corto plazo de tu plataforma web.

> En lugar de resolver el mismo problema matemático una y otra vez, el servidor hace el cálculo pesado una sola vez y guarda el resultado final en un compartimiento de memoria ultra rápido. 

Cuando los siguientes 999 usuarios entran a ver los "Productos más vendidos", el servidor ya no molesta a la base de datos; simplemente toma la foto guardada en el Caché y se la entrega al cliente en menos de un milisegundo.

### Micro-caché e invalidación inteligente

Por supuesto, los inventarios y los precios cambian. Si modificas el precio de un producto, no quieres que los clientes sigan viendo el precio viejo guardado en memoria.

Para ello, diseñamos estrategias de **Invalidación Inteligente**. El sistema sabe exactamente cuándo la información ha sido alterada por un gerente. En el instante en que guardas el nuevo precio, el servidor destruye la memoria caché vieja y la actualiza, garantizando que tus clientes siempre vean información fresca, mientras reduces hasta en un 90% la carga de procesamiento de tu infraestructura en la nube.