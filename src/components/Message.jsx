import Reveal from "./Reveal";

function Message() {
  return (
    <section className="message">

      <Reveal delay={0}>
        <p className="message-line">
          Hay momentos que se convierten
        </p>
      </Reveal>

      <Reveal delay={500}>
        <p className="message-line">
          en recuerdos para siempre...
        </p>
      </Reveal>

      <Reveal delay={1000}>
        <p className="message-highlight">
          Quiero compartir uno de ellos con vos.
        </p>
      </Reveal>

    </section>
  );
}

export default Message;