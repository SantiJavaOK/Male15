import Reveal from "./Reveal";

function Location() {
  const mapsUrl =
    "https://maps.app.goo.gl/pTvvHnwyBPg4oSg46";

  return (
    <section className="location">

      <Reveal>
        <p className="section-title">
          TE ESPERO EN
        </p>
      </Reveal>

      <Reveal>
        <h2>GLOW</h2>
      </Reveal>

      <Reveal>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          📍 Cómo llegar
        </a>
      </Reveal>

    </section>
  );
}

export default Location;