import "../styles/fonts.css";
import "../styles/homepage.css";
import "../styles/technicalcarousel.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Carousel } from 'antd';


import ProjectCards from "../components/projectcards";
import TechnicalCarousel from "../components/technicalcarousel";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const { Meta } = Card;

export default function Home() {
  return (
  <div>
  <NavBar/>
  <section id="me">
    <div className="me-container">
      <p className="subtitle">Hello World! I am </p>
      <h1 className="title">Ilay Guler</h1>
      <p>A computer science student and tech consultant at Boston University. I was born and raised in New Jersey, and came up to New England 
        to better my skills as a tech engineer and expand my world view. When I am not coding, I enjoy spending my time going on hikes or fishing.
      </p>
    </div>
  </section>
  <hr/>

  <section id="technical">
    
    <h1 className="title">Technical Skills</h1>
    <div className="technical-container">
      <img src={process.env.PUBLIC_URL + '/images/languages/javaicon.png'} ></img> <p> Java</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/python.svg'} ></img> <p>Python</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/csharpicon.png'} ></img> <p>C#</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/javascripticon.png'} ></img> <p>JavaScript</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/reacticon.png'} ></img><p>React</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/htmlicon.png'} ></img>
      <img src={process.env.PUBLIC_URL + '/images/languages/cssicon.svg'} ></img><p>HTML/CSS</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/giticon.webp'} ></img><p>Git</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/postgresicon.png'} ></img><p>PostGres</p>
    </div>
  </section>
  
  <hr/>
  <section id="projects">
    <h1 className="title">My Projects</h1>
    <ProjectCards/>
  </section>
  <hr/>
  <section id="experience">
    <h1 className="title">My Work Experience</h1>
    
  </section>

  <Footer/>
  </div>
 
  );
}

/* <div className="technical-container">
      <img src={process.env.PUBLIC_URL + '/images/languages/javaicon.png'} ></img> <p> Java</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/python.svg'} ></img> <p>Python</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/csharpicon.png'} ></img> <p>C#</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/javascripticon.png'} ></img> <p>JavaScript</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/reacticon.png'} ></img><p>React</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/htmlicon.png'} ></img>
      <img src={process.env.PUBLIC_URL + '/images/languages/cssicon.svg'} ></img><p>HTML/CSS</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/giticon.webp'} ></img><p>Git</p>
      <img src={process.env.PUBLIC_URL + '/images/languages/postgresicon.png'} ></img><p>PostGres</p>
    </div>*/