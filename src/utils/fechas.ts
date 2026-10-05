export function formatearFecha(fecha: string | null): string {
    if(!fecha) return '';
    return new Date(fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' });
}