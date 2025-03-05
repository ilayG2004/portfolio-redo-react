import "../styles/fonts.css";
import "../styles/homepage.css";
import "../styles/technicalcarousel.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Carousel } from 'antd';

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
    <div className="projects-container">
    <Card style={{width:400}}>
      <Carousel autoplay>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/projects/sparkbyteslogo.png'}/>
        </div>
        <div>
          <p>Spark! Bytes was a prototype app designed to help bring together Boston University students around something they all love -- food. Community leaders could post invites to events with descriptions, photos, tags, locations to appeal to a wider audience of BU students. Whether it was for the actual meeting, or for the take-home after the fact, the goal of this webapp was to reduce food waste by notifying BU students of these events. Attached is a frontend & backend demonstration of my team's project for Spark! Bytes.</p>
        </div>
      </Carousel>
    </Card>
    <Card style={{width:400}}>
      <Carousel autoplay>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/projects/sparkbyteslogo.png'}/>
        </div>
        <div>
          <p>The City of Boston's budget includes an operating budget and a capital budget. The operating budget handles day-to-day expenses including public employees and services, while the capital budget is more focused on improving currently owned assets. To optimize the allocation of resources for these budgets, it is crucial to understand how Boston's money is being spent. Through collaboration with the Citywide Analytics Team, Boston's central data organization, this project analyzes how Boston spends its annual budget and how it may change over time. Myself and two other peers collaborated to visualize and make predictions on the city's +$4.7-billion budget data. </p>
        </div>
      </Carousel>
    </Card>
    </div>


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