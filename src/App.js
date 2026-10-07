import './App.css';
import Tarjeta from './components/tarjeta.js';
import Tabla from './components/tabla.js';

function App() {
       const datos = [
    { id: 1, lugar:'1', nombre: 'Gordito', materia: 'Matemáticas', calificacion: 9 },
    { id: 2, lugar:'2', nombre: 'Zuriel', materia: 'Física', calificacion: 0 },
    { id: 3, lugar:'3', nombre: 'Cruz', materia: 'Química', calificacion: 10 },
  ];

  return (
        <div className="contenedor">
      <h1>Primer Examen Parcial</h1>

  <div className="tarjetas">
        <Tarjeta titulo="Primer lugar" valor="100%" descripcion="Gordito" />
        <Tarjeta titulo="Segundo lugar" valor="80%" descripcion="Zuriel" />
        <Tarjeta titulo="Tercer lugar" valor="70%" descripcion="Diego" />
        <Tarjeta titulo="Cuarto lugar" valor="60%" descripcion="Cruz" />
      </div>

      <Tabla datos={datos} />
    </div>
  );
}

export default App;