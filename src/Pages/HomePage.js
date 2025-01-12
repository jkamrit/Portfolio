import '../App.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from '../components/NavBar';
import AboutPage from './AboutPage';
import { Navigate, useNavigate } from 'react-router-dom';



const HomePage = () =>{

    const navigate = useNavigate()

return(
    
<div className="Content">
<div className="Content-info">
  <h1>John K Amrit</h1>
  <h2>Hi i am a web developer</h2>
  <p>I am a passionate web developer with a strong focus on crafting responsive, user-friendly websites and web applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Node.js, I specialize in creating seamless digital experiences. My portfolio showcases a range of projects, from sleek landing pages to complex web platforms, each designed with a commitment to functionality and aesthetic appeal. I take pride in writing clean, efficient code and staying updated with the latest trends in web development.</p>
  <button className='btn' onClick={()=>navigate('/about')}>About Me</button>
</div>
<div className='Image'>

</div>
</div>
)
}

export default HomePage;