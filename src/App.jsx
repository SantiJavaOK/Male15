import "./App.css";

import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Location from "./components/Location";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <main>
      <Hero />
      <EventInfo />
      <Location />
      <Confirmation />
    </main>
  );
}

export default App;