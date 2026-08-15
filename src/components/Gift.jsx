import { useState } from "react";
import Reveal from "./Reveal";
import Particles from "./Particles";

function Gift() {
  const [copied, setCopied] = useState(false);

  const alias = "maletore.mp";

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(alias);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("No se pudo copiar el alias", error);
    }
  };

  return (
    <section className="gift">

      <Particles count={15} />

      <div className="gift-star">
        ✦
      </div>

      <div className="gift-content">

        <Reveal>
          <p className="gift-title">
            UN PEQUEÑO DETALLE
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="gift-message">
            El mejor regalo es que vengas,
            <br />
            pero si deseás obsequiarme algo,
            <br />
            acá te dejo una sugerencia.
          </p>
        </Reveal>

        <Reveal delay={700}>
          <div className="gift-divider">
            ✦
          </div>
        </Reveal>

        <Reveal delay={900}>
          <p className="gift-alias-label">
            ALIAS
          </p>

          <button
            className="gift-alias"
            onClick={copyAlias}
            type="button"
          >
            {alias}
          </button>

          <p className={`gift-copy-message ${copied ? "visible" : ""}`}>
            {copied ? "✓ Alias copiado" : "Tocá para copiar"}
          </p>
        </Reveal>

        <Reveal delay={1200}>
          <p className="gift-thanks">
            Muchas gracias
          </p>
        </Reveal>

      </div>

    </section>
  );
}

export default Gift;