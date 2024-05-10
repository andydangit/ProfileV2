import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Certifications from "./sections/certifications/Certifications";
import Portfolio from "./sections/portfolio/Portfolio";
import Faqs from "./sections/faq/Faqs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Certifications />
      <Portfolio />
      {/* <Faqs /> */}
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
