function Tabla({ datos }) {
  return (
<table className="tabla">
      <thead>
        <tr>
          <th>Lugar</th>
          <th>Nombre</th>
          <th>Materia</th>
          <th>Calificación</th>
            </tr>
            </thead>
      <tbody>
        {datos.map((fila) => (
          <tr key={fila.id}>
            <td>{fila.lugar}</td>
         <td>{fila.nombre}</td>
            <td>{fila.materia}</td>
             <td>{fila.calificacion}</td>
          </tr>
        ))}
      </tbody>
            </table>
  );
}

export default Tabla;