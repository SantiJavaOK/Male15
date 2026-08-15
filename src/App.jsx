import "./App.css";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Location from "./components/Location";
import Confirmation from "./components/Confirmation";
import DressCode from "./components/DressCode";

function App() {
  return (
    <main>
      <Hero />
      <Message />
      <Location />
      <DressCode />
      <Confirmation />
    </main>
  );
}

export default App;