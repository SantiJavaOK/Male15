import Reveal from "./Reveal";

function Confirmation() {
  const phone = "5491540749601";

  const message =
    "Hola! Quiero confirmar mi asistencia a los 15 de Male. 💕🎉";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="confirmation">

      <Reveal>
        <div className="confirmation-decoration">
          ✦
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="section-title">
          ¿ME ACOMPAÑÁS?
        </p>
      </Reveal>

      <Reveal delay={400}>
        <p className="confirmation-text">
          Me encantaría compartir
          <br />
          esta noche con vos.
        </p>
      </Reveal>

      <Reveal delay={600}>
        <div className="confirmation-divider" />
      </Reveal>

      <Reveal delay={800}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <span className="whatsapp-icon">
            💌
          </span>

          <span>
            CONFIRMAR
            <br />
            ASISTENCIA
          </span>
        </a>
      </Reveal>

      <Reveal delay={1200}>
        <div className="confirmation-footer">
          <span>MALE</span>
          <span className="confirmation-star">✦</span>
        </div>
      </Reveal>

    </section>
  );
}

export default Confirmation;