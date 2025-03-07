function Header({ totalInscritas }) {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", background: "#282c34", color: "white" }}>
        <h1>Inscripción de Materias</h1>
        <p>Materias inscritas: <strong>{totalInscritas}</strong></p>
      </header>
    );
  }
  
  export default Header;  