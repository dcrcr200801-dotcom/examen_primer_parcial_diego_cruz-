function Tarjeta({ titulo, valor, descripcion }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <p className="valor">{valor}</p>
      <p>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;