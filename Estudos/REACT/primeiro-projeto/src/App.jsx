import { Counter } from "./components/Counter/Counter";
import { Navbar } from "./components/Navbar/Navbar";
// import { Article } from "./components/Article/Article";
import "./styles/App.css";

// import DashboardImg from "./assets/imgs/Designing-Dashboards.png";
// import VibrantImg from "./assets/imgs/Vibrant-Portraits-of-2020.jpg";
// import MalayalamImg from "./assets/imgs/36-Days-of-Malayalam-type.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Counter />
      {/* <section id="articles">
        <Article
        img={DashboardImg}
        title="Designing Dashboards"
        provider="NASA" 
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
        
        <Article 
        img={VibrantImg}
        title="Vibrant Portraits of 2020" 
        provider="SpaceNews" 
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis fugit veritatis eligendi nam, perspiciatis ratione magnam ducimus. Cumque nesciunt dolores provident dignissimos impedit, beatae et veniam velit commodi nulla?"/>
        
        <Article
        img={MalayalamImg}
        title="36 Days of Malayalam type" 
        provider="Spacelight News" 
        text="Lorem ipsum dolor sit amet, nisi consectetur ad ipsum exercitation consectetur commodo. Cupidatat laborum mollit labore adipiscing. Magna eu quis in adipiscing aliquip velit. Ipsum exercitation et magna, nostrud non sunt sunt quis tempor labore sint. Reprehenderit cupidatat nulla elit sit nostrud. Ut aliqua amet tempor et anim commodo et. Adipiscing do nostrud anim est anim. Non excepteur et ex."/>

        <Article 
        img={DashboardImg}
        title="Designing Dashboards" 
        provider="NASA" 
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
      </section> */}
      
    </>
  );
}

export default App;

