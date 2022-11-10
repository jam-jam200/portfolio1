import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Banner, Skills, Projects } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
