import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundAnimation from "./components/Animation";
import Home from "./page/Home";
import About from "./containers/About";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects";
import NoResults from "./components/NoResults";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoResults/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
