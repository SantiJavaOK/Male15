import Reveal from "./Reveal";
import Particles from "./Particles";
import "./DressCode.css";

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
            Un look especial para una noche
            <br />
            llena de momentos inolvidables.
          </p>
        </Reveal>

<Reveal delay={1400}>
  <p className="dress-code-note">
    EVITÁ TONOS CLAROS
  </p>
</Reveal>

      </div>

    </section>
  );
}

export default DressCode;