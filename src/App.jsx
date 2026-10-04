import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Machines from "./components/Machines";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

import ServicesPage from "./Pages/ServicesPage";
import MachinesPage from "./Pages/MachinesPage";
import MachineDetails from "./Pages/MachineDetails";

import About from "./Pages/About";
import Contact from "./Pages/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Machines />
      <Projects />
      <WhyChooseUs />
    </>
  );
}

function App() {
  return (
    
    <BrowserRouter>


      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/machines"
            element={<MachinesPage />}
          />

          <Route
            path="/machines/:id"
            element={<MachineDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;