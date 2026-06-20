import React from 'react';

interface Cliente {
    id: string;
    nombre: string;
    correo: string;
    telefono?: string;
}

interface ListaClientesProps {
    clientes: Cliente[];
    clienteSeleccionado: Cliente | null;
    onSeleccionarCliente: (cliente: Cliente) => void;
}

export default function ListaClientesCotizaciones({
    clientes,
    clienteSeleccionado,
    onSeleccionarCliente
}: ListaClientesProps) {
    return (
        <div className="w-full md:w-80 bg-slate-900/50 border border-slate-800 rounded-3xl p-4 flex flex-col h-[calc(100vh-220px)]">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
                Clientes / Prospectos
            </h3>

            <div className="overflow-y-auto space-y-1 flex-1 pr-1 scrollbar-thin">
                {clientes.length === 0 ? (
                    <p className="text-sm text-slate-500 text-center py-8">No hay clientes registrados.</p>
                ) : (
                    clientes.map((cliente) => {
                        const isSelected = clienteSeleccionado?.id === cliente.id;
                        return (
                            <button
                                key={cliente.id}
                                type="button"
                                onClick={() => onSeleccionarCliente(cliente)}
                                className={`w-full text-left p-3.5 rounded-2xl transition-all flex flex-col gap-0.5 group ${isSelected
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10'
                                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                    }`}
                            >
                                <span className="font-semibold text-sm tracking-tight truncate w-full">
                                    {cliente.nombre}
                                </span>
                                <span className={`text-xs truncate w-full ${isSelected ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-400'
                                    }`}>
                                    {cliente.correo}
                                </span>
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
}