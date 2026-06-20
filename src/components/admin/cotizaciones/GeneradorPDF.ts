import { jsPDF } from 'jspdf';

interface Cliente {
  nombre: string;
  correo: string;
  telefono?: string;
  nombre_empresa?: string; // Por si cuentas con la propiedad en el objeto cliente
}

interface Cotizacion {
  folio: string;
  titulo_proyecto: string;
  descripcion_proyecto?: string;
  alcances?: string[];
  tiempos_desarrollo?: string;
  inversion_total: number;
  forma_pago?: string;
  vigencia?: string;
  created_at: string;
}

export function generarCotizacionPDF(cliente: Cliente, cot: Cotizacion) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  });

  // --- CONFIGURACIÓN ESTRUCTURAL ---
  const margin = 25; // Márgenes amplios (25mm)
  const pageWidth = 215.9; // Carta: 8.5 x 11 pulgadas
  const pageHeight = 279.4;
  const maxWidth = pageWidth - (margin * 2); // 165.9mm de área de impresión
  let y = margin;

  // --- PALETA MONOCROMÁTICA ---
  const COLOR_TEXT_PRIMARY = [15, 23, 42];   // #0f172a - Negro Corporativo
  const COLOR_TEXT_MUTED = [100, 116, 139];  // #64748b - Gris Intermedio
  const COLOR_LINE = [226, 232, 240];        // #e2e8f0 - Gris Claro para separadores

  // --- FUNCIONES UTILITARIAS INTERNAS ---
  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 15) {
      doc.addPage();
      y = margin;
      drawFooter(); // Dibuja el pie en cada página nueva
    }
  };

  const drawSeparator = () => {
    y += 4;
    doc.setDrawColor(COLOR_LINE[0], COLOR_LINE[1], COLOR_LINE[2]);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + maxWidth, y);
    y += 10;
  };

  const drawSectionTitle = (title: string) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
    doc.text(title, margin, y);
    y += 6;
  };

  const drawFooter = () => {
    const originalPage = doc.getNumberOfPages();
    doc.setPage(originalPage);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
    
    const footerText = `Gracias por la confianza.  |  Acute  |  contacto@acute.mx  |  acute.mx`;
    doc.text(footerText, pageWidth / 2, pageHeight - 12, { align: 'center' });
  };

  // --- INICIO DEL DOCUMENTO ---
  drawFooter(); // Inicializa el footer en la página 1

  // --- ENCABEZADO ---
  // 1. Pega aquí el código Base64 completo de tu logotipo
  const LOGO_ACUTE_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[PEGA_AQUÍ_TODA_TU_CADENA_LARGA]...";

  // 2. Inyección del Logotipo Corporativo en el documento
  try {
    // Parámetros: imagen (Base64), formato, coordenada X, coordenada Y, ancho (mm), alto (mm)
    // El ancho está fijado en 32mm. El alto de 10mm puedes ajustarlo proporcionalmente a tu logo.
    doc.addImage(LOGO_ACUTE_BASE64, 'PNG', margin, y, 32, 10);
    y += 14;
  } catch (e) {
    console.error("No se pudo cargar el logotipo en el PDF:", e);
    y += 10;
  }
  // Información del Emisor
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
  
  doc.text('Acute', margin, y);
  doc.text('contacto@acute.mx', margin, y + 4.5);
  doc.text('Colima, México', margin, y + 9);
  doc.text('acute.mx', margin, y + 13.5);

  // Lado Derecho: Metadatos de la Propuesta (Alineados a la derecha de forma estricta)
  const rightColumnX = margin + maxWidth;
  
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text('COTIZACIÓN', rightColumnX, margin + 4, { align: 'right' });

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text(`Folio: ${cot.folio}`, rightColumnX, margin + 10, { align: 'right' });

  doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
  const fechaEmision = new Date(cot.created_at || new Date()).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  doc.text(`Emisión: ${fechaEmision}`, rightColumnX, margin + 15, { align: 'right' });
  doc.text(`Vigencia: ${cot.vigencia || '15 días naturales'}`, rightColumnX, margin + 19.5, { align: 'right' });

  y += 20;
  drawSeparator();

  // --- DATOS DEL CLIENTE ---
  checkPageOverflow(30);
  drawSectionTitle('DATOS DEL CLIENTE');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text(cliente.nombre, margin, y);
  y += 5;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);
  
  if (cliente.nombre_empresa) {
    doc.text(cliente.nombre_empresa, margin, y);
    y += 4.5;
  }
  doc.text(cliente.correo, margin, y);
  if (cliente.telefono) {
    y += 4.5;
    doc.text(cliente.telefono, margin, y);
  }

  y += 6;
  drawSeparator();

  // --- PROYECTO ---
  checkPageOverflow(40);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text(cot.titulo_proyecto, margin, y);
  y += 10;

  if (cot.descripcion_proyecto) {
    drawSectionTitle('DESCRIPCIÓN GENERAL');
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
    
    const descLines = doc.splitTextToSize(cot.descripcion_proyecto, maxWidth);
    checkPageOverflow(descLines.length * 5);
    doc.text(descLines, margin, y, { align: 'justify' });
    y += (descLines.length * 5) + 6;
  }
  drawSeparator();

  // --- ALCANCES Y ENTREGABLES ---
  if (cot.alcances && cot.alcances.length > 0) {
    checkPageOverflow(30);
    drawSectionTitle('ALCANCES Y ENTREGABLES');
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);

    cot.alcances.forEach((alcance) => {
      const alcanceLines = doc.splitTextToSize(alcance, maxWidth - 6);
      checkPageOverflow((alcanceLines.length * 5) + 3);
      
      // Viñeta simple: Guión medio clásico y formal
      doc.text('-', margin + 1, y);
      doc.text(alcanceLines, margin + 6, y);
      y += (alcanceLines.length * 5) + 3; // Espaciado controlado entre elementos
    });

    y += 4;
    drawSeparator();
  }

  // --- TIEMPO DE DESARROLLO ---
  if (cot.tiempos_desarrollo) {
    checkPageOverflow(20);
    drawSectionTitle('TIEMPO ESTIMADO DE DESARROLLO');
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
    doc.text(cot.tiempos_desarrollo, margin, y);
    
    y += 6;
    drawSeparator();
  }

  // --- INVERSIÓN Y CONDICIONES ---
  checkPageOverflow(35);
  drawSectionTitle('INVERSIÓN Y CONDICIONES');

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Inversión Total:', margin, y);
  
  // Destacado formal mediante jerarquía de fuentes (Negrita y tamaño grande sin color)
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  const totalFormat = `$${Number(cot.inversion_total).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`;
  doc.text(totalFormat, margin, y + 6);
  
  y += 14;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text(`Forma de Pago: ${cot.forma_pago || '50% anticipo y 50% al finalizar'}`, margin, y);
  y += 5;
  doc.text(`Vigencia de la Oferta: ${cot.vigencia || '15 días naturales'}`, margin, y);

  y += 6;
  drawSeparator();

  // --- OBSERVACIONES CLAUSULARES ---
  checkPageOverflow(40);
  drawSectionTitle('OBSERVACIONES');
  
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(COLOR_TEXT_MUTED[0], COLOR_TEXT_MUTED[1], COLOR_TEXT_MUTED[2]);

  const observaciones = [
    'Esta cotización tiene una vigencia de 15 días naturales.',
    'El proyecto iniciará una vez recibido el anticipo correspondiente.',
    'Cualquier funcionalidad o modificación no contemplada en esta cotización será considerada un cambio adicional y podrá requerir una nueva cotización.',
    'Los tiempos de entrega están sujetos a la recepción oportuna de información y materiales por parte del cliente.'
  ];

  observaciones.forEach((obs) => {
    const obsLines = doc.splitTextToSize(obs, maxWidth - 4);
    checkPageOverflow(obsLines.length * 4.5);
    doc.text(obsLines, margin, y);
    y += (obsLines.length * 4.5) + 2;
  });

  y += 4;
  drawSeparator();

  // --- FIRMA DE CONFORMIDAD ---
  checkPageOverflow(45);
  y += 20; // Espacio en blanco amplio para la firma manuscrita

  const lineLength = 70;
  const lineX = (pageWidth - lineLength) / 2;

  doc.setDrawColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.setLineWidth(0.5);
  doc.line(lineX, y, lineX + lineLength, y);
  
  y += 5;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(COLOR_TEXT_PRIMARY[0], COLOR_TEXT_PRIMARY[1], COLOR_TEXT_PRIMARY[2]);
  doc.text('Firma de conformidad del cliente', pageWidth / 2, y, { align: 'center' });

  // --- GUARDADO ---
  const fileName = `${cot.folio}_Acute_${cliente.nombre.replace(/\s+/g, '_')}.pdf`;
  doc.save(fileName);
}