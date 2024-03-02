import "./App.css";
import Forside from "./Forside.js";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Bildegalleri from "./Bildegalleri";
import Blogginnlegg from "./Blogginnlegg";
import HekletilbehørForNybegynnere from "./HekletilbehørForNybegynnere.js";
import HeklingGuide from "./HeklingGuide.js";
import ScrollToTop from "./ScrollToTop";
import Kontakt from "./Kontakt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/blogginnlegg" element={<Blogginnlegg />} />
          <Route
            path="/blogginnlegg/10-ma-ha-hekletilbehor-for-nybegynnere"
            element={<HekletilbehørForNybegynnere />}
          />
          <Route
            path="/blogginnlegg/hekling-101-en-komplett-guide"
            element={<HeklingGuide />}
          />
          <Route path="/bildegalleri" element={<Bildegalleri />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
