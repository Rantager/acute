import React, { useState } from 'react';
import ListaClientesCotizaciones from './ListaClientesCotizaciones';
import HistorialCotizaciones from './HistorialCotizaciones';
import ModalCrearCotizacion from './ModalCrearCotizacion';

interface Cliente {
    id: string;
    nombre: string;
    correo: string;
    telefono?: string;
}

interface ContenedorProps {
    clientesIniciales: Cliente[];
}

export default function ContenedorCotizaciones({ clientesIniciales }: ContenedorProps) {
    const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cotizacionAEditar, setCotizacionAEditar] = useState<any | null>(null);
    // Estado local para forzar el refresco del historial tras guardar
    const [refreshKey, setRefreshKey] = useState(0);

    const handleEditarCotizacion = (cotizacion: any) => {
        setCotizacionAEditar(cotizacion);
        setIsModalOpen(true);
    };

    const handleNuevaCotizacion = () => {
        setCotizacionAEditar(null);
        setIsModalOpen(true);
    };

    const handleSaveSuccess = () => {
        // Incrementamos la llave para que el useEffect de HistorialCotizaciones se vuelva a disparar
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
            {/* Columna Izquierda: Lista de Clientes */}
            <ListaClientesCotizaciones
                clientes={clientesIniciales}
                clienteSeleccionado={clienteSeleccionado}
                onSeleccionarCliente={setClienteSeleccionado}
            />

            {/* Columna Derecha: Historial de Cotizaciones */}
            <HistorialCotizaciones
                key={`${clienteSeleccionado?.id}-${refreshKey}`}
                cliente={clienteSeleccionado}
                onEditarCotizacion={handleEditarCotizacion}
                onNuevaCotizacion={handleNuevaCotizacion}
            />

            {/* Formulario Modal Reutilizable */}
            <ModalCrearCotizacion
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cliente={clienteSeleccionado}
                cotizacionAEditar={cotizacionAEditar}
                onSaveSuccess={handleSaveSuccess}
            />
        </div>
    );
}