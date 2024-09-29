import "./App.css";
import PlayManager from "./PlayManager";
import WindowControls from "./WindowControls";
import logo from "./assets/naeris.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WindowControls/>
      </header>
      <div className="App-body">
        <img
          className="App-logo"
          src={logo}
          alt="Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </div>
      <footer className="App-footer">
        <PlayManager/>
      </footer>
    </div>
  );
}
