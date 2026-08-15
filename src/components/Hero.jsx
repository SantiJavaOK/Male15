import Reveal from "./Reveal";
import Particles from "./Particles";

function Hero() {
  return (
    <section className="hero">
      <Particles count={30} />
      <div className="hero-decoration hero-decoration-top">
        ✦
      </div>

      <Reveal>
        <p className="hero-subtitle">
          MIS 15
        </p>
      </Reveal>

      <Reveal>
        <h1>Male</h1>
      </Reveal>

      <Reveal>
        <div className="hero-divider" />
      </Reveal>

      <Reveal>
        <p className="hero-date">
          SÁBADO 26 de Septiembre
        </p>
      </Reveal>

      <Reveal>
  <p className="hero-time">
    <span>21:30 HS</span>
    <span className="hero-time-separator">a</span>
    <span>2:30 HS</span>
  </p>
</Reveal>

      <div className="scroll-indicator">
        <span>DESLIZÁ</span>
        <div className="scroll-arrow">↓</div>
      </div>

    </section>
  );
}

export default Hero;