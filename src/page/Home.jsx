import NavBar from "../components/NavBar";
import About from "../containers/About";
import Footer from "../containers/Footer";
import HeroSection from "../containers/HeroSection";
import Projects from "../containers/Projects";
import Technologies from "../containers/Technologies";
const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
