function Footer() {

  const integrantes = [
    "Ibañez solis nadia nahomi",
    "Perez mejia italia valentina",
    "Gonzales limonar derzell catalina",
    "Espinoza acosta lya",
    "Mares roldan vanessa linette",
    "Mexica herrera nayeli",
    "Castillo trejo zury melisa"
  ];

  return (
    <footer className="footer">

      <h2>Créditos</h2>

      <p className="footer-subtitle">
        Proyecto realizado por:
      </p>

      <div className="team-list">

        {integrantes.map((integrante, index) => (
          <div className="team-member" key={index}>
            ✦ {integrante}
          </div>
        ))}

      </div>

      <div className="footer-bottom">

        <p>Signos Zodiacales</p>

        <p>
          Proyecto escolar · Información para todo público
        </p>

      </div>

    </footer>
  );
}

export default Footer;