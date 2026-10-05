import { useState, useEffect } from 'react'
import ListadoTabla from '../components/ListadoTabla';
import { formatearFecha } from '../utils/fechas';

interface Usuario {
  idUsuario: number;
  nombre: string;
  apellido1: string;
  apellido2: string | null;
  docIdentidad: string;
  email: string;
  rol: string;
  fechaValidez: string | null;
  idCentro: number;
  certificadoDigital: boolean;
}

function ListadoUsuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://localhost:7095/api/Usuario')
      .then((respuesta) => {
        
        if(!respuesta.ok){
          throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }
        return respuesta.json();

      })
      .then((datos: Usuario[]) => {
        setUsuarios(datos);
        setCargando(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if(cargando) return <p>Cargando usuarios...</p>;
  if(error) return <p>Error al cargar usuarios: {error}</p>;

  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ListadoTabla<Usuario>
        columnas={[
          {titulo: 'Id', render: (fila) => fila.idUsuario },
          {titulo: 'Nombre', render: (fila) => `${fila.nombre} ${fila.apellido1} ${fila.apellido2 ?? ''}` },
          {titulo: 'DNI', render: (fila) => fila.docIdentidad },
          {titulo: 'E-mail', render: (fila) => fila.email },
          {titulo: 'Rol', render: (fila) => fila.rol },
          {titulo: 'Fecha validez', render: (fila) => formatearFecha(fila.fechaValidez) },
          {titulo: 'Id centro', render: (fila) => fila.idCentro },
          {titulo: 'Certificado digital', render: (fila) => (fila.certificadoDigital ? 'Sí' : 'No') },
        ]}
        filas={usuarios}
        claveFila={(filas) => filas.idUsuario}
      />
    </div>
  );
}

export default ListadoUsuarios