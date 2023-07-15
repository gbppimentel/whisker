import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import logosub from "./assets/logo/whisker-sub.png";
import landing1 from "./assets/img/landing-1.png";

function App() {
  return (
    <div style={{ position: "relative" }} className="App">
      <img
        src={logosub}
        alt="logosub"
        style={{
          width: "258.315px",
          height: "95px",
          flexShrink: 0,
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
        }}
      />
      <img
        src={landing1}
        alt="landing1"
        style={{
          width: "393px",
          height: "553px",

          position: "absolute",
          top: "250px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      />

      <Landing />
    </div>
  );
}

export default App;
