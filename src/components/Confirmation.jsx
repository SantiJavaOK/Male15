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
        <p className="section-title">
          ¿NOS ACOMPAÑÁS?
        </p>
      </Reveal>

      <Reveal>
        <p>
          Confirmá tu asistencia
        </p>
      </Reveal>

      <Reveal>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          💌 Confirmar asistencia
        </a>
      </Reveal>

    </section>
  );
}

export default Confirmation;