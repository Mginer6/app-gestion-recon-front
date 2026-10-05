interface Columna<T> {
    titulo: string;
    render: (fila: T) => React.ReactNode;
}

interface ListadoTablaProps<T> {
    columnas: Columna<T>[];
    filas: T[];
    claveFila: (fila: T) => string | number;
}

function ListadoTabla<T>({ columnas, filas, claveFila}: ListadoTablaProps<T>) {
    return(
        <table>
            <thead>
                <tr>
                    {columnas.map((columna) => (
                        <th key={columna.titulo}>{columna.titulo}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filas.map((fila) => (
                    <tr key={claveFila(fila)}>
                        {columnas.map((columna) => (
                            <td key={columna.titulo}>{columna.render(fila)}</td>
                        ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListadoTabla;