import Reveal from "./Reveal";
import "./Location.css";

const particles = Array.from({ length: 25 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 4 + 4}s`,
}));

function Location() {
  const mapsUrl = "https://maps.app.goo.gl/pTvvHnwyBPg4oSg46";

  return (
    <section className="location">
      
      <div className="location-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="location-decoration">
        ✦
      </div>

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
          26 DE SEPTIEMBRE
        </p>
      </Reveal>

      <Reveal delay={900}>
        <p className="location-time">
          21:30 HS
        </p>
      </Reveal>

      <Reveal delay={1000}>
        <div className="location-address-divider" />
      </Reveal>

      <Reveal delay={1100}>
        <p className="location-address">
          Av. Pres. Dr. Néstor Kirchner 1043
          <br />
          Berazategui, Buenos Aires
        </p>
      </Reveal>

      <Reveal delay={1300}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          <span className="location-icon">
            ⌖
          </span>
          CÓMO LLEGAR
        </a>
      </Reveal>

    </section>
  );
}

export default Location;