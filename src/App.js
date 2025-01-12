import './App.css';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/Portfolio';
import ProjectPage from './Pages/Project';
import ContactPage from './Pages/contact';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/about" element = {<AboutPage/>}/>
      <Route path = "/portfolio" element = {<PortfolioPage/>}/>
      <Route path = "/projects" element = {<ProjectPage/>}/>
      <Route path = "/contact" element = {<ContactPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
