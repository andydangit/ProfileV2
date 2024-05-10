import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Certifications from "./sections/certifications/Certifications";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Certifications />
      <Portfolio />
      <Contact />
      {/* <FloatingNav /> */}
    </main>
  );
};

export default App;
