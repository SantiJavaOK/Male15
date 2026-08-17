import Reveal from "./Reveal";
import "./ListMusic.css";

// Reemplazá esta URL por la playlist real de Spotify.
// Ejemplo: https://open.spotify.com/playlist/XXXXXXXXXXXXXXXX
const spotifyPlaylistUrl =
  "https://open.spotify.com/playlist/7wpMpZrKfNglHQMRUrfr7Q";

const songs = [
  {
    title: "Una canción para bailar",
    artist: "Artista",
    url: "https://open.spotify.com/",
  },
  {
    title: "Una canción especial",
    artist: "Artista",
    url: "https://open.spotify.com/",
  },
  {
    title: "Un clásico de la fiesta",
    artist: "Artista",
    url: "https://open.spotify.com/",
  },
];

function ListMusic() {
  return (
    <section className="list-music">
      <div className="list-music-content">
        <Reveal>
          <p className="list-music-title">LA MÚSICA DE MALE</p>
        </Reveal>

        <Reveal delay={300}>
          <p className="list-music-message">
            Algunas canciones que van a acompañar
            <br />
            este momento tan especial.
          </p>
        </Reveal>

        <div className="list-music-divider">✦</div>

        <Reveal delay={600}>
          <div className="list-music-songs">
            {songs.map((song, index) => (
              <a
                key={index}
                className="list-music-song"
                href={song.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="list-music-icon">♪</span>

                <span className="list-music-info">
                  <span className="list-music-song-title">{song.title}</span>
                  <span className="list-music-artist">{song.artist}</span>
                </span>

                <span className="list-music-play">▶</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={900}>
          <a
            className="list-music-button"
            href={spotifyPlaylistUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>♫</span>
            ESCUCHÁ LA PLAYLIST
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ListMusic;
