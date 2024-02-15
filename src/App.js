import "./App.css";
import crochet from "./crochet.jpg";
import Main from "./Main";

export default function App() {
  const bakgrunnsbilde = {
    backgroundImage: `url(${crochet})`,
    height: `100vh`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  };

  return (
    <div>
      <div style={bakgrunnsbilde}>
        <div className="header">
          <h1>Velkommen til heklebloggen</h1>
          <a href="/" className="btn">
            Se blogginnlegg
          </a>
        </div>
      </div>
      <Main />
    </div>
  );
}
