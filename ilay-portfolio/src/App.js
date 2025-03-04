import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contacts from "./pages/contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
