import "./App.css";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Location from "./components/Location";
import Confirmation from "./components/Confirmation";
import DressCode from "./components/DressCode";
import Gift from "./components/Gift";
import ListMusic from "./components/ListMusic";

function App() {
  return (
    <main>
      <Hero />
      <Message />
      <Location />
      <DressCode />
      <Gift />
      <Confirmation />
      <ListMusic />
    </main>
  );
}

export default App;