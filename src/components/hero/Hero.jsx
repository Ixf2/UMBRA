export default function Hero({ onCreate }) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-landscape" role="img" aria-label="Castillo entre montañas y niebla" />
    <div className="hero-copy">
      <p className="welcome">Bienvenido a Umbra</p>
      <h1 id="hero-title">Que tus historias<br />nunca se apaguen.</h1>
      <p className="hero-description">Aquí comienza tu leyenda.</p>
      <button className="primary-button" onClick={onCreate} disabled={!onCreate} title={!onCreate ? 'Próximamente' : undefined}><span aria-hidden="true">＋</span> Crear personaje</button>
    </div>
  </section>
}
