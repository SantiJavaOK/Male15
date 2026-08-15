import Reveal from "./Reveal";
import Particles from "./Particles";

function DressCode() {
  return (
    <section className="dress-code">

      <Particles count={15} />

      <div className="dress-code-star">
        ✦
      </div>

      <div className="dress-code-content">

        <Reveal>
          <p className="dress-code-title">
            DRESS CODE
          </p>
        </Reveal>

        <Reveal delay={400}>
          <h2>
            ELEGANTE SPORT
          </h2>
        </Reveal>

        <Reveal delay={800}>
          <div className="dress-code-divider">
            ✦
          </div>
        </Reveal>

        <Reveal delay={1100}>
          <p className="dress-code-text">
            Elegante, cómodo y listo
            <br />
            para disfrutar la noche.
          </p>
        </Reveal>

      </div>

    </section>
  );
}

export default DressCode;