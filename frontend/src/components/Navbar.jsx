const signos = [
  { nombre: "Aries", id: "aries" },
  { nombre: "Tauro", id: "tauro" },
  { nombre: "Géminis", id: "geminis" },
  { nombre: "Cáncer", id: "cancer" },
  { nombre: "Leo", id: "leo" },
  { nombre: "Virgo", id: "virgo" },
  { nombre: "Libra", id: "libra" },
  { nombre: "Escorpio", id: "escorpio" },
  { nombre: "Sagitario", id: "sagitario" },
  { nombre: "Capricornio", id: "capricornio" },
  { nombre: "Acuario", id: "acuario" },
  { nombre: "Piscis", id: "piscis" }
];

function Navbar() {
  return (
    <nav className="navbar">

      {signos.map((signo) => (
        <a key={signo.id} href={`#${signo.id}`}>
          {signo.nombre}
        </a>
      ))}

    </nav>
  );
}

export default Navbar;