import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WorkStress from "./components/Work Stress/WorkStress";
import Header from "./components/Header/Header";
import Resources from "./components/Resources/Resources";
import DiscussionBoard from "./components/Discussion Board/DiscussionBoard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-stress" element={<WorkStress />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/DiscussionBoard" element={<DiscussionBoard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
