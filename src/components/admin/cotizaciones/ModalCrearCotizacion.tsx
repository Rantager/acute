import React, { useState, useEffect } from 'react';

interface ClienteInfo {
  id: string;
  nombre: string;
  correo: string;
  telefono?: string;
}

interface ModalCrearCotizacionProps {
  isOpen: boolean;
  onClose: () => void;
  cliente: ClienteInfo | null;
  cotizacionAEditar?: any | null;
  onSaveSuccess?: () => void;
}

export default function ModalCrearCotizacion({
  isOpen,
  onClose,
  cliente,
  cotizacionAEditar,
  onSaveSuccess
}: ModalCrearCotizacionProps) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [alcances, setAlcances] = useState<string[]>(['']);
  const [tiempoDesarrollo, setTiempoDesarrollo] = useState('');
  const [inversion, setInversion] = useState('');
  const [formaPago, setFormaPago] = useState('50% anticipo, 50% al entregar');
  const [vigencia, setVigencia] = useState('15 días naturales');
  const [estado, setEstado] = useState('Borrador');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (cotizacionAEditar) {
      setTitulo(cotizacionAEditar.titulo_proyecto || '');
      setDescripcion(cotizacionAEditar.descripcion_proyecto || '');
      setAlcances(cotizacionAEditar.alcances && cotizacionAEditar.alcances.length > 0 ? cotizacionAEditar.alcances : ['']);
      setTiempoDesarrollo(cotizacionAEditar.tiempos_desarrollo || '');
      setInversion(cotizacionAEditar.inversion_total || '');
      setFormaPago(cotizacionAEditar.forma_pago || '');
      setVigencia(cotizacionAEditar.vigencia || '');
      setEstado(cotizacionAEditar.estado || 'Borrador');
    } else {
      setTitulo('');
      setDescripcion('');
      setAlcances(['']);
      setTiempoDesarrollo('');
      setInversion('');
      setFormaPago('50% anticipo, 50% al entregar');
      setVigencia('15 días naturales');
      setEstado('Borrador');
    }
    setErrorMsg('');
  }, [cotizacionAEditar, cliente, isOpen]);

  if (!isOpen || !cliente) return null;

  const handleAddAlcance = () => setAlcances([...alcances, '']);
  const handleRemoveAlcance = (index: number) => setAlcances(alcances.filter((_, i) => i !== index));
  const handleChangeAlcance = (value: string, index: number) => {
    const updated = [...alcances];
    updated[index] = value;
    setAlcances(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !inversion) {
      setErrorMsg('Por favor completa los campos obligatorios.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const cleanAlcances = alcances.filter(a => a.trim() !== '');

    const payload = {
      id: cotizacionAEditar?.id,
      mensaje_id: cliente.id,
      titulo_proyecto: titulo,
      descripcion_proyecto: descripcion,
      alcances: cleanAlcances,
      exclusiones: [],
      tiempos_desarrollo: tiempoDesarrollo,
      inversion_total: parseFloat(inversion),
      forma_pago: formaPago,
      vigencia,
      estado
    };

    try {
      const url = '/api/cotizaciones';
      const method = cotizacionAEditar ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        if (onSaveSuccess) onSaveSuccess();
        onClose();
      } else {
        const resData = await response.json();
        setErrorMsg(resData.error || 'Error al guardar la cotización.');
      }
    } catch (err) {
      console.error('Error saving quote:', err);
      setErrorMsg('Error de red.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {cotizacionAEditar ? `Editar Cotización (${cotizacionAEditar.folio})` : 'Nueva Cotización'}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Cliente: <span className="text-slate-200 font-semibold">{cliente.nombre}</span> ({cliente.correo})</p>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-200 p-2 rounded-xl hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 flex-1">
          {errorMsg && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-4 py-3 rounded-2xl text-sm font-medium">
              Por favor completa los campos obligatorios.
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Título del Proyecto *
              </label>
              <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" placeholder="Ej: Rediseño Web Corporativo" />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Descripción General
              </label>
              <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} rows={3} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" placeholder="Resumen del proyecto..." />
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Alcances */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Alcances (Entregables)
              </label>
              <button type="button" onClick={handleAddAlcance} className="inline-flex items-center gap-1 text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Agregar
              </button>
            </div>
            <div className="space-y-2">
              {alcances.map((alcance, index) => (
                <div key={index} className="flex gap-2">
                  <input type="text" value={alcance} onChange={e => handleChangeAlcance(e.target.value, index)} className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500 transition-colors" placeholder={`Alcance #${index + 1}`} />
                  {alcances.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveAlcance(index)}
                      className="text-rose-400 p-2 bg-rose-500/5 border border-rose-500/10 hover:bg-rose-500/10 rounded-lg transition-colors"
                      aria-label="Eliminar alcance"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Tiempo de Desarrollo */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tiempo de Desarrollo Estimado
            </label>
            <input type="text" value={tiempoDesarrollo} onChange={e => setTiempoDesarrollo(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" placeholder="Ej: 4 a 6 semanas" />
          </div>

          <hr className="border-slate-800" />

          {/* Datos Financieros */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16M14 6h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2" />
                </svg>
                Inversión ($ MXN) *
              </label>
              <input type="number" step="0.01" value={inversion} onChange={e => setInversion(e.target.value)} required className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Forma de Pago
              </label>
              <input type="text" value={formaPago} onChange={e => setFormaPago(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Vigencia
              </label>
              <input type="text" value={vigencia} onChange={e => setVigencia(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Estado
              </label>
              <select value={estado} onChange={e => setEstado(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white bg-slate-950 outline-none focus:border-blue-500 transition-colors">
                <option value="Borrador">Borrador</option>
                <option value="Enviada">Enviada</option>
                <option value="Aceptada">Aceptada</option>
                <option value="Rechazada">Rechazada</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-700 transition-colors">Cancelar</button>
            <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm disabled:opacity-50 hover:bg-blue-500 transition-colors">{loading ? 'Guardando...' : cotizacionAEditar ? 'Guardar Cambios' : 'Crear Cotización'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}