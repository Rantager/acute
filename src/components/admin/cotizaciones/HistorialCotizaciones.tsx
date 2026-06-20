import React, { useEffect, useState } from 'react';
import { generarCotizacionPDF } from './GeneradorPDF';

interface Cliente {
  id: string;
  nombre: string;
  correo: string;
  telefono?: string;
}

interface Cotizacion {
  id: string;
  folio: string;
  titulo_proyecto: string;
  descripcion_proyecto?: string;
  inversion_total: number;
  estado: 'Borrador' | 'Enviada' | 'Aceptada' | 'Rechazada';
  created_at: string;
}

interface HistorialProps {
  cliente: Cliente | null;
  onEditarCotizacion: (cotizacion: Cotizacion) => void;
  onNuevaCotizacion: () => void;
}

export default function HistorialCotizaciones({
  cliente,
  onEditarCotizacion,
  onNuevaCotizacion
}: HistorialProps) {
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCotizaciones = async () => {
    if (!cliente) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/cotizaciones?cliente_id=${cliente.id}`);
      const result = await response.json();
      if (response.ok && result.success) {
        setCotizaciones(result.data || []);
      } else {
        setCotizaciones([]);
      }
    } catch (err) {
      console.error('Error al traer cotizaciones:', err);
      setCotizaciones([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCotizaciones();
  }, [cliente]);

  const handleEliminar = async (id: string, folio: string) => {
    const confirmar = confirm(`¿Estás seguro de que deseas eliminar la cotización ${folio}?`);
    if (!confirmar) return;

    try {
      const response = await fetch(`/api/cotizaciones?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCotizaciones(cotizaciones.filter(c => c.id !== id));
      } else {
        alert('No se pudo eliminar la cotización.');
      }
    } catch (err) {
      console.error('Error al eliminar cotización:', err);
      alert('Error de red al intentar eliminar.');
    }
  };

  if (!cliente) {
    return (
      <div className="flex-1 border border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-[calc(100vh-220px)] bg-slate-900/10">
        <svg className="w-10 h-10 text-slate-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 11m8 4V4" />
        </svg>
        <h4 className="text-base font-semibold text-slate-300">Selecciona un cliente</h4>
        <p className="text-xs text-slate-500 max-w-xs mt-1">Elige un cliente de la lista izquierda para gestionar sus presupuestos.</p>
      </div>
    );
  }

  const badgeStyles = {
    Borrador: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    Enviada: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Aceptada: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Rechazada: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-3xl p-6 flex flex-col h-[calc(100vh-220px)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">{cliente.nombre}</h2>
          <p className="text-xs text-slate-400">{cliente.correo} {cliente.telefono && `• ${cliente.telefono}`}</p>
        </div>
        <button
          type="button"
          onClick={onNuevaCotizacion}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-600/10 transition-all self-start sm:self-auto"
        >
          Nueva Cotización
        </button>
      </div>

      <div className="overflow-y-auto flex-1 space-y-3 pr-1">
        {loading ? (
          <div className="text-center py-12 text-sm text-slate-500 animate-pulse">Cargando historial...</div>
        ) : cotizaciones.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-slate-800/60 rounded-2xl">
            <p className="text-sm text-slate-400 font-medium">Este cliente no tiene cotizaciones aún.</p>
          </div>
        ) : (
          cotizaciones.map((cot) => (
            <div
              key={cot.id}
              className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-2xl hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {cot.folio}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyles[cot.estado] || badgeStyles.Borrador}`}>
                    {cot.estado}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight mt-1">{cot.titulo_proyecto}</h4>
                <p className="text-xs text-slate-400 font-mono font-semibold pt-0.5">
                  Total: <span className="text-blue-400">${Number(cot.inversion_total).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN</span>
                </p>
              </div>

              {/* Contenedor de Acciones */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {/* 1. Botón Editar */}
                <button
                  type="button"
                  onClick={() => onEditarCotizacion(cot)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl bg-slate-800 text-slate-300 font-semibold border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Editar
                </button>

                {/* 2. Botón Exportar PDF */}
                <button
                  type="button"
                  onClick={() => generarCotizacionPDF(cliente, cot)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl bg-blue-600/10 text-blue-400 font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </button>
                
                {/* 3. Botón Eliminar */}
                <button
                  type="button"
                  onClick={() => handleEliminar(cot.id, cot.folio)}
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-rose-500/5 text-rose-400 border border-rose-500/10 hover:bg-rose-500/10 hover:text-rose-300 transition-colors"
                  title="Eliminar Cotización"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}