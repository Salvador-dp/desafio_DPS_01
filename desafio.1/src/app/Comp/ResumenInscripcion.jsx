function ResumenInscripcion({ inscritas, setInscritas }) {
    const totalUV = inscritas.reduce((sum, materia) => sum + materia.unidadesValorativas, 0);
  
    const eliminarMateria = (id) => {
      setInscritas(inscritas.filter((materia) => materia.id !== id));
    };
  
    const limpiarInscripcion = () => {
      setInscritas([]);
    };
  
    return (
      <div>
        <h2>Resumen de Inscripción</h2>
        {inscritas.length > 0 ? (
          <>
            <ul>
              {inscritas.map((materia) => (
                <li key={materia.id}>
                  {materia.nombre} - UV: {materia.unidadesValorativas} 
                  <button onClick={() => eliminarMateria(materia.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <p><strong>Total de UV: {totalUV}</strong></p>
            <button onClick={limpiarInscripcion}>Limpiar Inscripción</button>
          </>
        ) : (
          <p>No tienes materias inscritas.</p>
        )}
        
      </div>
    );
  }
  
  export default ResumenInscripcion;
  