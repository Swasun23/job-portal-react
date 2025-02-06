import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Mainpage from "./pages/MainPage";
import Jobinfopage from "./pages/JobinfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<Mainpage />} />
        <Route path="/jobs-info/:id" element={<Jobinfopage />} />
      </Routes>
    </Router>
  );
}

export default App;
