import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavBar,
  Banner,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
