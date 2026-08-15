import Reveal from "./Reveal";
import Particles from "./Particles";
import "./Message.css";

function Message() {
  return (
    <section className="message">

      <Particles count={18} />

      <div className="message-star">
        <Reveal delay={1000}>
          <span>✦</span>
        </Reveal>
      </div>

      <div className="message-content">

        <Reveal>
          <p className="message-intro">
            Hay momentos que se convierten
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p className="message-main">
            en recuerdos
            <br />
            para siempre...
          </p>
        </Reveal>

        <Reveal delay={1300}>
          <p className="message-highlight">
            Quiero compartir
            <br />
            uno de ellos con vos.
          </p>
        </Reveal>

      </div>

    </section>
  );
}

export default Message;