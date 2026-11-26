import ZodiacCard from "./components/ZodiacCard"
import "./App.css"

function App() {
  const signos = [
    {
      nombre: "Libra",
      fecha: "23 Sep - 22 Oct",
      img: "/foto7.jpg",
      queEs: "Libra es el signo de la balanza, es el séptimo signo del zodiaco y su elemento es Aire. Su planeta es Venus, el planeta del amor y la belleza.",
      comoEs: "Libra es justo, amable y siempre busca que todo esté en equilibrio. No le gustan las peleas, prefiere hablar y arreglar todo con calma.",
      amor: "En el amor es muy romántico y cariñoso, pero a veces le cuesta decidir porque quiere que todos queden felices.",
      amistad: "Es muy sociable, tiene muchos amigos y le encanta salir, escuchar música y verse bien.",
      trabajo: "En el trabajo es muy justo, le gusta trabajar en equipo y que todo salga bien para todos.",
      bueno: "Es amable, justo y muy buen amigo.",
      malo: "Le cuesta decidir y a veces piensa mucho en lo que dicen los demás."
    },
    {
      nombre: "Acuario",
      fecha: "20 Ene - 18 Feb",
      img: "/foto11.jpg",
      queEs: "Acuario es el signo de la creatividad y la libertad, es el onceavo signo del zodiaco y su elemento es Aire. Su planeta es Urano, el planeta de lo diferente y lo nuevo.",
      comoEs: "Acuario es inteligente, original y le encanta tener ideas nuevas. No le gusta que le digan qué hacer, le gusta ser libre y hacer las cosas a su manera.",
      amor: "En el amor es leal pero necesita su espacio.",
      amistad: "Es muy buen amigo, le gusta ayudar a la gente y se preocupa por el mundo.",
      trabajo: "En el trabajo es muy creativo, le encanta la tecnología y aprender cosas nuevas.",
      bueno: "Es original, inteligente y muy leal.",
      malo: "A veces es muy terco y quiere hacer todo a su manera."
    },
  ];

  return (
    <div className="pagina">
      <header className="header">
        <h1>✨ MIS SIGNOS ✨</h1>
        <p>Libra y Acuario</p>
      </header>

      {signos.map((s, i) => (
        <ZodiacCard key={s.nombre} signo={s} alReves={i % 2 === 1} />
      ))}
    </div>
  )
}

export default App