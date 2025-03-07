"use client";

import { useState, useEffect } from "react";
import materias from "../data";
import Header from "./Header";
import ResumenInscripcion from "./ResumenInscripcion";

function MateriaList() {
  const [inscritas, setInscritas] = useState([]);

  useEffect(() => {
    const materiasGuardadas = JSON.parse(localStorage.getItem("materiasInscritas"));
    if (materiasGuardadas) {
      setInscritas(materiasGuardadas);
    }
  }, []);

  const inscribirMateria = (materia) => {
    if (!inscritas.some((m) => m.id === materia.id)) {
      setInscritas((prevState) => [...prevState, materia]);
    }
  };


  useEffect(() => {
    if (inscritas.length > 0) {
      localStorage.setItem("materiasInscritas", JSON.stringify(inscritas));
    }
  }, [inscritas]);

  return (
    <div className="container">
      <div className="materia-list">
        <Header totalInscritas={inscritas.length} />
        <h2>Materias Disponibles</h2>
        <ul>
          {materias.map((materia) => (
            <li key={materia.id} className="materia-container">
              <strong>{materia.nombre}</strong> - {materia.horario} <br />
              <em>{materia.profesor}</em> - UV: {materia.unidadesValorativas} <br />
              <button onClick={() => inscribirMateria(materia)}>Inscribir</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="resumen-container">
        <ResumenInscripcion inscritas={inscritas} setInscritas={setInscritas} />
      </div>
    </div>
  );
}

export default MateriaList;