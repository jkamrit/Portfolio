import '../App.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className="App-header">
            <nav className="Button">
            <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </header>
    )
}

export default NavBar