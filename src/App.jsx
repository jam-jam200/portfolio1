import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Banner, Skills, Projects, Contact } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
