function ZodiacCard({ signo, alReves }) {
  return (
    <div className={alReves ? "card al-reves" : "card"}>
      <div className="texto">
        <h2>{signo.nombre}</h2>
        <span className="fecha">{signo.fecha}</span>
        <p><b>Qué es:</b> {signo.queEs}</p>
        <p><b>Cómo es:</b> {signo.comoEs}</p>
        <p><b>En el amor:</b> {signo.amor}</p>
        <p><b>En la amistad:</b> {signo.amistad}</p>
        <p><b>En el trabajo:</b> {signo.trabajo}</p>
        <p><b>Lo bueno:</b> {signo.bueno}</p>
        <p><b>Lo malo:</b> {signo.malo}</p>
      </div>

      <img src={`/assets/imagenes/${signo.id}.jpg`} alt={signo.nombre} className="foto-signo" />
    </div>
  )
}

export default ZodiacCard