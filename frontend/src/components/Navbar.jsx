function Navbar() {
  return (
    <nav className="navbar">

      {signos.map((signo) => (
        <a key={signo.id} href={#${signo.id}}>
          {signo.nombre}
        </a>
      ))}

    </nav>
  );
}

export default Navbar;