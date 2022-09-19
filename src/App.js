import "./App.scss";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Porfolio from "./components/porfolio/Porfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Porfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
