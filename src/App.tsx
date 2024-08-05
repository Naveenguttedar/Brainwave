import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
function App() {
  return (
    <>
      <ButtonGradient />
      <div>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] w-full h-screen overflow-x-hidden lg:overflow-x-visible">
          <Headers />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Roadmap />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
