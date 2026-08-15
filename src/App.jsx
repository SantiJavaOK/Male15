import "./App.css";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Location from "./components/Location";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <main>
      <Hero />
      <Message />
      <Location />
      <Confirmation />
    </main>
  );
}

export default App;