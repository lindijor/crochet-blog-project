import "./App.css";
import crochet from "./crochet.jpg";
import Main from "./Main";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function App() {
  const bakgrunnsbilde = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${crochet})`,
    height: `100vh`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  };

  return (
    <div>
      <div style={bakgrunnsbilde}>
        <div className="header">
          <h1>
            Velkommen til <br /> heklebloggen
          </h1>
          <a href="/" className="btn">
            Se blogginnlegg
          </a>
        </div>
      </div>
      <Main />
      <Gallery />
      <Footer />
    </div>
  );
}
