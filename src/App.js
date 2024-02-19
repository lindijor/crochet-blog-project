import "./App.css";
import Forside from "./Forside.js";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Bildegalleri from "./Bildegalleri";
import Blogginnlegg from "./Blogginnlegg";
import BlogginnleggTittel from "./BlogginnleggTittel.js";
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
            path="/blogginnlegg/blogginnleggtittel"
            element={<BlogginnleggTittel />}
          />
          <Route path="/bildegalleri" element={<Bildegalleri />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
