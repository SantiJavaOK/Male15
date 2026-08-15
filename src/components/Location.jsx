import Reveal from "./Reveal";

function Location() {
  const mapsUrl =
    "https://maps.app.goo.gl/pTvvHnwyBPg4oSg46";

  return (
    <section className="location">

      <Reveal>
        <div className="location-decoration">
          ✦
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="section-title">
          NOS ENCONTRAMOS EN
        </p>
      </Reveal>

      <Reveal delay={400}>
        <h2>GLOW</h2>
      </Reveal>

      <Reveal delay={600}>
        <div className="location-divider" />
      </Reveal>

      <Reveal delay={800}>
        <p className="location-date">
          SÁBADO 26 DE SEPTIEMBRE
        </p>
      </Reveal>

      <Reveal delay={1000}>
        <p className="location-time">
          21:30 HS
        </p>
      </Reveal>

      <Reveal delay={1200}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          <span className="location-icon">⌖</span>
          CÓMO LLEGAR
        </a>
      </Reveal>

    </section>
  );
}

export default Location;