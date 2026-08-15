import { useState } from "react";
import Reveal from "./Reveal";

function Confirmation() {
  const phone = "5491540749601";

  const [name, setName] = useState("");

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Confirmo asistencia al cumple de Male: ${name.trim()}  💕🎉`
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

      <Reveal delay={700}>
        <label
          htmlFor="guest-name"
          className="confirmation-label"
        >
          ¿CUÁL ES TU NOMBRE?
        </label>

        <input
          id="guest-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribí tu nombre"
          className="confirmation-input"
        />
      </Reveal>

      <Reveal delay={900}>
        <a
          href={name.trim() ? whatsappUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`whatsapp-button ${
            !name.trim() ? "whatsapp-disabled" : ""
          }`}
          onClick={(e) => {
            if (!name.trim()) {
              e.preventDefault();
            }
          }}
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